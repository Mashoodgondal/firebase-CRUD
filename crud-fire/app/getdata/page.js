"use client";
import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const GetData = () => {
  const [students, setstudents] = useState([]);
  const fetchData = async () => {
    try {
      const collectionName = collection(db, "abs");
      const docs = await getDocs(collectionName);
      const studentData = [];
      docs.forEach((doc) => {
        studentData.push(doc.data());
      });
      setstudents(studentData);
      console.log("students", studentData);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-6 text-center">List of Students</h1>
      <table className="min-w-full bg-white border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-3 px-4 border-b-2 border-gray-300 text-left">
              Name
            </th>
            <th className="py-3 px-4 border-b-2 border-gray-300 text-left">
              Email
            </th>
            <th className="py-3 px-4 border-b-2 border-gray-300 text-left">
              Courses
            </th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-300">
                {student.userName}
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                {student.email}
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                {student.course}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetData;
