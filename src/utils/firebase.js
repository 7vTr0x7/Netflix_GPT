// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_bebruRWtmr28fSV92p_vnSbkQv1B-l0",
  authDomain: "netflix-gpt-a992d.firebaseapp.com",
  projectId: "netflix-gpt-a992d",
  storageBucket: "netflix-gpt-a992d.appspot.com",
  messagingSenderId: "658430885670",
  appId: "1:658430885670:web:c24e8b949a499c98cb0be7",
  measurementId: "G-EBQKNT9RJY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
