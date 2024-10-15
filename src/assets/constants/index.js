import {
  FaChalkboardTeacher,
  FaIndustry,
  FaShippingFast,
  FaChartLine,
} from "react-icons/fa";
import { MdLightbulbOutline } from "react-icons/md";

import {
  jam1,
  jam2,
  jam3,
  jam4,
  jam5,
  jam6,
  sauce1,
  sauce2,
  sauce3,
  sauce4,
  sauce5,
  sauce6,
  sauce7,
  sauce8,
  tomato1,
  tomato2,
  tomato3,
  tomato4,
  tomato5,
  tomato6,
  tomato7,
  tomato8,
} from "../images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#quote", label: "Request Quote" },
  { href: "#footer", label: "Contact Us" },
];

export const products = [
  // Tomato
  {
    id: 3,
    imgURL: tomato3,
    name: "Tomato paste 3 kg",
    category: "Tomato",
  },
  {
    id: 4,
    imgURL: tomato4,
    name: "Tomato paste 400 gm",
    category: "Tomato",
  },
  {
    id: 8,
    imgURL: tomato8,
    name: "Tomato paste 800 gm",
    category: "Tomato",
  },
  {
    id: 6,
    imgURL: tomato6,
    name: "Tomato paste 70 gm",
    category: "Tomato",
  },
  {
    id: 1,
    imgURL: tomato1,
    name: "Tomato paste 300 gm",
    category: "Tomato",
  },
  {
    id: 2,
    imgURL: tomato2,
    name: "Tomato paste 300 gm",
    category: "Tomato",
  },
  {
    id: 7,
    imgURL: tomato7,
    name: "Tomato paste 70 gm",
    category: "Tomato",
  },
  {
    id: 5,
    imgURL: tomato5,
    name: "Tomato paste 50 gm",
    category: "Tomato",
  },
  // Condiments
  {
    id: 9,
    imgURL: sauce1,
    name: "BBQ bottle",
    category: "Condiments",
    special: true,
  },
  {
    id: 12,
    imgURL: sauce4,
    name: "ketchup bottle",
    category: "Condiments",
    special: true,
  },
  {
    id: 13,
    imgURL: sauce5,
    name: "Mayonnaise bottle",
    category: "Condiments",
    special: true,
  },
  {
    id: 15,
    imgURL: sauce7,
    name: "Mustard bottle",
    category: "Condiments",
    special: true,
  },
  {
    id: 10,
    imgURL: sauce2,
    name: "BBQ packet",
    category: "Condiments",
  },
  {
    id: 11,
    imgURL: sauce3,
    name: "ketchup packet",
    category: "Condiments",
  },
  {
    id: 14,
    imgURL: sauce6,
    name: "Mayonnaise packet",
    category: "Condiments",
  },
  {
    id: 16,
    imgURL: sauce8,
    name: "Mustard packet",
    category: "Condiments",
  },
  // Jam
  {
    id: 17,
    imgURL: jam1,
    name: "Apricot jam",
    category: "Jam",
  },
  {
    id: 19,
    imgURL: jam3,
    name: "Strawberry jam",
    category: "Jam",
  },
  {
    id: 21,
    imgURL: jam5,
    name: "Fig jam",
    category: "Jam",
  },
  {
    id: 18,
    imgURL: jam2,
    name: "Apricot jam",
    category: "Jam",
  },
  {
    id: 20,
    imgURL: jam4,
    name: "Strawberry jam",
    category: "Jam",
  },
  {
    id: 22,
    imgURL: jam6,
    name: "Fig jam",
    category: "Jam",
  },
];

export const services = [
  {
    icon: <FaChalkboardTeacher className="w-6 h-6 text-white" />,
    label: "Consult",
    subtext:
      "Tailored consulting services to optimize operations, improve quality, and increase profitability for food manufacturers.",
  },
  {
    icon: <FaIndustry className="w-6 h-6 text-white" />,
    label: "Manufacture",
    subtext:
      "Efficient “Science-Based” Contract Manufacturing, ensuring premium quality and compliance for your food products with top confidentiality to your recipes.",
  },
  {
    icon: <FaShippingFast className="w-6 h-6 text-white" />,
    label: "Export",
    subtext:
      "Find my Top 5 Potential Markets” is a game changing service; We offer seamless export solutions, handling logistics and regulations to expand your market globally.",
  },

  {
    icon: <MdLightbulbOutline className="w-6 h-6 text-white" />,
    label: "Innovate",
    subtext:
      "Drive product innovation and development with our expert R&D team, helping you stay ahead in the market.",
  },
  {
    icon: <FaChartLine className="w-6 h-6 text-white" />,
    label: "Invest",
    subtext:
      "Empower your business with smart, tailored investment strategies that fuel growth and ensure long-term success, turning opportunities into tangible results.",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Tomato Paste", href: "#products" },
      { name: "Condiments", href: "#products" },
      { name: "Jam", href: "#products" },
    ],
  },
];

export const footerWhatsAppMesage = {
  phone: "+201143275741",
  message:
    "Hello, I am interested in learning more about your products. Could you please provide more details? Thank you.",
};

export const socialMedia = {
  facebook: "https://www.facebook.com/61566851945737/",
  linkedin: "https://www.linkedin.com/company/iktefa/",
};
