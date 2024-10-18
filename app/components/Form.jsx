import React, { useState } from "react";
import FormField from "./ui/form";
import { formFields } from "../constants";

const Form = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex bg-white drop-shadow-custom rounded-md">
      <div className="bg-white p-4 rounded-md">
        <form className="flex">
          <div className="w-full">
            {formFields.map((section) => (
              <div key={section.section} className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">
                  {section.heading}
                </h3>
                {section.fields.map((field) => (
                  <div key={field.label}>
                    <label className="block text-md font-medium text-gray-700 mb-1">
                      {field.label}
                    </label>
                    <FormField
                      field={field}
                      value={formData[field.name] || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
