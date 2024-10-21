import InputField from "@/app/components/ui/InputField";
import SelectField from "@/app/components/ui/SelectField";
import React, { useState } from "react";

const Stream = () => {
  const [formData, setFormData] = useState({
    stream: "",
    section: "",
    rollNo: "",
    religion: "",
    bloodGroup: "",
    motherTongue: "",
    height: "",
    weight: "",
    po: "",
    ps: "",
    pincode: "",
    district: "",
    secondLanguage: "",
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-5 gap-x-4">
        <SelectField
          label="Stream:"
          placeholder="Select Stream"
          name="stream"
          value={formData.stream}
          onChange={handleChange}
        />
        <SelectField
          label="Section:"
          placeholder="Select Section"
          name="section"
          value={formData.section}
          onChange={handleChange}
        />
        <InputField
          label="Roll No:"
          placeholder="Enter Roll No"
          name="rollNo"
          value={formData.rollNo}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-5 gap-x-4">
        <SelectField
          label="Religion:"
          placeholder="Select Religion"
          name="religion"
          value={formData.religion}
          onChange={handleChange}
        />
        <SelectField
          label="Blood Group:"
          placeholder="Select Blood Group"
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
        />
        <InputField
          label="Mother Tongue:"
          placeholder="Enter Mother Tongue"
          name="motherTongue"
          value={formData.motherTongue}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-5 gap-x-4">
        <InputField
          label="Height:"
          placeholder="Enter Height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        <InputField
          label="Weight:"
          placeholder="Enter Weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
        <InputField
          label="P.O.:"
          placeholder="Enter P.O."
          name="po"
          value={formData.po}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-5 gap-x-4">
        <InputField
          label="P.S.:"
          placeholder="Enter P.S."
          name="ps"
          value={formData.ps}
          onChange={handleChange}
        />
        <InputField
          label="Pincode:"
          placeholder="Enter Pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
        />
        <InputField
          label="District:"
          placeholder="Enter District"
          name="district"
          value={formData.district}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-5 gap-x-4">
        <InputField
          label="Second Language:"
          placeholder="Enter Second Language"
          name="secondLanguage"
          value={formData.secondLanguage}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Stream;
