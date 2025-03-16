// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5UM3jZB4HUv8JsKX4pqGpkdSCk9BZj44",
  authDomain: "portfolio-2326b.firebaseapp.com",
  projectId: "portfolio-2326b",
  storageBucket: "portfolio-2326b.appspot.com",
  messagingSenderId: "280695220052",
  appId: "1:280695220052:web:8e27b7d98b3061c7ee4ac1",
  measurementId: "G-F73QLEHZCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Enable offline persistence when possible
try {
  enableIndexedDbPersistence(db)
    .catch((err) => {
      if (err.code === 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled in one tab at a time
        console.log('Persistence failed: Multiple tabs open');
      } else if (err.code === 'unimplemented') {
        // The current browser does not support all of the features required for persistence
        console.log('Persistence not supported by this browser');
      }
    });
} catch (error) {
  console.error("Error enabling persistence:", error);
}

// Initialize Analytics only in browser environment
let analytics = null;
if (typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app);
  } catch (error) {
    console.error("Analytics initialization error:", error);
  }
}

export { db, analytics }; 