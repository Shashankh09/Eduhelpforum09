// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDxPLY0mzyspLCbPUHxZt1LX7DGd_M53KU",
    authDomain: "chemistry-68117.firebaseapp.com",
    databaseURL: "https://chemistry-68117-default-rtdb.firebaseio.com",
    projectId: "chemistry-68117",
    storageBucket: "chemistry-68117.appspot.com",
    messagingSenderId: "622043452522",
    appId: "1:622043452522:web:e28102884e850d4d21e613"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Cloudinary config
cloudinary.config({
    cloud_name: 'dwatvo2cs',
    api_key: '895648459221571',
    api_secret: 'N-4XC21J19pNOna46oeBXVcj34M'
});
