import { support, truckFast, bag, face, category } from "../icons";
import {
  hero,
  bigShoe2,
  bigShoe3,
  product1,
  product2,
  product3,
  product4,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#quote", label: "Send Quote" },
  { href: "#footer", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: hero,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const products = [
  //
  {
    id:1,
    imgURL: product1,
    name: "product 1",
    category: "Tomato",
  },
  {
    id:1,
    imgURL: product2,
    name: "product 2",
    category: "Tomato",
  },
  {
    id:1,
    imgURL: product3,
    name: "product 3",
    category: "Tomato",
  },
  {
    id:1,
    imgURL: product2,
    name: "product 4",
    category: "Tomato",
  },
  {
    id:1,
    imgURL: product4,
    name: "product 5",
    category: "Tomato",
  },
  {
    id:1,
    imgURL: product3,
    name: "product 6",
    category: "Tomato",
  },
  // Sauces
  {
    id:1,
    imgURL: product2,
    name: "product 7",
    category: "Sauces",
  },
  {
    id:1,
    imgURL: product1,
    name: "product 8",
    category: "Sauces",
  },
  {
    id:1,
    imgURL: product4,
    name: "product 9",
    category: "Sauces",
  },
  // Jam
  {
    id:1,
    imgURL: product3,
    name: "product 10",
    category: "Jam",
  },
  {
    id:1,
    imgURL: product1,
    name: "product 11",
    category: "Jam",
  },
  {
    id:1,
    imgURL: product4,
    name: "product 12",
    category: "Jam",
  },
  {
    id:1,
    imgURL: product2,
    name: "product 13",
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
