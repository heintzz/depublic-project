import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIREBASE_API_KEY}`,
  authDomain: "depublic-project.firebaseapp.com",
  projectId: "depublic-project",
  storageBucket: "depublic-project.appspot.com",
  messagingSenderId: "903230214740",
  appId: "1:903230214740:web:8663c3ba710ae7125dd3c1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
