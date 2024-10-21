import InputField from "@/app/components/ui/InputField";
import SelectField from "@/app/components/ui/SelectField";
import React, { useState } from "react";
import { Plus } from "lucide-react";

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

  const addSiblings = () => {
    setFormData({
      ...formData,
      siblings: [
        ...formData.siblings,
        {
          name: "",
          relation: "",
          age: "",
          school: "",
        },
      ],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <h2 className="my-4">Details of siblings (if any):</h2>
      {formData.siblings.map((sibling, index) => (
        <div key={index} className="grid grid-cols-5 gap-4 items-center">
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
          {index === formData.siblings.length - 1 && (
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={addSiblings}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#789336] text-white"
              >
                <Plus size={20} />
              </button>
              <span className="text-sm">Add Siblings</span>
            </div>
          )}
        </div>
      ))}
    </form>
  );
};

export default Siblings;
