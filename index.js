// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu4En1OjxEb5w7uFQH2pXv5CK-sWllDcs",
  authDomain: "pnit-club.firebaseapp.com",
  projectId: "pnit-club",
  storageBucket: "pnit-club.appspot.com",
  messagingSenderId: "410575180087",
  appId: "1:410575180087:web:e2d26399fa1a506bb40ab2",
  measurementId: "G-V8NZ6Y609H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);