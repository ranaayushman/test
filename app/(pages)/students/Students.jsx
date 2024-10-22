import Image from "next/image";
import React from "react";
import SearchFilter from "./Button";

const StudentTable = () => {
  const students = [
    {
      serialNo: "0123456789",
      name: "MAYANK KUMAR BANWAL",
      dob: "01/01/2000",
      class: "10th",
      sec: "A",
      rollNo: "60",
      regNo: "0216180160",
      address: "Jhunjha Colony, Durgapur",
      picture: "/img/Profile.png",
    },
    {
      serialNo: "0123456789",
      name: "MAYANK KUMAR BANWAL",
      dob: "01/01/2000",
      class: "10th",
      sec: "A",
      rollNo: "60",
      regNo: "0216180160",
      address: "Jhunjha Colony, Durgapur",
      picture: "/img/Profile.png",
    },
    {
      serialNo: "0123456789",
      name: "MAYANK KUMAR BANWAL",
      dob: "01/01/2000",
      class: "10th",
      sec: "A",
      rollNo: "60",
      regNo: "0216180160",
      address: "Jhunjha Colony, Durgapur",
      picture: "/img/Profile.png",
    },
    {
      serialNo: "0123456789",
      name: "MAYANK KUMAR BANWAL",
      dob: "01/01/2000",
      class: "10th",
      sec: "A",
      rollNo: "60",
      regNo: "0216180160",
      address: "Jhunjha Colony, Durgapur",
      picture: "/img/Profile.png",
    },
    {
      serialNo: "0123456789",
      name: "MAYANK KUMAR BANWAL",
      dob: "01/01/2000",
      class: "10th",
      sec: "A",
      rollNo: "60",
      regNo: "0216180160",
      address: "Jhunjha Colony, Durgapur",
      picture: "/img/Profile.png",
    },
    {
      serialNo: "0123456789",
      name: "MAYANK KUMAR BANWAL",
      dob: "01/01/2000",
      class: "10th",
      sec: "A",
      rollNo: "60",
      regNo: "0216180160",
      address: "Jhunjha Colony, Durgapur",
      picture: "/img/Profile.png",
    },
  ];

  return (
    <div className="overflow-x-auto border rounded-md drop-shadow-custom">
      <table className="w-full bg-white rounded-lg">
        <thead>
          <tr className="">
            <th className="border border-black border-l-0 border-t-0 px-4 py-2 text-left">
              Serial No.
            </th>
            <th className="border border-black border-l-0 border-t-0 px-4 py-2 text-left">
              Name
            </th>
            <th className="border border-black border-l-0 border-t-0 px-4 py-2 text-left">
              D.O.B
            </th>
            <th className="border border-black border-l-0 border-t-0 px-4 py-2 text-left">
              Class
            </th>
            <th className="border border-black border-l-0 border-t-0 px-4 py-2 text-left">
              Sec
            </th>
            <th className="border border-black border-l-0 border-t-0 px-4 py-2 text-left">
              Roll No.
            </th>
            <th className="border border-black border-l-0 border-t-0 px-4 py-2 text-left">
              Reg No.
            </th>
            <th className="border border-black border-l-0 border-t-0 px-4 py-2 text-left">
              Address
            </th>
            <th className="border border-black border-l-0 border-t-0 px-4 py-2 text-left">
              Picture
            </th>
            <th className="border border-black border-r-0 border-t-0 px-4 py-2 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td className="border border-black border-l-0 border-b-0 px-4 py-2 text-sm">
                {student.serialNo}
              </td>
              <td className="border border-black border-l-0 border-b-0 px-4 py-2 text-sm">
                {student.name}
              </td>
              <td className="border border-black border-l-0 border-b-0 px-4 py-2 text-sm">
                {student.dob}
              </td>
              <td className="border border-black border-l-0 border-b-0 px-4 py-2 text-sm">
                {student.class}
              </td>
              <td className="border border-black border-l-0 border-b-0 px-4 py-2 text-sm">
                {student.sec}
              </td>
              <td className="border border-black border-l-0 border-b-0 px-4 py-2 text-sm">
                {student.rollNo}
              </td>
              <td className="border border-black border-l-0 border-b-0 px-4 py-2 text-sm">
                {student.regNo}
              </td>
              <td className="border border-black border-l-0 border-b-0 px-4 py-2 text-sm">
                {student.address}
              </td>
              <td className="border border-black border-l-0 border-b-0 px-4 py-2">
                <Image
                  width={60}
                  height={60}
                  src={student.picture}
                  alt="Student"
                  className="object-cover"
                />
              </td>
              <td className="border border-black border-r-0 border-b-0 px-4 py-2">
                <button className="bg-[#789336] text-white px-3 py-1 rounded text-sm">
                  Update Info
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
