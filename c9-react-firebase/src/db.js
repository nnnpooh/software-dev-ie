// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCYm0u2hUkxzXga9X-OTFJgdg-cP_GEUcE',
  authDomain: 'software-dev-b0cd9.firebaseapp.com',
  projectId: 'software-dev-b0cd9',
  storageBucket: 'software-dev-b0cd9.appspot.com',
  messagingSenderId: '71485231727',
  appId: '1:71485231727:web:18688ef883b59c6a0db39a',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
