// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIAPIKEY,
  authDomain: import.meta.env.VITE_APIAUTHDOMAIN,
  projectId: import.meta.env.VITE_APIPROJECTID,
  storageBucket: import.meta.env.VITE_APISTORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_APIMESSAGINGSENDERID,
  appId: import.meta.env.VITE_APIAPPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;