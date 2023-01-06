import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxnliXt9SXsF9_uI6_GA9c_tvTLkVEZ_U",
    authDomain: "app-for-archers.firebaseapp.com",
    projectId: "app-for-archers",
    storageBucket: "app-for-archers.appspot.com",
    messagingSenderId: "609630566517",
    appId: "1:609630566517:web:06544612a7c67496f9a03c"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);