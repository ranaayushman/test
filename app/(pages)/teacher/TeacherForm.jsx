import React from "react";
import TeacherPInfo from "./ui/TeacherInfo";
import TeacherCategory from "./ui/TeacherCategory";

const TeacherForm = () => {
  return (
    <div className="bg-white drop-shadow-custom rounded-md p-6">
      <TeacherPInfo />
      {/* <TeacherCategory /> */}
    </div>
  );
};

export default TeacherForm;
