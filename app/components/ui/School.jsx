import DateField from "@/app/components/ui/DateField";
import InputField from "@/app/components/ui/InputField";
import RadioField from "@/app/components/ui/RadioField";
import SelectField from "@/app/components/ui/SelectField";
import React, { useState } from "react";

const School = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    selectedOption: "",
    document: null,
    selectedOption2: "",
    otherBoard: "",
    subjects: [
      {
        subject: "",
        maxMarks: "",
        obtainedMarks: "",
        percentage: "",
        remarks: "",
      },
    ],
    transferCertNo: "",
    transferCertDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubjectChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSubjects = [...formData.subjects];
    updatedSubjects[index][name] = value;
    setFormData({ ...formData, subjects: updatedSubjects });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="w-1/2">
        <SelectField
          label="Last Class Attended:"
          options={["2024"]}
          placeholder="Select Last Class Attended"
          name="selectedOption"
          value={formData.selectedOption}
          onChange={handleChange}
        />
        <RadioField
          label="Last School affiliated is:"
          options={[
            "CBSE",
            "ICSE",
            "IB",
            "State Board",
            "Other(please specify)",
          ]}
          name="selectedOption2"
          value={formData.selectedOption2}
          onChange={handleChange}
        />

        {formData.selectedOption2 === "Other(please specify)" && (
          <InputField
            label="Specify Other Board:"
            placeholder="Enter Board Name"
            name="otherBoard"
            value={formData.otherBoard}
            onChange={handleChange}
          />
        )}
      </div>

      <div>
        <h2 className="mb-5">Result of last Class:</h2>
        <div className="grid grid-cols-6 gap-4">
          {formData.subjects.map((subject, index) => (
            <React.Fragment key={index}>
              <SelectField
                label="Subject"
                placeholder="Select Subject"
                name="subject"
                value={subject.subject}
                onChange={(e) => handleSubjectChange(index, e)}
              />
              <InputField
                label="Maximum Marks"
                placeholder="Maximum Marks"
                name="maxMarks"
                value={subject.maxMarks}
                onChange={(e) => handleSubjectChange(index, e)}
              />
              <InputField
                label="Marks Obtained"
                placeholder="Marks Obtained"
                name="obtainedMarks"
                value={subject.obtainedMarks}
                onChange={(e) => handleSubjectChange(index, e)}
              />
              <InputField
                label="% of Marks"
                placeholder="% of Marks"
                name="percentage"
                value={subject.percentage}
                onChange={(e) => handleSubjectChange(index, e)}
              />
              <InputField
                label="Remarks"
                placeholder="Remarks"
                name="remarks"
                value={subject.remarks}
                onChange={(e) => handleSubjectChange(index, e)}
              />
            </React.Fragment>
          ))}
        </div>
      </div>

      <div>
        <h3 className="my-5">Transfer Certificate Details*:</h3>
        <div className="grid grid-cols-4 gap-4">
          <InputField
            label="Transfer Certificate No:"
            placeholder="Transfer Certificate No."
            name="transferCertNo"
            value={formData.transferCertNo}
            onChange={handleChange}
          />
          <DateField
            label="Date of Issue"
            placeholder="Date of Issue"
            name="transferCertDate"
            value={formData.transferCertDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <button type="submit" className="btn-primary">
        Submit
      </button>
    </form>
  );
};

export default School;
