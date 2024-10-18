const DateField = ({ label, name }) => (
    <div className="mb-4 w-1/2">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type="date"
        name={name}
        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
  
  export default DateField;
  