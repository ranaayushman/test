import React from "react";
import PropTypes from "prop-types";

const InputField = ({ label, placeholder, name, value, onChange }) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-black mb-1"
        >
          {label}
        </label>
      )}
      <input
        type="text"
        id={name}
        placeholder={placeholder}
        name={name}
        value={value || ""}
        onChange={onChange}
        className="w-full h-12 p-2 border border-gray-600 rounded-lg text-sm"
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
