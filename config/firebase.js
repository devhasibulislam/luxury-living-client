// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm2pOqKl8R-nfMmiPOgC3zMrlLgdP-T_A",
  authDomain: "luxury-living-f30e7.firebaseapp.com",
  projectId: "luxury-living-f30e7",
  storageBucket: "luxury-living-f30e7.appspot.com",
  messagingSenderId: "118523679326",
  appId: "1:118523679326:web:80d5007f7bc0026851dacf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
