// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvcgCcVk8LhnUsk3VurU4CNaF26OdjZKM",
  authDomain: "fir-demo-matrix.firebaseapp.com",
  projectId: "fir-demo-matrix",
  storageBucket: "fir-demo-matrix.appspot.com",
  messagingSenderId: "467923741697",
  appId: "1:467923741697:web:3e73b7c8eedd089ac52400"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app