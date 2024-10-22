import React, { useState } from "react";
import PropTypes from "prop-types";
import { Upload } from "lucide-react";

const DocUpload = ({ label, placeholder, name, onChange, className }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

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
          accept="image/jpeg"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {preview && (
        <div className="mt-4">
          <img
            src={preview}
            alt="Preview"
            className="w-32 h-32 object-cover border border-gray-300"
          />
        </div>
      )}
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
