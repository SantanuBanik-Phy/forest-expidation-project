// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4s_i9X4Ll_0dWN4K-haRkisI7U9LYhZw",
  authDomain: "b10-a9-auth.firebaseapp.com",
  projectId: "b10-a9-auth",
  storageBucket: "b10-a9-auth.firebasestorage.app",
  messagingSenderId: "452754280663",
  appId: "1:452754280663:web:f601301a1f99f048db6092"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

// Export the initialized Firebase app
export default auth;
