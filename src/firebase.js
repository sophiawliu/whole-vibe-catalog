// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhSnKPDbwGHtXlQPCD9Bxw91xLBeWFdzg",
  authDomain: "whole-vibe-catalog.firebaseapp.com",
  projectId: "whole-vibe-catalog",
  storageBucket: "whole-vibe-catalog.appspot.com",
  messagingSenderId: "282621802612",
  appId: "1:282621802612:web:e06f9afe46fa2258d9b921",
  measurementId: "G-9M1XKSCZPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);