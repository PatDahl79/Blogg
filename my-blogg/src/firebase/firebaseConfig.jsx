// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSnA61yxFA8zMHA5nncZalTejGTsbsVZo",
  authDomain: "bloggii-93da0.firebaseapp.com",
  projectId: "bloggii-93da0",
  storageBucket: "bloggii-93da0.appspot.com",
  messagingSenderId: "443302333733",
  appId: "1:443302333733:web:6b52b507fb6c528cf81ecc",
  measurementId: "G-EHLV6JDJS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);