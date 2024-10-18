import React, { useState } from "react";
import PropTypes from "prop-types";
import { ChevronRight, Image } from "lucide-react";

const FormField = ({ field, value, onChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showDateInput, setShowDateInput] = useState(false);
  const [dateValue, setDateValue] = useState(value);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      onChange({ target: { name: field.name, value: file } });
    } else {
      alert("Please select a valid image file");
    }
  };

  const handleDateFocus = () => {
    setShowDateInput(true);
  };

  const handleDateChange = (e) => {
    setDateValue(e.target.value);
    onChange(e);
  };

  switch (field.type) {
    case "text":
      return (
        <input
          type="text"
          placeholder={field.placeholder}
          name={field.name}
          value={value}
          onChange={onChange}
          className="w-full h-12 p-2 border rounded-xl"
        />
      );

    case "select":
      return (
        <div className="relative">
          <select
            name={field.name}
            value={value}
            onChange={onChange}
            className="w-full h-12 p-2 border rounded-xl appearance-none"
          >
            <option>{field.placeholder}</option>
            {field.options &&
              field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <ChevronRight className="w-4 h-4"/>
          </div>
        </div>
      );
    case "date":
      return (
        <div className="relative h-12">
          <input
            type={showDateInput ? "date" : "text"}
            name={field.name}
            placeholder={field.placeholder}
            value={dateValue}
            onFocus={handleDateFocus}
            onChange={handleDateChange}
            className="w-full p-2 border rounded-xl"
          />
        </div>
      );
    case "radio":
      return (
        <div className="flex flex-row gap-x-4">
          {field.options.map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                name={field.name}
                value={option}
                checked={value === option}
                onChange={onChange}
                className="mr-2"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      );
    case "file":
      return (
        <div className="border-2 border-dashed border-gray-300 p-4 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image className="mr-2 text-gray-400" size={50} alt="" />
              <span className="text-sm text-gray-500">
                {selectedFile ? selectedFile.name : field.placeholder}
              </span>
            </div>
            <label
              htmlFor={`file-upload-${field.name}`}
              className="cursor-pointer"
            >
              <div className="px-4 ml-2 py-2 bg-[#789336] text-white rounded flex justify-center items-center">
                Browse
              </div>
            </label>
          </div>
          <input
            id={`file-upload-${field.name}`}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      );
    case "email":
      return (
        <input
          type="email"
          name={field.name}
          value={value}
          onChange={onChange}
          placeholder={field.placeholder}
          className="w-full h-12 p-2 border rounded-xl"
        />
      );
    case "tel":
      return (
        <input
          type="tel"
          name={field.name}
          value={value}
          onChange={onChange}
          placeholder={field.placeholder}
          className="w-full h-12 p-2 border rounded-xl"
        />
      );
    default:
      return null;
  }
};

FormField.propTypes = {
  field: PropTypes.shape({
    type: PropTypes.oneOf([
      "text",
      "select",
      "date",
      "radio",
      "file",
      "email",
      "tel",
    ]).isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func.isRequired,
};

export default FormField;