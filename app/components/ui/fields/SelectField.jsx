import React from "react";
import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";

const SelectField = ({
  label,
  placeholder,
  name,
  value,
  options,
  onChange,
  className,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-black mb-1"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value || ""}
          onChange={onChange}
          className={`w-full h-12 p-2 border text-sm rounded-lg appearance-none text-slate-400 border-gray-600 ${className}`}
        >
          <option value="">{placeholder}</option>
          {options &&
            options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default SelectField;
