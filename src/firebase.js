import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyClfMcVdlgQP9cEDl2sN-FzdBh0g4YGHzU",
  authDomain: "cryptocoresolutions-dd6cb.firebaseapp.com",
  projectId: "cryptocoresolutions-dd6cb",
  storageBucket: "cryptocoresolutions-dd6cb.appspot.com",
  messagingSenderId: "291686091821",
  appId: "1:291686091821:web:af0d84659970c911977ca4"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyClfMcVdlgQP9cEDl2sN-FzdBh0g4YGHzU",
//   authDomain: "cryptocoresolutions-dd6cb.firebaseapp.com",
//   projectId: "cryptocoresolutions-dd6cb",
//   storageBucket: "cryptocoresolutions-dd6cb.appspot.com",
//   messagingSenderId: "291686091821",
//   appId: "1:291686091821:web:af0d84659970c911977ca4"
// };

// // Initialize Firebase
// const db = initializeApp(firebaseConfig);
// export {db}