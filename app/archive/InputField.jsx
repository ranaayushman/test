const InputField = ({ label, type = "text", placeholder, name }) => (
  <div className="mb-4 w-1/2">
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  </div>
);

const inputFieldsData = [
  {
    label: "First Name",
    type: "text",
    placeholder: "Enter your first name",
    name: "firstName",
  },
  {
    label: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
    name: "lastName",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    name: "email",
  },
  {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    name: "password",
  },
];

const InputFieldList = () => {
  return (
    <div className="flex flex-wrap">
      {inputFieldsData.map((field, index) => (
        <InputField
          key={index}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          name={field.name}
        />
      ))}
    </div>
  );
};

export default InputFieldList;
