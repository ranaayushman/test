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
    id: 0,
    fields: [
      {
        type: "text",
        placeholder: "Enter Serial No",
        label: "Serial No:",
      },
    ],
  },
  {
    id: 1,
    fields: [
      {
        type: "select",
        placeholder: "Select CLASS",
        label: "CLASS to which admission sought:",
      },
    ],
  },

  {
    id: 2,
    fields: [
      {
        type: "date",
        placeholder: "Select Date",
        label: "Admission Date",
      },
      {
        type: "select",
        placeholder: "Select Session",
        label: "Session:",
      },
    ],
  },
  {
    id: 3,
    fields: [
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
    ],
  },
  {
    id: 4,
    fields: [
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
    ],
  },
  {
    id: 5,
    fields: [
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
        type: "text",
        placeholder: "Mother’s Occupation",
        label: "Mother’s Occupation",
      },
    ],
  },
  {
    id: 6,
    fields: [
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
        options: ["General", "SC", "ST", "OBC", "EWS(proof)"],
        label: "Category",
        required: true,
      },
    
    ],
  },
  {
    id: 7,
    fields: [
      {
        type: "select",
        placeholder: "Select Last Class Attended",
        label: "Last Class Attended:",
      },
    ],
  },
  {
    fields: [
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
    fields: [
      {
        type: "text",
        placeholder: "Enter Second Language",
        label: "Second Language:",
      },
    ],
  },
  {
    id: 17,
    heading: "Subjects:",
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
    id: 18,
    heading: "Phone No:",
    fields: [
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
    id: 19,
    fields: [
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
    id: 20,
    heading: "Documents Required:",
    fields: [
      {
        type: "upload",
        placeholder: "Upload Birth Certificate",
        label: "Birth Certificate:",
      },
      {
        type: "upload",
        placeholder: "Upload Transfer Certificate",
        label: "Transfer Certificate:",
      },
      {
        type: "upload",
        placeholder: "Upload Migration Certificate",
        label: "Migration Certificate:",
      },
      {
        type: "upload",
        placeholder: "Upload Mark Sheet",
        label: "Mark Sheet:",
      },
    ],
  },
  {
    id: 21,
    heading: "Financial Resources of Parents/Guardian:",
    fields: [
      {
        type: "text",
        placeholder: "Relation",
        label: "Relation With Guardian:",
      },
      {
        type: "text",
        placeholder: "Income in Rupees",
        label: "Monthly Income:",
      },
      {
        type: "text",
        placeholder: "Designation",
        label: "Designation:",
      },
      {
        type: "select",
        placeholder: "Select Number",
        label: "No. of Dependents on the Guardians:",
      },
      {
        type: "select",
        placeholder: "Select Number",
        label: "No. of Earning Members in the Family:",
      },
    ],
  },
];
