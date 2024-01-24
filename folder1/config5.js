// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAr1YnLshy63-0nbj1zOQ2YkybpATPRv5g",
    authDomain: "earths-97963.firebaseapp.com",
    databaseURL: "https://earths-97963-default-rtdb.firebaseio.com",
    projectId: "earths-97963",
    storageBucket: "earths-97963.appspot.com",
    messagingSenderId: "805302852274",
    appId: "1:805302852274:web:b35ae0587eb59f619d07ab"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Cloudinary config
cloudinary.config({
    cloud_name: 'dwatvo2cs',
    api_key: '895648459221571',
    api_secret: 'N-4XC21J19pNOna46oeBXVcj34M'
});
