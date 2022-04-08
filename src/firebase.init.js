// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaSGQINLSvnncJ3HcmSDtWF8GMpJ3VFNA",
    authDomain: "email-password-auth-55130.firebaseapp.com",
    projectId: "email-password-auth-55130",
    storageBucket: "email-password-auth-55130.appspot.com",
    messagingSenderId: "724575318565",
    appId: "1:724575318565:web:2fe541cca531b7615e05cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app