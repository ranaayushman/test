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
    <div className="w-full border bg-white rounded-md p-4 drop-shadow-custom">
      <form className="flex">
        <div className="w-full">
          {formFields.map((section, index) => (
            <div key={section.section} className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">{section.section}</h3>
              {section.fields.map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
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
  );
};

export default Form;
