// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGTS5WmIJRkWUWIo927qUzV-JJ9L3g3kM",
    authDomain: "docs-clone-542e7.firebaseapp.com",
    projectId: "docs-clone-542e7",
    storageBucket: "docs-clone-542e7.appspot.com",
    messagingSenderId: "366075749010",
    appId: "1:366075749010:web:018fce5d3d9bfae6a9bc4b",
    measurementId: "G-X45C1B4KPN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


//const analytics = getAnalytics(app);
export const database = getFirestore(app);
