// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtVoUMi6FnMtBMkBWJie9-vR1w2_HVnWc",
  authDomain: "todo-typescript-2d956.firebaseapp.com",
  projectId: "todo-typescript-2d956",
  storageBucket: "todo-typescript-2d956.appspot.com",
  messagingSenderId: "845029410876",
  appId: "1:845029410876:web:12e600cd0d8931e4dfdb39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
export const db = getFirestore(app);