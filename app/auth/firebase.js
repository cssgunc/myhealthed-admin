import firebase from "firebase/app";
import "firebase/auth";

import config from "./config";

firebase.initializeApp(config);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
}

export const signOut = () => {
  auth.signOut();
}

export default auth;
