import InputField from "@/app/components/ui/fields/InputField";
import RadioField from "@/app/components/ui/fields/RadioField";
import SelectField from "@/app/components/ui/fields/SelectField";
import React, { useState } from "react";

const TeacherSubject = () => {
  const [formData, setFormData] = useState({
    subject1: "",
    subject2: "",
    mainSubject: "",
    additionalSubject: "",
    nonTeachingDays: "",
    englishStudiedUpto: "",
    mathsStudiedUpto: "",
    ssStudiedUpto: "",
    computerTrained: "",
    workingSince: "",
    trainedCSWN: "",
    evaluationMedium: "",
  });

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-1/2">
        <h2>Appointed for Subjects:</h2>
        <div className="grid grid-cols-2 gap-x-5 w-3/4">
          <SelectField
            placeholder="Select Subject 1"
            value={formData.subject1}
            onChange={(value) => handleInputChange("subject1", value)}
          />
          <SelectField
            placeholder="Select Subject 2"
            value={formData.subject2}
            onChange={(value) => handleInputChange("subject2", value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-5">
        <SelectField
          label="Main Subject Taught:"
          placeholder="Select Main Subject"
          value={formData.mainSubject}
          onChange={(value) => handleInputChange("mainSubject", value)}
        />
        <SelectField
          label="Additional Subject Taught:"
          placeholder="Select Additional Subject"
          value={formData.additionalSubject}
          onChange={(value) => handleInputChange("additionalSubject", value)}
        />
      </div>
      <div className="w-1/2 mt-[10px]">
        <InputField
          label="No of Working Days Spent on Non Teaching Assignments:"
          placeholder="Enter No. of Days"
          value={formData.nonTeachingDays}
          onChange={(e) => handleInputChange("nonTeachingDays", e.target.value)}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-5">
        <SelectField
          label="English Studied Upto:"
          placeholder="Select Class"
          value={formData.englishStudiedUpto}
          onChange={(value) => handleInputChange("englishStudiedUpto", value)}
        />
        <SelectField
          label="Maths/Science Studied Upto:"
          placeholder="Select Class"
          value={formData.mathsStudiedUpto}
          onChange={(value) => handleInputChange("mathsStudiedUpto", value)}
        />
        <SelectField
          label="Social Studies Studied Upto:"
          placeholder="Select Class"
          value={formData.ssStudiedUpto}
          onChange={(value) => handleInputChange("ssStudiedUpto", value)}
        />
      </div>
      <div className="mt-[10px]">
        <RadioField
          label="Trained in use of Computer/Teaching through Computer:"
          options={["Yes", "No"]}
          value={formData.computerTrained}
          onChange={(value) => handleInputChange("computerTrained", value)}
        />
      </div>
      <div className="w-1/3 mt-[10px]">
        <SelectField
          label="Working in Present School Since(YEAR):"
          placeholder="Select Year"
          value={formData.workingSince}
          onChange={(value) => handleInputChange("workingSince", value)}
        />
      </div>
      <div className="mt-[10px] flex">
        <RadioField
          label="Trained to Teach CSWN:"
          options={["Yes", "No"]}
          value={formData.trainedCSWN}
          onChange={(value) => handleInputChange("trainedCSWN", value)}
        />
        <div className="border h-14 mx-4"></div>
        <RadioField
          label="Evaluation Medium (Bengali Medium only for Tripura State):"
          options={["English", "Hindi", "Urdu", "Punjabi", "Bengali"]}
          value={formData.evaluationMedium}
          onChange={(value) => handleInputChange("evaluationMedium", value)}
        />
      </div>
    </form>
  );
};

export default TeacherSubject;
