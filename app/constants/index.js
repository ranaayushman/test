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
    fields: [
      {
        type: "text",
        placeholder: "Enter Serial No",
        label: "Serial No:",
      },
      {
        type: "select",
        placeholder: "Select CLASS",
        label: "CLASS to which admission sought:",
      },
      {
        type: "date",
        placeholder: "Select Date",
        label: "Admission Date",
      },
      {
        type: "date",
        placeholder: "Select Session",
        label: "Session:",
      },
      {
        type: "text",
        placeholder: "Enter Your Full Name",
        label: "Name:",
      },
      {
        type: "file",
        placeholder: "Upload a profile picture maximum 2MB",
        label: "Profile Picture",
      },
      {
        type: "radio",
        name: "Gender:",
        options: ["Male", "Female", "Transgender"],
        label: "Gender*",
        required: true,
      },
      {
        type: "date",
        placeholder: "dd/mm/yyy",
        label: "Date of Birth:",
      },
      {
        type: "text",
        placeholder: "Father/Guardian’s Name",
        label: "Father/Guardian’s Name:",
      },
      {
        type: "text",
        placeholder: "Father/Guardian’s Occupation",
        label: "Father/Guardian’s Occupation:",
      },
      {
        type: "text",
        placeholder: "Mother’s Name",
        label: "Mother’s Name:",
      },
      {
        type: "text",
        placeholder: "Mother’s Residential Address",
        label: "Mother’s Residential Address:",
      },
      {
        type: "radio",
        name: "Only Child",
        options: ["Yes", "No"],
        label: "Only Child:",
        required: true,
      },
      {
        type: "radio",
        name: "Category",
        options: ["General", "SC", "ST","OBC","EWS (Attach Proof)"],
        label: "Category",
        required: true,
      },
      {
        type: "select",
        placeholder: "Select Last Class Attended",
        label: "Last Class Attended:",
      },
      {
        type: "radio",
        name: "Last School affiliated is:",
        options: ["CBSE", "ICSE", "IB","State Board","Other (please specify)"],
        label: "Last School affiliated is:",
        required: true,
      },
      
    ],
    heading: "Personal",
  },
  
  
];
