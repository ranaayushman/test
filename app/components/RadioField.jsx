const RadioField = ({ label, name, options }) => (
    <div className="mb-4 w-1/2">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="flex space-x-4">
        {options.map((option, idx) => (
          <label key={idx} className="inline-flex items-center">
            <input type="radio" name={name} value={option.value} className="form-radio" />
            <span className="ml-2">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
  
  export default RadioField;
  