// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUVOKDAK-_pPYY3228kVMx52bvoteLec8",
  authDomain: "user-email-password-bf34b.firebaseapp.com",
  projectId: "user-email-password-bf34b",
  storageBucket: "user-email-password-bf34b.appspot.com",
  messagingSenderId: "1090604746342",
  appId: "1:1090604746342:web:655537684aa65a24a5cfa7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;