// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuij74a0jBxAzYZ3yK5yZtBcErdepi5EY",
  authDomain: "netflix-a0767.firebaseapp.com",
  projectId: "netflix-a0767",
  storageBucket: "netflix-a0767.appspot.com",
  messagingSenderId: "34789670113",
  appId: "1:34789670113:web:d5904552dcb89e4e9c8ba0",
  measurementId: "G-HPNV983ZZK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
