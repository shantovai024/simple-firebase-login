// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1WAUUq8AD5Ua-_xU47eyeYQ0_nmjbNhI",
  authDomain: "simple-login-bae3f.firebaseapp.com",
  projectId: "simple-login-bae3f",
  storageBucket: "simple-login-bae3f.appspot.com",
  messagingSenderId: "558999264189",
  appId: "1:558999264189:web:2bac8c5883dc7b091fd0d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth = getAuth(app)
export default auth;