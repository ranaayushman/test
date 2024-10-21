import InputField from "@/app/components/ui/InputField";
import SelectField from "@/app/components/ui/SelectField";
import React, { useState } from "react";

const Siblings = () => {
  const [formData, setFormData] = useState({
    siblings: [
      {
        name: "",
        relation: "",
        age: "",
        school: "",
      },
    ],
  });

  const handleSiblingChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSiblings = [...formData.siblings];
    updatedSiblings[index][name] = value;
    setFormData({ ...formData, siblings: updatedSiblings });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <h2 className="my-4">Details of siblings (if any):</h2>
      {formData.siblings.map((sibling, index) => (
        <div key={index} className="grid grid-cols-5 gap-4">
          <InputField
            label="Name"
            placeholder="Enter Name"
            name="name"
            value={sibling.name}
            onChange={(e) => handleSiblingChange(index, e)}
          />
          <InputField
            label="Relation"
            placeholder="Relation"
            name="relation"
            value={sibling.relation}
            onChange={(e) => handleSiblingChange(index, e)}
          />
          <SelectField
            label="Age"
            placeholder="Select Age"
            name="age"
            value={sibling.age}
            onChange={(e) => handleSiblingChange(index, e)}
          />
          <InputField
            label="School Studying in"
            placeholder="School Studying in"
            name="school"
            value={sibling.school}
            onChange={(e) => handleSiblingChange(index, e)}
          />
        </div>
      ))}
    </form>
  );
};

export default Siblings;
