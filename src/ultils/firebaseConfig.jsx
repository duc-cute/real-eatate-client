/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXDMBbtznL6ujQqu6cDuVxwectzY_fO40",
  authDomain: "real-estate-5cc40.firebaseapp.com",
  projectId: "real-estate-5cc40",
  storageBucket: "real-estate-5cc40.appspot.com",
  messagingSenderId: "289120245960",
  appId: "1:289120245960:web:530ed5dd0271bbf0fcadfd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getAuth(app);
