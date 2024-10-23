import React from "react";
import PropTypes from "prop-types";

const CheckboxField = ({
  label,
  name,
  value = [],
  options = [],
  onChange,
  className,
}) => {
  const handleChange = (option) => {
    const newValue = value.includes(option)
      ? value.filter((item) => item !== option)
      : [...value, option];
    onChange({ target: { name, value: newValue } });
  };

  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-medium text-black mb-2">
        {label}
      </label>
      <div className="flex flex-col gap-y-2">
        {options.length > 0 ? (
          options.map((option) => (
            <label key={option} className="flex items-center text-sm">
              <input
                type="checkbox"
                name={name}
                value={option}
                checked={value.includes(option)}
                onChange={() => handleChange(option)}
                className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>{option}</span>
            </label>
          ))
        ) : (
          <span className="text-gray-500 text-sm">No options available</span>
        )}
      </div>
    </div>
  );
};

CheckboxField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default CheckboxField;
