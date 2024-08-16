// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgsoFogvheMS7XtoTjLlbC0hGJK8eExC0",
  authDomain: "product-3cbe0.firebaseapp.com",
  projectId: "product-3cbe0",
  storageBucket: "product-3cbe0.appspot.com",
  messagingSenderId: "627301866609",
  appId: "1:627301866609:web:7ed0fbb6c6435022e24fd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;