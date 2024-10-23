import DocUpload from "@/app/components/ui/fields/DocUpload";
import RadioField from "@/app/components/ui/fields/RadioField";
import React from "react";

const TeacherCategory = () => {
  return (
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
  );
};

export default TeacherCategory;
