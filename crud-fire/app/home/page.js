// "use client";
// import { addDoc } from "firebase/firestore";
// import { collection } from "firebase/firestore";
// import { db } from "@/config/firebase";

// import { useState } from "react";

// const HomePage = () => {
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [course, setCourse] = useState("");
//   const submitHandeler = async () => {
//     let student = {
//       userName,
//       email,
//       course,
//     };
//     try {
//       const collectionName = collection(db, "abs");
//       await addDoc(collectionName, student);
//       console.log("Document written with ID:");
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   };
//   return (
//     <div className="container mx-auto my-8 max-w-md">
//       <div className="space-y-4">
//         <input
//           type="text"
//           placeholder="Enter name"
//           onChange={(e) => setUserName(e.target.value)}
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />
//         <input
//           type="email"
//           placeholder="Enter email"
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />
//         <input
//           type="text"
//           placeholder="Enter course"
//           onChange={(e) => setCourse(e.target.value)}
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />
//         <button
//           onClick={submitHandeler}
//           className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
"use client";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useState } from "react";

const HomePage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const submitHandler = async () => {
    let student = {
      userName,
      email,
      course,
    };

    try {
      const collectionRef = collection(db, "abs");
      await addDoc(collectionRef, student);
      console.log("Document successfully added!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="container mx-auto my-8 max-w-md p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white text-center mb-4">
        Student Form
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Enter name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Enter course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={submitHandler}
          className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default HomePage;
