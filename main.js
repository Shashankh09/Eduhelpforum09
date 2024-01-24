// setting up firebase with our website
const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyBV9fP6jZiKCxvfoI6pwihJwFaMzbpDmd8",
  authDomain: "eduhelp-forum-78e9f.firebaseapp.com",
  projectId: "eduhelp-forum-78e9f",
  storageBucket: "eduhelp-forum-78e9f.appspot.com",
  messagingSenderId: "970837350430",
  appId: "1:970837350430:web:b7c1025cb3d711011e360f"
 });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();



   // Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((resullt) => {
    // Signed in 
    //  document.write("You are Signed Up")
     alert("Signed up successfully");
     window.location.assign("index3.html")
    //  console.log(result)
    // ...
  })
  
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
   
  });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    //firebase code
   firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    // document.write("You are Signed In")
    window.location.assign("index3.html");
    alert("Login Successful");
    // console.log(result)
    // ...
  })
  
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
            
        });
}