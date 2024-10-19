const UploadField = ({ label, name }) => (
  <div className="mb-4 border-dashed border-2 border-gray-300 rounded-md p-4 w-1/2">
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input type="file" name={name} className="w-full" />
    <p className="text-sm text-gray-500 mt-2">
      Upload a profile picture (Max: 2MB)
    </p>
  </div>
);

export default UploadField;
