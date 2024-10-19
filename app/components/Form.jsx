import React, { useState } from "react";
import FormField from "./ui/form";
import { formFields } from "../constants";

const indexStyle = (id) => {
  const styleMap = {
    0: "", //Serial No:
    1: "w-1/4", //CLASS to which admission sought:
    2: "flex gap-4 w-1/2", //Admission Date
    3: "flex flex-col gap-6 w-1/2", //Name:
    4: "grid grid-cols-2 gap-10 w-1/2 items-center", //Gender*
    5: "flex flex-col gap-6 w-1/2", // Father/Guardian’s Name:
    6: "flex gap-4 items-center w-1/2 gap-x-10", //Only Child:
    7: "w-1/2", //Last Class Attended:
    8: "", //
    9: "flex gap-4", //Result of last Class:
    10: "flex gap-4 w-1/2", //Transfer Certificate Details*:
    11: "grid grid-cols-6 gap-4 text-center", //Details of siblings (if any) :-
    12: "grid grid-cols-3 gap-4 w-1/2", //Stream:
    13: "grid grid-cols-3 gap-4 w-1/2", //Select Religion
    14: "grid grid-cols-3 gap-4 w-1/2", //Height:
    15: "grid grid-cols-3 gap-4 w-1/2", //P.S:
    16: "grid grid-cols-3 gap-4 w-1/2", //Second Language:
    17: "grid grid-cols-3 gap-4 w-1/2", //Subjects:
    18: "grid grid-cols-3 gap-4 w-1/2", //Phone No:
    19: "grid grid-cols-1 gap-4 w-1/2", //Email:
    20: "grid grid-cols-2 gap-4 w-1/2 text-[0.5rem]", //Documents Required:
    21: "grid grid-cols-2 gap-4 w-1/2", //Financial Resources of Parents/Guardian:
  };

  return styleMap[id] || "w-1/2";
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
                      placeholder={smallText(section.id, field.placeholder)}
                      onChange={handleInputChange}
                      className={section.id === 9 ? "text-sm" : ""}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </form>
        <button className="bg-[#789336] w-1/3 h-12 m-6 ml-0 rounded-md text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
