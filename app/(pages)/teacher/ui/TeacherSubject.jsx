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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "subject1",
      "mainSubject",
      "nonTeachingDays",
      "englishStudiedUpto",
      "mathsStudiedUpto",
      "ssStudiedUpto",
      "computerTrained",
      "workingSince",
      "trainedCSWN",
      "evaluationMedium",
    ];

    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(", ")}`);
      return;
    }

    const formDataToSend = new FormData();

    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && formData[key] !== "") {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch("", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Form Data Submitted Successfully:", data);
        alert("Form submitted successfully");
        setFormData({
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
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error during API call:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <div onSubmit={handleSubmit}>
      <div className="w-1/2">
        <h2>Appointed for Subjects:</h2>
        <div className="grid grid-cols-2 gap-x-5 w-3/4">
          <SelectField
            name="subject1"
            placeholder="Select Subject 1"
            value={formData.subject1}
            onChange={(value) => handleSelectChange("subject1", value)}
            required
          />
          <SelectField
            name="subject2"
            placeholder="Select Subject 2"
            value={formData.subject2}
            onChange={(value) => handleSelectChange("subject2", value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-x-5">
        <SelectField
          label="Main Subject Taught:"
          name="mainSubject"
          placeholder="Select Main Subject"
          value={formData.mainSubject}
          onChange={(value) => handleSelectChange("mainSubject", value)}
          required
        />
        <SelectField
          label="Additional Subject Taught:"
          name="additionalSubject"
          placeholder="Select Additional Subject"
          value={formData.additionalSubject}
          onChange={(value) => handleSelectChange("additionalSubject", value)}
        />
      </div>

      <div className="w-1/2 mt-[10px]">
        <InputField
          label="No of Working Days Spent on Non Teaching Assignments:"
          name="nonTeachingDays"
          placeholder="Enter No. of Days"
          value={formData.nonTeachingDays}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-4 gap-x-5">
        <SelectField
          label="English Studied Upto:"
          name="englishStudiedUpto"
          placeholder="Select Class"
          value={formData.englishStudiedUpto}
          onChange={(value) => handleSelectChange("englishStudiedUpto", value)}
          required
        />
        <SelectField
          label="Maths/Science Studied Upto:"
          name="mathsStudiedUpto"
          placeholder="Select Class"
          value={formData.mathsStudiedUpto}
          onChange={(value) => handleSelectChange("mathsStudiedUpto", value)}
          required
        />
        <SelectField
          label="Social Studies Studied Upto:"
          name="ssStudiedUpto"
          placeholder="Select Class"
          value={formData.ssStudiedUpto}
          onChange={(value) => handleSelectChange("ssStudiedUpto", value)}
          required
        />
      </div>

      <div className="mt-[10px]">
        <RadioField
          label="Trained in use of Computer/Teaching through Computer:"
          name="computerTrained"
          options={["Yes", "No"]}
          value={formData.computerTrained}
          onChange={handleChange}
          required
        />
      </div>

      <div className="w-1/3 mt-[10px]">
        <SelectField
          label="Working in Present School Since(YEAR):"
          name="workingSince"
          placeholder="Select Year"
          value={formData.workingSince}
          onChange={(value) => handleSelectChange("workingSince", value)}
          required
        />
      </div>

      <div className="mt-[10px] flex">
        <RadioField
          label="Trained to Teach CSWN:"
          name="trainedCSWN"
          options={["Yes", "No"]}
          value={formData.trainedCSWN}
          onChange={handleChange}
          required
        />
        <div className="border h-14 mx-4"></div>
        <RadioField
          label="Evaluation Medium (Bengali Medium only for Tripura State):"
          name="evaluationMedium"
          options={["English", "Hindi", "Urdu", "Punjabi", "Bengali"]}
          value={formData.evaluationMedium}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default TeacherSubject;
