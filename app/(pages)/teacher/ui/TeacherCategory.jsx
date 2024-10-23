import DateField from "@/app/components/ui/fields/DateField";
import DocUpload from "@/app/components/ui/fields/DocUpload";
import InputField from "@/app/components/ui/fields/InputField";
import RadioField from "@/app/components/ui/fields/RadioField";
import SelectField from "@/app/components/ui/fields/SelectField";
import React, { useState } from "react";

const TeacherCategory = () => {
  const [formData, setFormData] = useState({
    category: "",
    categoryDocument: null,
    speciallyAbled: "",
    designation: "",
    teacherType: "",
    teacherQualification: "",
    natureOfAppointment: "",
    dateOfJoining: "",
    highestQualificationAcademic: "",
    trainingDaysBRC: "",
    trainingDaysCRC: "",
    trainingDaysDIET: "",
    highestQualificationProfessional: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (file, fieldName) => {
    if (file) {
      const minSize = 10 * 1024;
      const maxSize = 40 * 1024;

      if (file.size < minSize || file.size > maxSize) {
        alert("File size should be between 10KB to 40KB");
        return;
      }

      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    const requiredFields = [
      "category",
      "speciallyAbled",
      "designation",
      "teacherType",
      "teacherQualification",
      "natureOfAppointment",
      "dateOfJoining",
      "highestQualificationAcademic",
    ];

    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(", ")}`);
      return;
    }

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
          category: "",
          categoryDocument: null,
          speciallyAbled: "",
          designation: "",
          teacherType: "",
          teacherQualification: "",
          natureOfAppointment: "",
          dateOfJoining: "",
          highestQualificationAcademic: "",
          trainingDaysBRC: "",
          trainingDaysCRC: "",
          trainingDaysDIET: "",
          highestQualificationProfessional: "",
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
    <form onSubmit={handleSubmit}>
      <div className="flex items-start gap-x-4">
        <RadioField
          label="Category:"
          name="category"
          options={["General", "SC", "ST", "OBC", "EWS (Attach Proof)"]}
          value={formData.category}
          onChange={handleChange}
          required
        />
        {formData.category !== "General" && formData.category !== "" && (
          <div className="w-64">
            <DocUpload
              label="Upload Category Proof :"
              accept=""
              onChange={(file) => handleFileChange(file, "categoryDocument")}
              value={formData.categoryDocument}
              placeholder="Upload Proof"
            />
          </div>
        )}
      </div>

      <RadioField
        label="Specially Abled:"
        name="speciallyAbled"
        options={["Yes", "No"]}
        value={formData.speciallyAbled}
        onChange={handleChange}
        required
      />

      <div className="grid grid-cols-4 gap-x-5">
        <SelectField
          label="Designation:"
          name="designation"
          placeholder="Enter Designation"
          value={formData.designation}
          onChange={handleChange}
          required
        />
        <SelectField
          label="Type of Teacher:"
          name="teacherType"
          placeholder="Select Type of Teacher"
          value={formData.teacherType}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-4 gap-x-5 mt-[10px]">
        <SelectField
          label="Teacher's Qualification:"
          name="teacherQualification"
          placeholder="Select Teacher's Qualification"
          value={formData.teacherQualification}
          onChange={handleChange}
          required
        />
        <SelectField
          label="Nature of Appointment:"
          name="natureOfAppointment"
          placeholder="Select Nature of Appointment"
          value={formData.natureOfAppointment}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-4 gap-x-5 mt-[10px]">
        <DateField
          label="Date of Joining in Service:"
          name="dateOfJoining"
          placeholder="Select Date"
          value={formData.dateOfJoining}
          onChange={handleChange}
          required
        />
        <SelectField
          label="Highest Qualification(Academic):"
          name="highestQualificationAcademic"
          placeholder="Select Highest Qualification"
          value={formData.highestQualificationAcademic}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-1 w-1/2 mt-[10px] gap-y-[10px]">
        <InputField
          label="Total days of In Service Training in Last Academic Year(BRC):"
          name="trainingDaysBRC"
          placeholder="Enter No. of Days"
          value={formData.trainingDaysBRC}
          onChange={handleChange}
        />
        <InputField
          label="Total days of In Service Training in Last Academic Year(CRC):"
          name="trainingDaysCRC"
          placeholder="Enter No. of Days"
          value={formData.trainingDaysCRC}
          onChange={handleChange}
        />
        <InputField
          label="Total days of In Service Training in Last Academic Year(DIET):"
          name="trainingDaysDIET"
          placeholder="Enter No. of Days"
          value={formData.trainingDaysDIET}
          onChange={handleChange}
        />
      </div>

      <div className="w-1/4 mt-[10px]">
        <SelectField
          label="Highest Qualification(Professional):"
          name="highestQualificationProfessional"
          placeholder="Select Highest Qualification"
          value={formData.highestQualificationProfessional}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default TeacherCategory;
