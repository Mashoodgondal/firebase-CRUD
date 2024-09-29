"use client";
import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "@/config/firebase";

import { useState } from "react";

const HomePage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const submitHandeler = async () => {
    let student = {
      name: userName,
      email,
      course,
    };
    try {
      const collectionName = collection(db, "abs");
      await addDoc(collectionName, {
        userName,
        email,
        course,
      });
      console.log("Document written with ID:");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div>
      <input
        placeholder="Enter name"
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <input
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        placeholder="Enter course"
        onChange={(e) => setCourse(e.target.value)}
      ></input>
      <button onClick={submitHandeler}>submit</button>
    </div>
  );
};

export default HomePage;
