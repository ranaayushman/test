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
        options: ["General", "SC", "ST", "OBC", "EWS (Attach Proof)"],
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
        options: [
          "CBSE",
          "ICSE",
          "IB",
          "State Board",
          "Other (please specify)",
        ],
        label: "Last School affiliated is:",
        required: true,
      },
    ],
  },
  {
    heading: "Result of last Class:",
    fields: [
      {
        type: "select",
        placeholder: "Select Subject",
        label: "Subject",
      },
      {
        type: "text",
        placeholder: "Maximum Marks",
        label: "Maximum Marks",
      },
      {
        type: "text",
        placeholder: "Marks Obtained",
        label: "Marks Obtained",
      },
      {
        type: "text",
        placeholder: "% of Marks",
        label: "% of Marks",
      },
      {
        type: "text",
        placeholder: "Remarks",
        label: "Remarks",
      },
    ],
  },
  {
    heading: "Transfer Certificate Details*:",
    fields: [
      {
        type: "text",
        placeholder: "Transfer Certificate No.",
        label: "Transfer Certificate No:",
      },
      {
        type: "date",
        placeholder: "Date of Issue",
        label: "Date of Issue:",
      },
    ],
  },
  {
    heading: "Details of siblings (if any) :-",
    fields: [
      {
        type: "text",
        placeholder: "Enter Name",
        label: "Name",
      },
      {
        type: "text",
        placeholder: "Relation",
        label: "Relation",
      },
      {
        type: "select",
        placeholder: "Select Age",
        label: "Age",
      },
      {
        type: "text",
        placeholder: "School Studying in",
        label: "School Studying in",
      },
    ],
  },
  {
    fields: [
      {
        type: "select",
        placeholder: "Select Stream",
        label: "Stream:",
      },
      {
        type: "select",
        placeholder: "Select Section",
        label: "Section:",
      },
      {
        type: "text",
        placeholder: "Enter Roll No",
        label: "Roll No:",
      },
    ],
  },
  {
    fields: [
      {
        type: "select",
        placeholder: "Select Religion",
        label: "Religion:",
      },
      {
        type: "select",
        placeholder: "Select Blood Group",
        label: "Blood Group:",
      },
      {
        type: "text",
        placeholder: "Enter Mother Tongue",
        label: "Mother Tongue:",
      },
    ],
  },
  {
    fields: [
      {
        type: "select",
        placeholder: "Select Height",
        label: "Height:",
      },
      {
        type: "select",
        placeholder: "Select Weight",
        label: "Weight:",
      },
      {
        type: "text",
        placeholder: "Enter P.O.",
        label: "P.O.:",
      },
    ],
  },
  {
    fields: [
      {
        type: "text",
        placeholder: "Enter P.S.",
        label: "P.S:",
      },
      {
        type: "text",
        placeholder: "Enter Pincode",
        label: "Pincode:",
      },
      {
        type: "text",
        placeholder: "Enter District",
        label: "District:",
      },
    ],
  },
  {
    fields: [
      {
        type: "text",
        placeholder: "Enter Second Language",
        label: "Second Language:",
      },
    ],
  },
  {
    heading : "Subjects:",
    fields: [
      {
        type: "select",
        placeholder: "Select Subject 1",
        label: "",
      },
      {
        type: "select",
        placeholder: "Select Subject 2",
        label: "",
      },
      {
        type: "select",
        placeholder: "Select Subject 3",
        label: "",
      },
      {
        type: "select",
        placeholder: "Select Subject 4",
        label: "",
      },
      {
        type: "select",
        placeholder: "Select Subject 5",
        label: "",
      },
      {
        type: "select",
        placeholder: "Select Subject 6",
        label: "",
      },
      {
        type: "select",
        placeholder: "Select Subject 7",
        label: "",
      },
    ],
  },
  {
    heading : "Phone No:",
    fields : [
      {
        type: "text",
        placeholder: "Primary No.",
        label: "",
      },
      {
        type: "text",
        placeholder: "Secondary No.",
        label: "",
      },
      {
        type: "text",
        placeholder: "Optional No.",
        label: "",
      },
     ],
  },
  {
    fields : [
      {
        type: "text",
        placeholder: "Email",
        label: "Email:",
      },
      {
        type: "text",
        placeholder: "Permanent/Local Address",
        label: "Permanent/Local Address:",
      },
    ],
  },
  {
    heading : "Documents Required:",
    fields : [
      {
        type: "upload",
        placeholder: "Upload Birth Certificate",
        label: "Birth Certificate:",
      },
      {
        type: "text",
        placeholder: "Permanent/Local Address",
        label: "Permanent/Local Address:",
      },
    ],
  },
];
