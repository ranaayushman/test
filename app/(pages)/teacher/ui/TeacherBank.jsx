import InputField from "@/app/components/ui/fields/InputField";
import React from "react";

const TeacherBank = () => {
  return (
    <form>
      <h2>Bank Details:</h2>
      <div className="w-1/2">
        <InputField label="Bank’s Name:" placeholder="Enter Bank’s Name" />
        <InputField
          label="Account Number:"
          placeholder="Enter Account Number"
        />
        <InputField label="IFSC Code:" placeholder="Enter IFSC Code" />
        <InputField label="Pan Number:" placeholder="Enter Pan Number:" />
      </div>
    </form>
  );
};

export default TeacherBank;
