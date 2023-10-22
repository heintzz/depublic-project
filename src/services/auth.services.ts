import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getUserAuth } from "../config/firebase";

const handleUserSignup = async (email: string, password: string): Promise<User> => {
  return createUserWithEmailAndPassword(getUserAuth(), email, password)
    .then((userCredential: UserCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

const handleUserLogin = async (email: string, password: string): Promise<User> => {
  return signInWithEmailAndPassword(getUserAuth(), email, password)
    .then((userCredential: UserCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const authServices = { handleUserSignup, handleUserLogin };
