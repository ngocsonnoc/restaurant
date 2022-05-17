import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUvg9c5cFeN4_Frl6XpzPsbQ3kjBfntPQ",
  authDomain: "restaurant-20198.firebaseapp.com",
  projectId: "restaurant-20198",
  storageBucket: "restaurant-20198.appspot.com",
  messagingSenderId: "283536682724",
  appId: "1:283536682724:web:c8e9bb8f4112b3a9b3c6f1",
  measurementId: "G-CJ4G0HEHEJ",
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
export { storage };
