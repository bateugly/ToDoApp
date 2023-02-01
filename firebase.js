import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native';

const firebaseConfig = {
  // apiKey: "AIzaSyDaUitBcy17bNrIUZ1l5bI3yBkyAF_lSps",
  // authDomain: "todoapp-cc8ba.firebaseapp.com",
  // projectId: "todoapp-cc8ba",
  // storageBucket: "todoapp-cc8ba.appspot.com",
  // messagingSenderId: "327285561962",
  // appId: "1:327285561962:web:afdbd615b7eb492b2f0813",
  // measurementId: "G-YEJX4F991Q"
  apiKey: "AIzaSyAphI8yenvlEMXs3onn7nmrY1rtqIl95eY",
  authDomain: "bate-e7b13.firebaseapp.com",
  databaseURL: "https://bate-e7b13-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bate-e7b13",
  storageBucket: "bate-e7b13.appspot.com",
  messagingSenderId: "472837828353",
  appId: "1:472837828353:web:a3604fb6a58ed891177500",
  measurementId: "G-CYG58XMGM9"
};

const app = initializeApp(firebaseConfig);
//const auth = getAuth();
// initialize auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const db = getFirestore();

export {
  auth,
  db
}