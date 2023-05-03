// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVFd0eEpQMaGQW3YcWj1neeXmnhwiaa54",
  authDomain: "the-world-of-foods.firebaseapp.com",
  projectId: "the-world-of-foods",
  storageBucket: "the-world-of-foods.appspot.com",
  messagingSenderId: "604569783120",
  appId: "1:604569783120:web:c13195760397028a87fa55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app