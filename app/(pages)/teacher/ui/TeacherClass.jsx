import CheckboxField from "@/app/components/ui/fields/CheckboxField";
import SelectField from "@/app/components/ui/fields/SelectField";
import React, { useState } from "react";

const TeacherClass = () => {
  const [formData, setFormData] = useState({
    classesTaught: [],
    subject1: "",
    subject2: "",
    experiencedSubject1: "",
    experiencedSubject2: "",
    wardAppearingSubject: "",
  });

  const handleCheckboxChange = (option) => {
    setFormData((prev) => ({
      ...prev,
      classesTaught: prev.classesTaught.includes(option)
        ? prev.classesTaught.filter((item) => item !== option)
        : [...prev.classesTaught, option],
    }));
  };

  const isChecked = (option) => {
    return formData.classesTaught.includes(option);
  };

  const handleSelectChange = (name) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

  const classOptions = [
    "KG-Nursery",
    "Class I",
    "Class II",
    "Class III ",
    "Class IV",
    "Class V",
    "Class VI",
    "Class VII",
    "Class VIII",
    "Class IX",
    "Class X",
    "Class XI",
    "Class XII",
  ];

  const subjectOptions = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "Hindi",
    "Social Studies",
    "Computer ",
  ];

  return (
    <div className="">
      <div className="w-3/4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Classes Taught:
          </label>
          <div className="grid grid-cols-7 gap-x-1 gap-y-2">
            {classOptions.map((option) => (
              <CheckboxField
                key={option}
                id={option}
                name="classesTaught"
                label={option}
                checked={isChecked(option)}
                onChange={() => handleCheckboxChange(option)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">
          SENIOR SECONDARY EDUCATION:
        </h2>
        <div className="grid grid-cols-4 gap-x-5 pt-[10px]">
          <SelectField
            label="Subject 1(Currently Teaching):"
            placeholder="Select Subject 1"
            value={formData.subject1}
            onChange={handleSelectChange("subject1")}
            options={subjectOptions}
          />
          <SelectField
            label="Subject 2:"
            placeholder="Select Additional Subject"
            value={formData.subject2}
            onChange={handleSelectChange("subject2")}
            options={subjectOptions}
          />
        </div>
        <div className="grid grid-cols-4 gap-x-5 pt-[10px]">
          <SelectField
            label="Experienced Subject 1 :"
            placeholder="Currently Teaching Subject 1"
            value={formData.experiencedSubject1}
            onChange={handleSelectChange("experiencedSubject1")}
            options={subjectOptions}
          />
          <SelectField
            label="Experienced Subject 2:"
            placeholder="Select Experienced Subject 2"
            value={formData.experiencedSubject2}
            onChange={handleSelectChange("experiencedSubject2")}
            options={subjectOptions}
          />
        </div>
        <div className="grid grid-cols-4 gap-x-5 pt-[10px]">
          <SelectField
            label="Ward Appearing in Class 12 Subject-1 Above:"
            placeholder="Select Ward Appearing Subject"
            value={formData.wardAppearingSubject}
            onChange={handleSelectChange("wardAppearingSubject")}
            options={subjectOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default TeacherClass;
