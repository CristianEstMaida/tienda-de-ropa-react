// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwjAjK24bTRqfO3-HD5B8isp9NHdzaow8",
  authDomain: "mi-app-tienda.firebaseapp.com",
  projectId: "mi-app-tienda",
  storageBucket: "mi-app-tienda.appspot.com",
  messagingSenderId: "524461156736",
  appId: "1:524461156736:web:a83a4c38d1c2189b603965",
  measurementId: "G-PJ3MTMZEG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);