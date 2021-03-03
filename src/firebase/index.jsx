import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD-7GlFjN6pEoDFckls9DTOkpT79dLkFiU",
  authDomain: "proyectolabotellita.firebaseapp.com",
  projectId: "proyectolabotellita",
  storageBucket: "proyectolabotellita.appspot.com",
  messagingSenderId: "843176459585",
  appId: "1:843176459585:web:5a7231e3fb0ad602c1b5c0",
  measurementId: "G-RBX7Q7BR45",
});

export const getFirebase = () => {
  return app;
}

export const getFirestore = () => {
  return firebase.firestore(app);
}
