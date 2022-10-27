// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2zmYRaOocfNr9Jr5yQQ3aX3XEnQ7k41o",
    authDomain: process.env.REACT_APP_authDomain,
    projectId: "dragon-news-5b4fb",
    storageBucket: "dragon-news-5b4fb.appspot.com",
    messagingSenderId: "427254538646",
    appId: "1:427254538646:web:cdaf4779b596592949fdb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;