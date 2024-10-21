import React, { useState } from "react";
import PropTypes from "prop-types";
import { Upload } from "lucide-react";

const DocUpload = ({ label, placeholder, name, onChange, className }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      onChange({ target: { name, value: file } });
    }
  };

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={`file-upload-${name}`}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <div className="border border-black rounded-lg h-12 flex items-center px-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <span className="text-[0.75rem] text-gray-500">
              {selectedFile ? selectedFile.name : placeholder}
            </span>
          </div>
          <label htmlFor={`file-upload-${name}`} className="cursor-pointer">
            <Upload />
          </label>
        </div>
        <input
          id={`file-upload-${name}`}
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

DocUpload.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default DocUpload;
