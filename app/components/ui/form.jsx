// FormField.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDown, Image, Upload } from "lucide-react";

const FormField = ({ field, value, onChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showDateInput, setShowDateInput] = useState(false);

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

  switch (field.type) {
    case "text":
      return (
        <input
          type="text"
          placeholder={field.placeholder}
          name={field.name}
          value={value || ""}
          onChange={onChange}
          className="w-full h-12 p-2 border-2 border-gray-600 rounded-lg text-[0.75rem]"
        />
      );

    case "select":
      return (
        <div className="relative">
          <select
            name={field.name}
            value={value || ""}
            onChange={onChange}
            className="w-full h-12 p-2 border-2 text-[0.75rem] rounded-lg appearance-none text-slate-400 border-gray-600"
          >
            <option value="">{field.placeholder}</option>
            {field.options &&
              field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <ChevronDown className="w-4 h-4" />
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
            value={value || ""}
            onFocus={handleDateFocus}
            onChange={onChange}
            className="w-full p-2 h-12 border-2 border-gray-600 rounded-lg"
          />
        </div>
      );
    case "radio":
      return (
        <div className="flex flex-row gap-x-4">
          {field.options.map((option) => (
            <label key={option} className="flex items-center text-sm">
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
        <div className="border-2 border-dashed border-gray-600 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image className="mr-2 text-gray-400" size={50} />
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
          value={value || ""}
          onChange={onChange}
          placeholder={field.placeholder}
          className="w-full h-12 p-2 border-2 border-gray-600 rounded-lg"
        />
      );
    case "tel":
      return (
        <input
          type="tel"
          name={field.name}
          value={value || ""}
          onChange={onChange}
          placeholder={field.placeholder}
          className="w-full h-12 p-2 border-2 border-gray-600 rounded-lg"
        />
      );
    case "upload":
      return (
        <div className="border-2 border-gray-600 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-[0.75rem] text-gray-500">
                {selectedFile ? selectedFile.name : field.placeholder}
              </span>
            </div>
            <label
              htmlFor={`file-upload-${field.name}`}
              className="cursor-pointer"
            >
              <Upload />
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
      "upload"
    ]).isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func.isRequired,
};

export default FormField;
