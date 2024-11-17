import icon from "@/images/header-icon.png";
import logo2 from "@/images/logo-2.png";
// import logo from "@/images/logo.png";
import logo from "@/images/thh-logo-1.png";

export const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    // subNavItems: [
    //   {
    //     id: 1,
    //     name: "Home 1",
    //     href: "/",
    //   },
    //   {
    //     id: 2,
    //     name: "Home 2",
    //     href: "/index-2",
    //   },
    //   {
    //     id: 3,
    //     name: "Home 3",
    //     href: "/index-3",
    //   },
    // ],
  },
  {
    id: 2,
    name: "About",
    href: "",
    subNavItems: [
      { id: 1, name: "About Us", href: "/about" },
      { id: 1, name: "Team Members", href: "/team-members" },
    ],
  },
  {
    id: 3,
    name: "Events",
    href: "/projects-1",
    // href: "/projects-2",
  },
  // {
  //   id: 3,
  //   name: "Explore",
  //   href: "",
  //   subNavItems: [
  //     { id: 1, name: "Project 1", href: "/projects-1" },
  //     { id: 2, name: "Project 2", href: "/projects-2" },
  //     { id: 3, name: "Single Project", href: "/single-project" },
  //   ],
  // },
  {
    id: 4,
    name: "Gallery",
    href: "/gallery",
  },
  {
    id: 5,
    name: "Pages",
    href: "",
    subNavItems: [
      { id: 1, name: "FAQ", href: "/faq" },
      { id: 2, name: "Blog", href: "/news" },
    ],
  },
  // {
  //   id: 5,
  //   name: "News",
  //   href: "",
  //   subNavItems: [
  //     { id: 1, name: "News", href: "/news" },
  //     { id: 2, name: "Single News", href: "/single-news" },
  //   ],
  // },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
  },
];

export const socials = [
  {
    id: 1,
    icon: "fa fa-facebook-square",
    href: "https://www.facebook.com/thehopehouse123?mibextid=kFxxJD",
  },
  {
    id: 2,
    icon: "fa fa-twitter",
    href: "https://x.com/TheHopeHouse2?t=hBH0pL_ZMEwm8pcDIrsesg&s=09",
  },
  {
    id: 3,
    icon: "fa fa-instagram",
    href: "https://www.instagram.com/the__hope__house?igsh=cDByemlyd29pOGF2",
  },
  {
    id: 4,
    icon: "fa fa-linkedin",
    href: "https://www.linkedin.com/company/the-hope-house-trust/",
  },
];

const headerData = {
  logo,
  logo2,
  icon,
  navItems,
  email: "thehopehousetrust@gmail.com",
  phone: "800 593 0712",
  address:
    "Plot 10 C, Shantinath Nagar, Pratap Nagar Road, Jodhpur, Rajasthan - 342001",
  socials,
};

export default headerData;
