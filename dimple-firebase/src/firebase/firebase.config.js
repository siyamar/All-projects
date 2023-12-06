// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADF72Fkt5VBUwRnmD93-0DhnPMyJVHAq4",
  authDomain: "dimple-firebase-794d5.firebaseapp.com",
  projectId: "dimple-firebase-794d5",
  storageBucket: "dimple-firebase-794d5.appspot.com",
  messagingSenderId: "972035191837",
  appId: "1:972035191837:web:034714fcf194e028bd02f4",
  measurementId: "G-KTC9E7Y9T3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;