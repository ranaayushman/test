import InputField from "@/app/components/ui/fields/InputField";
import React, { useState } from "react";

const TeacherBank = () => {
  const [formData, setFormData] = useState({
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    panNumber: "",
  });

  const handleInputChange = (name) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

  return (
    <div>
      <h2>Bank Details:</h2>
      <div className="w-1/2">
        <InputField
          label="Bank's Name:"
          placeholder="Enter Bank's Name"
          value={formData.bankName}
          onChange={handleInputChange("bankName")}
        />
        <InputField
          label="Account Number:"
          placeholder="Enter Account Number"
          value={formData.accountNumber}
          onChange={handleInputChange("accountNumber")}
        />
        <InputField
          label="IFSC Code:"
          placeholder="Enter IFSC Code"
          value={formData.ifscCode}
          onChange={handleInputChange("ifscCode")}
        />
        <InputField
          label="Pan Number:"
          placeholder="Enter Pan Number:"
          value={formData.panNumber}
          onChange={handleInputChange("panNumber")}
        />
      </div>
    </div>
  );
};

export default TeacherBank;
