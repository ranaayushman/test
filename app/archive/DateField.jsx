import React, { useState } from "react";
import PropTypes from "prop-types";

const DateField = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  className,
}) => {
  const [showDateInput, setShowDateInput] = useState(false);

  const handleDateFocus = () => {
    setShowDateInput(true);
  };

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-lg font-medium text-black mb-1"
        >
          {label}
        </label>
      )}
      <div className="relative h-12">
        <input
          type="date"
          id={name}
          name={name}
          placeholder={placeholder}
          value={value || ""}
          onFocus={handleDateFocus}
          onChange={onChange}
          className={`w-full p-2 h-12 border-2 border-gray-600 rounded-lg ${className}`}
        />
      </div>
    </div>
  );
};

DateField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default DateField;
