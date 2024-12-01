import bg from "@/images/footer-bg.jpg";
import shape from "@/images/footer-shape.png";
// import logo from "@/images/logo-2.png";
import logo from "@/images/thh-logo-1.png";

export const socials2 = [
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

const footerData = {
  logo,
  bg,
  socials: socials2,
  text: "Join us to empower communities and create meaningful change in the lives of those in need.",
  text2:
    "Sign up for our latest news & articles. We won’t give you spam mails.",
  shape,
  links: [
    {
      id: 1,
      text: "About Us",
      href: "/about",
    },
    {
      id: 2,
      text: "Our Mission",
      href: "/mission",
    },
    {
      id: 3,
      text: "Get Involved",
      href: "/get-involved",
    },
    {
      id: 4,
      text: "Success Stories",
      href: "/success-stories",
    },
    {
      id: 5,
      text: "Contact Us",
      href: "/contact",
    },
    {
      id: 6,
      text: "Donate",
      href: "/donate",
    },
    {
      id: 7,
      text: "Events",
      href: "/projects-1",
    },
    {
      id: 8,
      text: "Gallery",
      href: "/gallery",
    },
    {
      id: 9,
      text: "Team Members",
      href: "/team-members",
    },
    {
      id: 10,
      text: "Blog",
      href: "/news",
    },
  ],
  author: "The Hope House",
  year: new Date().getFullYear(),
};

export default footerData;
