import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB0GjYMbPJzzGsu893e0eePnF7EhbDV7zk",
    authDomain: "crypto-store-2907a.firebaseapp.com",
    projectId: "crypto-store-2907a",
    storageBucket: "crypto-store-2907a.appspot.com",
    messagingSenderId: "440565977147",
    appId: "1:440565977147:web:95b08119d5b3865db34c1e"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };