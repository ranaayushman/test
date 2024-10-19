
// Form.jsx
import React, { useState } from "react";
import FormField from "./ui/form";
import { formFields } from "../constants";

const indexStyle = (id) => {
  const styleMap = {
    0: "",
    1: "w-1/4",
    2: "flex gap-4 w-1/2",
    3: "flex flex-col gap-6 w-1/2",
    4: "grid grid-cols-2 gap-10 w-1/2 items-center",
    5: "flex flex-col gap-6 w-1/2",
    6: "flex gap-4 items-center w-1/2 gap-x-10",
    7: "w-1/2",
    8: "",
    9: "flex gap-4",
    10: "flex gap-4 w-1/2",
    11: "grid grid-cols-6 gap-4 text-center",
    12: "grid grid-cols-3 gap-4 w-1/2",
    13: "grid grid-cols-3 gap-4 w-1/2",
    14: "grid grid-cols-3 gap-4 w-1/2",
    15: "grid grid-cols-3 gap-4 w-1/2",
    16: "grid grid-cols-3 gap-4 w-1/2",
    17: "grid grid-cols-3 gap-4 w-1/2",
    18: "grid grid-cols-3 gap-4 w-1/2",
    19: "grid grid-cols-1 gap-4 w-1/2",
    20: "grid grid-cols-2 gap-4 w-1/2 text-[0.5rem]",
    21: "grid grid-cols-2 gap-4 w-1/2",
  };
  return styleMap[id] || "w-1/2";
};

const Form = () => {
  // Initialize form state
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    
    // Handle file inputs
    if (type === 'file') {
      setFormData(prevData => ({
        ...prevData,
        [name]: files[0]
      }));
      return;
    }

    // Handle all other inputs
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="flex bg-white drop-shadow-custom rounded-md">
      <div className="bg-white pt-4 p-8 rounded-md w-full">
        <form onSubmit={handleSubmit} className="space-y-6">
          {formFields.map((section) => (
            <div key={section.id} className="space-y-4">
              {section.heading && (
                <h3 className="text-lg font-medium text-gray-900">
                  {section.heading}
                </h3>
              )}
              <div className={indexStyle(section.id)}>
                {section.fields.map((field) => (
                  <div
                    key={`${section.id}-${field.name}`}
                    className="flex-1"
                  >
                    {field.label && (
                      <label 
                        htmlFor={field.name}
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {field.label}
                      </label>
                    )}
                    <FormField
                      field={field}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button 
            type="submit"
            className="bg-[#789336] w-1/3 h-12 mt-6 rounded-md text-white hover:bg-[#68802f] transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;