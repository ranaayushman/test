import React from "react";
import PropTypes from "prop-types";

const RadioField = ({
  label,
  name,
  value,
  options = [],
  onChange,
  className,
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-medium text-black mb-2">
        {label}
      </label>
      <div className="flex flex-row gap-x-4">
        {options.length > 0 ? (
          options.map((option) => (
            <label key={option} className="flex items-center text-sm">
              <input
                type="radio"
                name={name}
                value={option}
                checked={value === option}
                onChange={onChange}
                className="mr-2 h-12"
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

RadioField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default RadioField;
