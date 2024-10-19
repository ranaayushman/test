import { Icon } from "@iconify/react";
import calendarIcon from "@iconify-icons/mdi/calendar";

const DateField = ({ label, name }) => (
  <div className="mb-4 w-1/2 relative">
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type="date"
      name={name}
      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
    />
    <span className="absolute right-3 top-10 transform -translate-y-1/2 pointer-events-none">
      <Icon
        icon={calendarIcon}
        className="text-gray-400"
        width="24"
        height="24"
      />
    </span>
  </div>
);

const dateFieldsData = [
  { label: "Start Date", name: "startDate" },
  { label: "End Date", name: "endDate" },
  { label: "Reminder Date", name: "reminderDate" },
];

const DateFieldList = () => {
  return (
    <div className="flex flex-wrap">
      {dateFieldsData.map((field, index) => (
        <DateField key={index} label={field.label} name={field.name} />
      ))}
    </div>
  );
};

export default DateFieldList;
