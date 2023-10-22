import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "config/firebase";
import { GoogleAuthProvider } from "firebase/auth";

const handleUserSignup = async (email: string, password: string): Promise<User> => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

const handleUserLogin = async (email: string, password: string): Promise<User> => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

const handleGoogleOauth = async (): Promise<string | undefined> => {
  console.log(auth);
  return signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log("Result: ", result);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log("Credential: ", credential);
      const token = credential?.accessToken;
      return token;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const authServices = { handleUserSignup, handleUserLogin, handleGoogleOauth };
