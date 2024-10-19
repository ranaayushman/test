import React, { useState } from "react";
import PersonalInfo from "./ui/PersonalInfo";
import Guardians from "./ui/Guardians";
import School from "./ui/School";
import Siblings from "./ui/Siblings";
import Stream from "./ui/Stream";
import Subjects from "./ui/Subjects";
import Document from "./ui/Document";
import Finance from "./ui/Finance";

const NewForm = () => {
  return (
    <div className="w-full drop-shadow-custom bg-white p-8 rounded-md">
      <PersonalInfo />
      <Guardians />
      <School />
      <Siblings />
      <Stream />
      <Subjects />
      <Document />
      <Finance />
      <button
        type="submit"
        className="px-4 py-2 bg-[#789336] w-1/3 text-white rounded-md mt-10 h-12"
      >
        Submit
      </button>
    </div>
  );
};

export default NewForm;
