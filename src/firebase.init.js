// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFL9YkRH2GtxCFBn6u-Lw9FZw4OnPIWI4",
  authDomain: "tech-world-6e55a.firebaseapp.com",
  projectId: "tech-world-6e55a",
  storageBucket: "tech-world-6e55a.appspot.com",
  messagingSenderId: "698910691856",
  appId: "1:698910691856:web:561c7c9b81e7ed5127f095"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;