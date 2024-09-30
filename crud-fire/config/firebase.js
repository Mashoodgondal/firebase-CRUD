"use client";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBovWwY3VGG9yjKLIiILY-F3-axyMjm9CU",
  authDomain: "firebasr-testing.firebaseapp.com",

  projectId: "firebasr-testing",
  storageBucket: "firebasr-testing.appspot.com",
  messagingSenderId: "553818083725",
  appId: "1:553818083725:web:0e9fa80f56a4a24305edc4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
