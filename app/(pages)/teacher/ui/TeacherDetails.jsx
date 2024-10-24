import DateField from "@/app/components/ui/fields/DateField";
import InputField from "@/app/components/ui/fields/InputField";
import SelectField from "@/app/components/ui/fields/SelectField";
import React, { useState } from "react";

const TeacherDetails = () => {
  const [formData, setFormData] = useState({
    fatherSpouseName: "",
    trainedStatus: "",
    confirmationDate: "",
    trainingCourses: "",
    scalePay: "",
    duration: "",
    basicPay: "",
    allowance: "",
    trainingOrganizer: "",
  });

  const handleInputChange = (name) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      confirmationDate: date,
    }));
  };

  const trainingOptions = ["Trained", "Untrained"];

  return (
    <div>
      <h2>Personal Details:</h2>
      <div className="w-1/2">
        <InputField
          label="Father's/Spouse Name:"
          placeholder="Enter Father's/Spouse Name"
          value={formData.fatherSpouseName}
          onChange={handleInputChange("fatherSpouseName")}
        />
        <div className="grid grid-cols-2 gap-x-5">
          <SelectField
            label="Trained or Untrained:"
            placeholder="select"
            options={trainingOptions}
            value={formData.trainedStatus}
            onChange={handleInputChange("trainedStatus")}
          />
          <DateField
            label="Confirmation Date (dd/mm/yyyy):"
            value={formData.confirmationDate}
            onChange={handleDateChange}
          />
        </div>
        <div>
          <InputField
            label="Name of Training Courses(s) Attended:"
            placeholder="Enter Courses' Name"
            value={formData.trainingCourses}
            onChange={handleInputChange("trainingCourses")}
          />
          <InputField
            label="Scale of Pay(Rs):"
            placeholder="Enter Amount"
            value={formData.scalePay}
            onChange={handleInputChange("scalePay")}
          />
          <InputField
            label="Duration in Days:"
            placeholder="Enter No. of Days"
            value={formData.duration}
            onChange={handleInputChange("duration")}
          />
          <InputField
            label="Basic Pay(Rs):"
            placeholder="Enter Amount"
            value={formData.basicPay}
            onChange={handleInputChange("basicPay")}
          />
          <InputField
            label="DA/Other Allowance(Rs):"
            placeholder="Enter Amount"
            value={formData.allowance}
            onChange={handleInputChange("allowance")}
          />
          <InputField
            label="Training Programme Organized by:"
            placeholder="Enter Programme Name"
            value={formData.trainingOrganizer}
            onChange={handleInputChange("trainingOrganizer")}
          />
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
