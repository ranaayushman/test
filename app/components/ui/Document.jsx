import React, { useState } from "react";
import DocUpload from "@/app/components/ui/fields/DocUpload";

const Document = () => {
  const [formData, setFormData] = useState({
    birthCertificate: null,
    transferCertificate: null,
    migrationCertificate: null,
    markSheet: null,
  });

  const documentOrder = [
    "birthCertificate",
    "transferCertificate",
    "migrationCertificate",
    "markSheet",
  ];

  const nextEmpty = () => {
    return documentOrder.find((field) => !formData[field]);
  };

  const handleFileChange = (_, file) => {
    const nextEmptyField = nextEmpty();
    if (nextEmptyField) {
      setFormData((prevData) => ({
        ...prevData,
        [nextEmptyField]: file,
      }));
    }
  };

  const handleRemove = (fieldName) => {
    setFormData((prevData) => {
      const newData = { ...prevData };
      const startIndex = documentOrder.indexOf(fieldName);

      documentOrder.forEach((field, index) => {
        if (index >= startIndex) {
          newData[field] = null;
        }
      });

      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const getUploadStatus = (fieldName) => {
    const currentIndex = documentOrder.indexOf(fieldName);
    const previousField =
      currentIndex > 0 ? documentOrder[currentIndex - 1] : null;

    if (currentIndex === 0) return true;
    return previousField && formData[previousField] !== null;
  };

  return (
    <div onSubmit={handleSubmit} className="mt-[1.5rem]">
      <h2 className="text-md font-medium mb-[10px]">Documents Required:</h2>

      <div className="grid grid-cols-4 gap-x-6 ">
        <DocUpload
          label="Birth Certificate"
          placeholder="Upload Birth Certificate"
          onChange={handleFileChange}
          value={formData.birthCertificate}
          enabled={getUploadStatus("birthCertificate")}
          onRemove={() => handleRemove("birthCertificate")}
        />

        <DocUpload
          label="Transfer Certificate"
          placeholder="Upload Transfer Certificate"
          onChange={handleFileChange}
          value={formData.transferCertificate}
          enabled={getUploadStatus("transferCertificate")}
          onRemove={() => handleRemove("transferCertificate")}
        />
      </div>

      <div className="grid grid-cols-4 gap-x-6">
        <DocUpload
          label="Migration Certificate"
          placeholder="Upload Migration Certificate"
          onChange={handleFileChange}
          value={formData.migrationCertificate}
          enabled={getUploadStatus("migrationCertificate")}
          onRemove={() => handleRemove("migrationCertificate")}
        />

        <DocUpload
          label="Mark Sheet"
          placeholder="Upload Marksheet"
          onChange={handleFileChange}
          value={formData.markSheet}
          enabled={getUploadStatus("markSheet")}
          onRemove={() => handleRemove("markSheet")}
        />
      </div>
    </div>
  );
};

export default Document;
