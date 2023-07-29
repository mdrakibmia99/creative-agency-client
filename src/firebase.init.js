// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA004xQhr5VxeFl9uvL6T5KDeJzDFMerz4",
  authDomain: "creative-agency-233d6.firebaseapp.com",
  projectId: "creative-agency-233d6",
  storageBucket: "creative-agency-233d6.appspot.com",
  messagingSenderId: "554548939041",
  appId: "1:554548939041:web:341baf31c9b7cee9669660"
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;