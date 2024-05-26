import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';


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
const fireDB = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDB, auth, storage };
