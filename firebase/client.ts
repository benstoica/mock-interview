import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfVex9I6xwWg-_o6afhMGL500pvtvs7vo",
  authDomain: "mock-interview-53916.firebaseapp.com",
  projectId: "mock-interview-53916",
  storageBucket: "mock-interview-53916.firebasestorage.app",
  messagingSenderId: "1096912165220",
  appId: "1:1096912165220:web:2edaab93ffc4a734820271",
  measurementId: "G-RBD51DMXD2",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
