import { support, truckFast, bag, face, category } from "../icons";
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
  { href: "#quote", label: "Send Quote" },
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
  // Sauces
  {
    id: 9,
    imgURL: sauce1,
    name: "BBQ bottle",
    category: "Sauces",
    special:true,
  },
  {
    id: 12,
    imgURL: sauce4,
    name: "ketchup bottle",
    category: "Sauces",
    special:true,
  },
  {
    id: 13,
    imgURL: sauce5,
    name: "Mayonnaise bottle",
    category: "Sauces",
    special:true,
  },
  {
    id: 15,
    imgURL: sauce7,
    name: "Mustard bottle",
    category: "Sauces",
    special:true,
  },
  {
    id: 10,
    imgURL: sauce2,
    name: "BBQ packet",
    category: "Sauces",
  },
  {
    id: 11,
    imgURL: sauce3,
    name: "ketchup packet",
    category: "Sauces",
  },
  {
    id: 14,
    imgURL: sauce6,
    name: "Mayonnaise packet",
    category: "Sauces",
  },
  {
    id: 16,
    imgURL: sauce8,
    name: "Mustard packet",
    category: "Sauces",
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
    imgURL: truckFast,
    label: "Wide Variety of Products",
    subtext:
      "Offer a diverse selection of premium dry fruits including almonds, cashews, pistachios, raisins, dates, and more.",
  },
  {
    imgURL: face,
    label: "Quality Assurance",
    subtext:
      "Ensure high-quality standards through rigorous sourcing and quality control processes to deliver fresh and flavorful dry fruits.",
  },
  {
    imgURL: support,
    label: "Customizable Gift Baskets",
    subtext:
      "Provide options for customizable gift baskets or packages, perfect for special occasions or corporate gifts.",
  },
  {
    imgURL: category,
    label: "Nutritional Information",
    subtext:
      " Provide detailed nutritional information for each product, helping customers make informed choices about their purchases.",
  },
  {
    imgURL: bag,
    label: "Customized Packaging",
    subtext:
      "Offer customizable packaging options for gift baskets or personal orders, ensuring a personalized touch for every occasion.",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Tomato Paste", href: "#products" },
      { name: "Souces", href: "#products" },
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
