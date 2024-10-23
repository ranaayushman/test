import React from "react";
import { cn } from "@/lib/utils";

const CheckboxField = ({
  id,
  name,
  label,
  checked = false,
  disabled = false,
  required = false,
  error,
  className,
  onChange,
  ...props
}) => {
  return (
    <div className={cn("flex items-start gap-2", className)}>
      <div className="relative flex items-center">
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          disabled={disabled}
          required={required}
          onChange={onChange}
          className={cn(
            "h-4 w-4 rounded border border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            disabled && "cursor-not-allowed opacity-50",
            error && "border-red-500",
            "cursor-pointer"
          )}
          {...props}
        />
      </div>
      {label && (
        <label
          htmlFor={id}
          className={cn(
            "text-sm text-gray-700",
            disabled && "cursor-not-allowed opacity-50",
            error && "text-red-500",
            !disabled && "cursor-pointer"
          )}
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default CheckboxField;
