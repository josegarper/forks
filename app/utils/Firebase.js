import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDF2TUQTRUxpgyqXpLA2KxEJs_q7bxOdKE",
  authDomain: "tenedores-4916e.firebaseapp.com",
  databaseURL: "https://tenedores-4916e.firebaseio.com",
  projectId: "tenedores-4916e",
  storageBucket: "tenedores-4916e.appspot.com",
  messagingSenderId: "534746830594",
  appId: "1:534746830594:web:fe6467dc784d767e07141b",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
