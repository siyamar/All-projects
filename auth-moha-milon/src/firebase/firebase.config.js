// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuVKJqZOrYM84UmiRik-8ij0DVwH0RobU",
  authDomain: "auth-moha-milon-6d884.firebaseapp.com",
  projectId: "auth-moha-milon-6d884",
  storageBucket: "auth-moha-milon-6d884.appspot.com",
  messagingSenderId: "108363292947",
  appId: "1:108363292947:web:090e784544e7d9a1d7bae6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;