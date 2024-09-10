// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMLat0gHAyyq672UkouZXoKtz1fSopDqI",
  authDomain: "coffee-store-client-be096.firebaseapp.com",
  projectId: "coffee-store-client-be096",
  storageBucket: "coffee-store-client-be096.appspot.com",
  messagingSenderId: "803564594413",
  appId: "1:803564594413:web:a7a057e9c2bab6b25158e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app