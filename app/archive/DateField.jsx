import React, { useState } from "react";
import { cn } from "@/lib/utils";

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
          className="block text-sm font-medium text-black mb-1"
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
          className={cn(
            "w-full p-2 h-12 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            className
          )}
        />
      </div>
    </div>
  );
};

export default DateField;