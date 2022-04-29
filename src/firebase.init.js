// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGbSTdeFbOJqaQwHhWnkIJtg6i4Zd2hn8",
  authDomain: "travel-with-imtiaz.firebaseapp.com",
  projectId: "travel-with-imtiaz",
  storageBucket: "travel-with-imtiaz.appspot.com",
  messagingSenderId: "428770939701",
  appId: "1:428770939701:web:d2084dcc8eebc7936eb27c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;