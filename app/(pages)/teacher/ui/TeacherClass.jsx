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
    wardAppearingSubject: ""
  });

  const handleCheckboxChange = (option) => {
    setFormData(prev => ({
      ...prev,
      classesTaught: prev.classesTaught.includes(option)
        ? prev.classesTaught.filter(item => item !== option)
        : [...prev.classesTaught, option]
    }));
  };

  const isChecked = (option) => {
    return formData.classesTaught.includes(option);
  };

  const handleSelectChange = (name) => (e) => {
    setFormData(prev => ({
      ...prev,
      [name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
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

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-3/4">
        <CheckboxField
          label="Select Classes Taught:"
          options={classOptions}
          selected={formData.classesTaught}
          onOptionChange={handleCheckboxChange}
          getIsSelected={isChecked}
        />
      </div>
      <div className="mt-6">
        <h2>SENIOR SECONDARY EDUCATION:</h2>
        <div className="grid grid-cols-4 gap-x-5 pt-[10px]">
          <SelectField
            label="Subject 1(Currently Teaching):"
            placeholder="Select Subject 1"
            value={formData.subject1}
            onSelect={handleSelectChange('subject1')}
          />
          <SelectField
            label="Subject 2:"
            placeholder="Select Additional Subject"
            value={formData.subject2}
            onSelect={handleSelectChange('subject2')}
          />
        </div>
        <div className="grid grid-cols-4 gap-x-5 pt-[10px]">
          <SelectField
            label="Experienced Subject 1 :"
            placeholder="Currently Teaching Subject 1"
            value={formData.experiencedSubject1}
            onSelect={handleSelectChange('experiencedSubject1')}
          />
          <SelectField
            label="Experienced Subject 2:"
            placeholder="Select Experienced Subject 2"
            value={formData.experiencedSubject2}
            onSelect={handleSelectChange('experiencedSubject2')}
          />
        </div>
        <div className="grid grid-cols-4 gap-x-5 pt-[10px]">
          <SelectField
            label="Ward Appearing in Class 12 Subject-1 Above:"
            placeholder="Select Ward Appearing Subject"
            value={formData.wardAppearingSubject}
            onSelect={handleSelectChange('wardAppearingSubject')}
          />
        </div>
      </div>
    </form>
  );
};

export default TeacherClass;