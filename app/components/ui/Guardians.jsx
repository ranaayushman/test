import React, { useState } from "react";
import InputField from "@/app/components/ui/fields/InputField";
import RadioField from "@/app/components/ui/fields/RadioField";
import DocUpload from "@/app/components/ui/fields/DocUpload";

const Guardians = () => {
  const [formData, setFormData] = useState({
    fatherName: "",
    fatherAddress: "",
    fatherOccupation: "",
    motherName: "",
    motherAddress: "",
    motherOccupation: "",
    onlyChild: "",
    category: "",
    speciallyAbled: "",
    disabilityType: "",
    categoryDocument: null,
    disabilityDocument: null,
  });

  const disabilityOptions = [
    "NA : -Not Applicable-",
    "BB : Blindness",
    "BL : Low Vision",
    "CA : Autism spectrum disorder",
    "CS : Specific Learning Disabilities",
    "DD : Deaf",
    "DH : Hard of hearing",
    "DS : Speech and Language Disability",
    "HA : Acid Attack Victims",
    "HC : Cerebral palsy",
    "HD : Dwarfism",
    "HL : Leprosy cured persons",
    "HM : Muscular Dystrophy",
    "LA : Permanent Physical Impairment Amputation",
    "LE : Permanent Physical Impairment of Extremities",
    "LF : PPI Club Food and Other Conditions",
    "LL : Spinal Cord injuries",
    "LN : PPI due to Chronic neurological condition",
    "LS : PPI of the Spine",
    "SB : Blood disorder",
    "SD : Multiple Disabilities",
    "SM : Mental Behaviour",
    "SN : Chronic Neurological",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "speciallyAbled" &&
        value === "No" && { disabilityType: "", disabilityDocument: null }),
    }));
  };

  const handleFileChange = (file, fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-1">
      <div className="w-1/2 space-y-4">
        <InputField
          label="Father/Guardian's Name:"
          name="fatherName"
          placeholder="Father/Guardian's Name"
          value={formData.fatherName}
          onChange={handleChange}
        />
        <InputField
          label="Father/Guardian's Residential Address:"
          name="fatherAddress"
          placeholder="Father/Guardian's Residential Address"
          value={formData.fatherAddress}
          onChange={handleChange}
        />
        <InputField
          label="Father/Guardian's Occupation:"
          name="fatherOccupation"
          placeholder="Father/Guardian's Occupation"
          value={formData.fatherOccupation}
          onChange={handleChange}
        />
        <InputField
          label="Mother's Name:"
          name="motherName"
          placeholder="Mother's Name"
          value={formData.motherName}
          onChange={handleChange}
        />
        <InputField
          label="Mother's Residential Address:"
          name="motherAddress"
          placeholder="Enter Mother's Residential Address"
          value={formData.motherAddress}
          onChange={handleChange}
        />
        <InputField
          label="Mother's Occupation:"
          name="motherOccupation"
          placeholder="Mother's Occupation"
          value={formData.motherOccupation}
          onChange={handleChange}
        />
      </div>

      <div className="flex gap-x-5 mt-4">
        <RadioField
          label="Only Child:"
          name="onlyChild"
          options={["Yes", "No"]}
          value={formData.onlyChild}
          onChange={handleChange}
        />
        <div className="border h-16"></div>
        <div className="flex items-start gap-x-4">
          <RadioField
            label="Category:"
            name="category"
            options={["General", "SC", "ST", "OBC", "EWS (Attach Proof)"]}
            value={formData.category}
            onChange={handleChange}
          />
          {formData.category !== "General" && formData.category !== "" && (
            <div className="w-64">
              <DocUpload
                label="Upload Category Proof :"
                accept=""
                onChange={(file) => handleFileChange(file, "categoryDocument")}
                value={formData.categoryDocument}
                placeholder="Upload Proof"
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex items-start justify-between gap-x-4 w-3/4">
        <RadioField
          label="Specially Abled:"
          name="speciallyAbled"
          options={["Yes", "No"]}
          value={formData.speciallyAbled}
          onChange={handleChange}
        />

        {formData.speciallyAbled === "Yes" && (
          <>
            <div className="w-64">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type of Disability:
              </label>
              <select
                name="disabilityType"
                value={formData.disabilityType}
                onChange={handleChange}
                className="h-12 border border-black block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select Disability Type</option>
                {disabilityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-64">
              <DocUpload
                label="Upload Disability Proof (PDF Only):"
                accept=".pdf"
                onChange={(file) =>
                  handleFileChange(file, "disabilityDocument")
                }
                value={formData.disabilityDocument}
                placeholder="Upload PDF"
              />
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default Guardians;
