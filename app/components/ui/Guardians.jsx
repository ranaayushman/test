import React, { useState } from "react";
import InputField from "@/app/components/ui/InputField";
import RadioField from "@/app/components/ui/RadioField";
import DocUpload from "@/app/components/ui/DocUpload";

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
        value === "No" && { disabilityType: "" }),
    }));
  };

  const handleFileChange = (file) => {
    setFormData((prev) => ({
      ...prev,
      categoryDocument: file,
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

      <div className="flex gap-x-5 mt-6">
        <RadioField
          label="Only Child:"
          name="onlyChild"
          options={["Yes", "No"]}
          value={formData.onlyChild}
          onChange={handleChange}
        />
        <div className="border h-16"></div>
        <RadioField
          label="Category:"
          name="category"
          options={["General", "SC", "ST", "OBC", "EWS (Attach Proof)"]}
          value={formData.category}
          onChange={handleChange}
        />
        <div className="border h-16"></div>
        <RadioField
          label="Specially Abled:"
          name="speciallyAbled"
          options={["Yes", "No"]}
          value={formData.speciallyAbled}
          onChange={handleChange}
        />
      </div>

      {formData.speciallyAbled === "Yes" && (
        <div className="mt-4 w-1/3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type of Disability:
          </label>
          <select
            name="disabilityType"
            value={formData.disabilityType}
            onChange={handleChange}
            className="my-4 h-12 border border-black block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">Select Disability Type</option>
            {disabilityOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}

      {formData.category !== "General" && formData.category !== "" && (
        <div className="mt-4 w-1/3">
          <DocUpload
            label="Upload Category Proof (PDF Only):"
            accept=".pdf"
            onChange={handleFileChange}
            value={formData.categoryDocument}
            placeholder="Upload PDF"
          />
        </div>
      )}
    </form>
  );
};

export default Guardians;
