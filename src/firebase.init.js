// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8zA12VUos9h8hxuNmz3NYr4cjPbVfY9Q",
    authDomain: "red-onion-food-f5f78.firebaseapp.com",
    projectId: "red-onion-food-f5f78",
    storageBucket: "red-onion-food-f5f78.appspot.com",
    messagingSenderId: "434887402721",
    appId: "1:434887402721:web:616902dee2f73ac0e703a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;