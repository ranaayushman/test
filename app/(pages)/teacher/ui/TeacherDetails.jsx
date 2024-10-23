import DateField from "@/app/components/ui/fields/DateField";
import InputField from "@/app/components/ui/fields/InputField";
import SelectField from "@/app/components/ui/fields/SelectField";
import React from "react";

const TeacherDetails = () => {
  return (
    <form>
      <h2>Personal Details:</h2>
      <div className="w-1/2">
        <InputField
          label="Father’s/Spouse Name:"
          placeholder="Enter Father’s/Spouse Name"
        />
        <div className="grid grid-cols-2 gap-x-5">
          <SelectField label="Trained or Untrained:" placeholder="select" />
          <DateField label="Confirmation Date (dd/mm/yyyy):" />
        </div>
        <div>
          <InputField
            label="Name of Training Courses(s) Attended:"
            placeholder="Enter Courses' Name"
          />
          <InputField label="Scale of Pay(Rs):" placeholder="Enter Amount" />
          <InputField
            label="Duration in Days:"
            placeholder="Enter No. of Days"
          />
          <InputField label="Basic Pay(Rs):" placeholder="Enter Amount" />
          <InputField
            label="DA/Other Allowance(Rs):"
            placeholder="Enter Amount"
          />
          <InputField
            label="Training Programme Organized by:"
            placeholder="Enter Programme Name"
          />
        </div>
      </div>

    </form>
  );
};

export default TeacherDetails;
