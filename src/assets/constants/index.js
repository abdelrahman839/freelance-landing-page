import {
  facebook,
  instagram,
  support,
  truckFast,
  twitter,
  bag,
  face,
  category
} from "../icons";
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
  { href: "#about-us", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#quote", label: "Send Quote" },
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
  {
    imgURL: product1,
    name: "Dried pineapple",
    price: "100.20 €",
  },
  {
    imgURL: product2,
    name: "Dried Kiwi",
    price: "190.00 €",
  },
  {
    imgURL: product3,
    name: "Dried Apricot",
    price: "120.20 €",
  },
  {
    imgURL: product4,
    name: "Dried Mango Slice",
    price: "130.00 €",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Wide Variety of Products",
    subtext: "Offer a diverse selection of premium dry fruits including almonds, cashews, pistachios, raisins, dates, and more.",
  },
  {
    imgURL: face,
    label: "Quality Assurance",
    subtext: "Ensure high-quality standards through rigorous sourcing and quality control processes to deliver fresh and flavorful dry fruits.",
  },
  {
    imgURL: support,
    label: "Customizable Gift Baskets",
    subtext: "Provide options for customizable gift baskets or packages, perfect for special occasions or corporate gifts.",
  },
  {
    imgURL: category,
    label: "Nutritional Information",
    subtext: " Provide detailed nutritional information for each product, helping customers make informed choices about their purchases.",
  },
  {
    imgURL: bag,
    label: "Customized Packaging",
    subtext: "Offer customizable packaging options for gift baskets or personal orders, ensuring a personalized touch for every occasion.",
  },
];


export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Dried pineapple", href:"#products" },
      { name: "Dried Kiwi", href: "#products" },
      { name: "Dried Apricot", href: "#products" },
      { name: "Dried Mango Slice", href: "#products" },
    ],
  },

];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
