// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBEZ1xVgDUj9Bbt15JAMvHAeNC4HCsaL0",
    authDomain: "ema-john-3f391.firebaseapp.com",
    projectId: "ema-john-3f391",
    storageBucket: "ema-john-3f391.appspot.com",
    messagingSenderId: "1052190551451",
    appId: "1:1052190551451:web:7be9fcad5d0ddcf594c53e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;