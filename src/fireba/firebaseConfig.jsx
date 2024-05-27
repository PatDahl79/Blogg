import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDYzrb91znr5wEe-E8_C31NzZRALunVbp0",
  authDomain: "blog-app-d953d.firebaseapp.com",
  projectId: "blog-app-d953d",
  storageBucket: "blog-app-d953d.appspot.com",
  messagingSenderId: "931961983980",
  appId: "1:931961983980:web:8160c03b40f1126f4c26c9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDB, auth, storage };
