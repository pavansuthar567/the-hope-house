export const contactFormArea = {
  tagline: "Contact With Us Now",
  title: "Write a Message",
  inputs: [
    {
      id: 1,
      type: "text",
      placeholder: "First Name",
      name: "fname",
      required: true,
    },
    {
      id: 2,
      type: "text",
      placeholder: "Last Name",
      name: "lname",
      required: true,
    },
    {
      id: 3,
      type: "email",
      placeholder: "Email Address",
      name: "email",
      required: true,
    },
    {
      id: 4,
      type: "text",
      placeholder: "Phone Number",
      name: "number",
      required: true,
    },
    {
      id: 5,
      placeholder: "Write Message",
      name: "message",
      cols: 30,
      rows: 10,
      required: true,
    },
  ],
};

export const contactInfoArea = [
  {
    id: 1,
    icon: "flaticon-entrepreneur-1",
    title: "About The Hope House",
    text: "The Hope House empowers communities and supports those in need through initiatives that foster growth.",
  },
  {
    id: 2,
    icon: "flaticon-location",
    title: "Locate The Hope House",
    lists: [
      "Plot 10 C, Shantinath Nagar",
      "Pratap Nagar Road, Jodhpur",
      "Rajasthan - 342001",
    ],
  },
  {
    id: 3,
    icon: "flaticon-contact",
    title: "Contact The Hope House",
    // lists: ["needhelp@krowd.com", "info@krowd.com", "666 888 0000"],
    lists: ["thehopehousetrust@gmail.com", "800 593 0712"],
  },
];
