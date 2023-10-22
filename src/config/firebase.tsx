import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZpzCt3V9K9KsOWHjleVCYSYQ1TPObcdo",
  authDomain: "depublic-project.firebaseapp.com",
  projectId: "depublic-project",
  storageBucket: "depublic-project.appspot.com",
  messagingSenderId: "903230214740",
  appId: "1:903230214740:web:8663c3ba710ae7125dd3c1",
};

const app = initializeApp(firebaseConfig);

export const getUserAuth = () => {
  const auth = getAuth(app);
  return auth;
};
