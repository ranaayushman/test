import InputField from "@/app/components/ui/fields/InputField";
import SelectField from "@/app/components/ui/fields/SelectField";
import React, { useState } from "react";

const Finance = () => {
  const [formData, setFormData] = useState({
    guardianRelation: "",
    monthlyIncome: "",
    guardianDesignation: "",
    earningMembers: "",
    dependentMembers: "",
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
    <form onSubmit={handleSubmit} className="mt-4">
      <h2 className="text-md font-medium mb-[10px]">
        Financial Resources of Parents/Guardian:
      </h2>

      <div className="grid grid-cols-4 gap-x-6">
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

      <div className="grid grid-cols-4 gap-x-6">
        <InputField
          label="Guardian's Designation:"
          placeholder="Designation"
          name="guardianDesignation"
          value={formData.guardianDesignation}
          onChange={handleChange}
        />
        <SelectField
          label="Dependents on Guardians:"
          options={["1", "2", "3", "4", "5+"]}
          placeholder="Select Number"
          name="dependentMembers"
          value={formData.dependentMembers}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-6">
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
