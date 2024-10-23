import React from "react";
import TeacherPInfo from "./ui/TeacherInfo";
import TeacherCategory from "./ui/TeacherCategory";
import TeacherSubject from "./ui/TeacherSubject";
import TeacherClass from "./ui/TeacherClass";
import TeacherBank from "./ui/TeacherBank";
import TeacherDetails from "./ui/TeacherDetails";

const TeacherForm = () => {
  return (
    <div className="bg-white drop-shadow-custom rounded-md p-6">
      <TeacherPInfo />
      <TeacherCategory />
      <TeacherSubject />
      <TeacherClass />
      <TeacherBank />
      {/* <TeacherDetails /> */}
      <button
        type="submit"
        className="px-4 py-2 bg-[#789336] w-1/3 text-white rounded-md mt-10 h-12"
      >
        Submit
      </button>
    </div>
  );
};

export default TeacherForm;
