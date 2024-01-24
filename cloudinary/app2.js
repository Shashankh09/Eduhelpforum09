const cloudName = 'dwatvo2cs';
const uploadPreset = 'Eduhelpforum';
const cloudinaryFolder = 'Communication Skills';


const myWidget = cloudinary.createUploadWidget({
    cloudName: cloudName,
    uploadPreset: uploadPreset,
    folder: cloudinaryFolder,  
    resourceType: 'image',  
}, (error, result) => {
    if (!error && result && result.event === "success") {
        const imageUrl = result.info.secure_url;

        firebase.database().ref('images').push({
            imageUrl,
        });
    }
});


myWidget.open();

document.getElementById('cloudinary-upload-widget').addEventListener('click', () => {
    myWidget.open();
});


firebase.database().ref('images').on('child_added', (snapshot) => {
    const imageUrl = snapshot.val().imageUrl;

    
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.style.marginRight='10px';
    imgElement.style.width='800px';
    imgElement.style.width='500px';
    document.getElementById('imageContainer').appendChild(imgElement);
});
