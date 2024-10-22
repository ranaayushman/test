import React, { useState } from "react";
import PropTypes from "prop-types";
import { Image } from "lucide-react";

const FileUploadField = ({ label, placeholder, name, onChange, className }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null); // Changed to match DocUpload
  const [error, setError] = useState(""); // Keeping the same error handling as DocUpload

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const fileSizeInKB = file.size / 1024; 
      const validFileSize = fileSizeInKB >= 10 && fileSizeInKB <= 40;
      const validFileType = file.type === "image/jpeg"; 

      if (!validFileType) {
        setError("Only .jpg files are allowed."); 
        setSelectedFile(null);
        setPreview(null);
        return;
      }

      if (!validFileSize) {
        setError("File size must be between 10 KB and 40 KB.");
        setSelectedFile(null);
        setPreview(null);
        return;
      }

      setError(""); 
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file)); 
      onChange({ target: { name, value: file } });
    }
  };

  return (
    <div className={`mb-4 ${className}`}>
      <label
        htmlFor={`file-upload-${name}`}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
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
          accept=".jpg,.jpeg"
          onChange={handleFileChange}
          className="hidden"
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {preview && (
          <div className="mt-4">
            <img
              src={preview}
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
