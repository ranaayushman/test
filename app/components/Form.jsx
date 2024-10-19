import React, { useState } from "react";
import FormField from "./ui/form";
import { formFields } from "../constants";

const indexStyle = (id) => {
  const styleMap = {
    0: "w-full", //Serial No:
    1: "w-1/2", //CLASS to which admission sought:
    2: "flex gap-4", //Admission Date
    3: "flex flex-col gap-6", //Name:
    4: "grid grid-cols-2 gap-4", //Gender*
    5: "flex flex-col gap-6", // Father/Guardian’s Name:
    6: "flex", //Only Child:
    7: "w-1/2", //Last Class Attended:
    8: "", //
    9: "flex gap-4", //Result of last Class:
    10: "flex gap-4", //Transfer Certificate Details*:
    11: "flex gap-4", //Details of siblings (if any) :-
    12: "grid grid-cols-3 gap-4", //Stream:
    13: "grid grid-cols-3 gap-4", //Select Religion
    14: "grid grid-cols-3 gap-4", //Height:
    15: "grid grid-cols-3 gap-4", //P.S:
    16: "grid grid-cols-4 gap-4", //Second Language:
    17: "grid grid-cols-3 gap-4", //Subjects:
    18: "grid grid-cols-3 gap-4", //Phone No:
    19: "grid grid-cols-1 gap-4", //Email:
    20: "grid grid-cols-2 gap-4", //Documents Required:
    21: "grid grid-cols-2 gap-4", //Financial Resources of Parents/Guardian:
  };

  return styleMap[id] || "w-full";
};

const smallText = (sectionId, placeholder) => {
  return sectionId === 9 ? `text-sm ${placeholder}` : placeholder;
};

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
      <div className="bg-white pt-4 p-8 rounded-md w-full">
        <form className="space-y-6">
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
                    key={field.label || field.placeholder}
                    className="flex-1"
                  >
                    {field.label && (
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {field.label}
                      </label>
                    )}
                    <FormField
                      field={field}
                      value={formData[field.name] || ""}
                      placeholder={smallText(
                        section.id,
                        field.placeholder
                      )}
                      onChange={handleInputChange}
                      className={section.id === 9 ? "text-sm" : ""}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </form>
        <button className="bg-[#789336] w-3/4 h-12 m-6 ml-0 rounded-md text-white">
          Submit
        </button>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default Form;
