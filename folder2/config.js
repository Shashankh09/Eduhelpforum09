// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBV9fP6jZiKCxvfoI6pwihJwFaMzbpDmd8",
    authDomain: "eduhelp-forum-78e9f.firebaseapp.com",
    databaseURL: "https://eduhelp-forum-78e9f-default-rtdb.firebaseio.com",
    projectId: "eduhelp-forum-78e9f",
    storageBucket: "eduhelp-forum-78e9f.appspot.com",
    messagingSenderId: "970837350430",
    appId: "1:970837350430:web:b7c1025cb3d711011e360f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Cloudinary config
cloudinary.config({
    cloud_name: 'dwatvo2cs',
    api_key: '895648459221571',
    api_secret: 'N-4XC21J19pNOna46oeBXVcj34M'
});
