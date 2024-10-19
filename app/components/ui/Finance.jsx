import InputField from "@/app/components/ui/InputField";
import SelectField from "@/app/components/ui/SelectField";
import React, { useState } from "react";

const Finance = () => {
  const [formData, setFormData] = useState({
    guardianRelation: "",
    monthlyIncome: "",
    guardianDesignation: "",
    earningMembers: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-md font-semibold mb-4">
        Financial Resources of Parents/Guardian:{" "}
      </h2>

      <div className="grid grid-cols-4 gap-x-4 mt-4">
        <InputField
          label="Relation With Guardian:"
          placeholder="Relation"
          name="guardianRelation"
          value={formData.guardianRelation}
          onChange={handleChange}
        />
        <InputField
          label="Monthly Income:"
          placeholder="Income in Rupees"
          name="monthlyIncome"
          value={formData.monthlyIncome}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-4 gap-x-4 mt-4">
        <InputField
          label="Guardian's Designation:"
          placeholder="Designation"
          name="guardianDesignation"
          value={formData.guardianDesignation}
          onChange={handleChange}
        />
        <SelectField
          label="Earning Members in Family:"
          options={["1", "2", "3", "4", "5+"]}
          placeholder="Select Number"
          name="earningMembers"
          value={formData.earningMembers}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Finance;
