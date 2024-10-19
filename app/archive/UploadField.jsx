import React, { useState } from "react";
import PropTypes from "prop-types";
import { Image } from "lucide-react";

const FileUploadField = ({ label, placeholder, name, onChange, className }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    const validTypes = ["image/jpeg", "image/png"];
    const maxSize = 2 * 1024 * 1024;

    if (file) {
      if (!validTypes.includes(file.type)) {
        alert("Please select a valid image file (JPG, JPEG, PNG).");
        return;
      }

      if (file.size > maxSize) {
        alert("File size should not exceed 2MB.");
        return;
      }

      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      onChange({ target: { name, value: file } });
    }
  };

  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={`file-upload-${name}`} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="border-2 border-dashed border-gray-600 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image className="mr-2 text-gray-400" size={50} />
            <span className="text-sm text-gray-500">
              {selectedFile ? selectedFile.name : placeholder}
            </span>
          </div>
          <label htmlFor={`file-upload-${name}`} className="cursor-pointer">
            <div className="px-4 ml-2 py-2 bg-[#789336] text-white rounded flex justify-center items-center">
              Browse
            </div>
          </label>
        </div>
        <input
          id={`file-upload-${name}`}
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={handleFileChange}
          className="hidden"
        />
        {previewUrl && (
          <div className="mt-4">
            <img
              src={previewUrl}
              alt="Preview"
              className="h-32 w-32 object-cover border-2 border-gray-300 rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

FileUploadField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default FileUploadField;
