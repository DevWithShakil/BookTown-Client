// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDz19wYLtM8mf9SLKKu14avHp_SlE1CKo",
    authDomain: "booktown-a3d58.firebaseapp.com",
    projectId: "booktown-a3d58",
    storageBucket: "booktown-a3d58.appspot.com",
    messagingSenderId: "317256546641",
    appId: "1:317256546641:web:2f0aa03c3225a92028bb70",
    measurementId: "G-X15JJ7HP4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)