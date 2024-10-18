export const Menus = [
  {
    title: "Dashboard",
    icon: "material-symbols-light:dashboard-outline",
    href: "/dashboard",
  },
  { title: "Add Student", icon: "ic:round-person-add", href: "/" },
  {
    title: "Add Teacher",
    icon: "fluent:person-add-20-regular",
    href: "/add-staff",
  },
  {
    title: "Update Schedule",
    icon: "fluent:text-bullet-list-square-person-32-filled",
    href: "/member-list",
  },
  {
    title: "Update Syllabus",
    icon: "material-symbols-light:list-alt-check-outline",
    href: "/staff-list",
  },
  { title: "Working Days", icon: "bi:people", href: "/batch" },
  {
    title: "Logout",
    icon: "material-symbols:logout",
    href: "/logout",
    gap: true,
  },
];

export const formFields = [
  {
    section: "Personal Information",
    fields: [
      {
        type: "text",
        placeholder: "Enter your full name",
        label: "Full Name*",
      },
      {
        type: "file",
        placeholder: "Upload a profile picture (maximum 2MB)",
        label: "Profile Picture*",
      },
    ],
  },
  {
    section: "Plan Details",
    fields: [
      { type: "select", placeholder: "Select Plan", label: "Select Plan" },
      { type: "text", placeholder: "Total Amount", label: "Plan Amount" },
      { type: "date", placeholder: "Select Date", label: "Start Date" },
      { type: "date", placeholder: "Plan End Date", label: "Expiry Date" },
      {
        type: "select",
        placeholder: "Select Your Payment Method",
        label: "Payment Method",
      },
      {
        type: "date",
        placeholder: "Select Date",
        label: "Due Amount Reminder",
      },
      {
        type: "date",
        placeholder: "2023-05-25",
        label: "Bill Date",
        readOnly: true,
      },
    ],
  },
];
