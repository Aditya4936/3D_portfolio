import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  contact,
  css,
  estate,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  react,
  redux,
  tailwindcss,
  shoes,
  ecommerce,
  spotify,
  crypto,
  furnichar,
  mysql,
  figma,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },

  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Desiging",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Aditya4936",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/aditya-patel-286662212",
  },
];

export const projects = [
  {
    iconUrl: shoes,
    theme: "btn-back-red",
    name: "Shoes-Website",
    description:
      "Developed a web application based on shoes e-commarce you can find easily each and every company shoes.",
    link: "https://github.com/Aditya4936/Swap-Shoes-frontend",
  },
  {
    iconUrl: ecommerce,
    theme: "btn-back-pink",
    name: "Wordpress E-commarce Website",
    description:
      "Created a full-stack Website using Woocommarce you can order anything throw this site .",
    link: "https://github.com/Aditya4936/Nayanthara_E-Commerce",
  },
  {
    iconUrl: spotify,
    theme: "btn-back-green",
    name: "Spotify Clone-UI",
    description:
      "Designed Web interface of Spotify website in this you can find easily song and play music .",
    link: "https://github.com/Aditya4936/Spotify-Clone",
  },

  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application interface for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://realestate-frontend-web-site-aditya.pages.dev/",
  },
  {
    iconUrl: starbucks,
    theme: "btn-back-green",
    name: "Starbucks App UI Design",
    description:
      "App that every thing in Starbucks app same functionality are in design, Figma used for designing.",
    link: "https://www.figma.com/file/idcAveZeKmHqHIq8A9jmfl/STARBUGS?type=design&node-id=0%3A1&mode=design&t=kRwKwDjhKFrkSGoL-1",
  },
  {
    iconUrl: crypto,
    theme: "btn-back-orange",
    name: "Crypto Trading App UI Design",
    description:
      "In this App have all functionality other trading platform have,Figma used for designing.",
    link: "https://www.figma.com/file/0DqUsJhoWcIo9GfINCzj74/CRYPTOCA?type=design&mode=design&t=kRwKwDjhKFrkSGoL-1",
  },
  {
    iconUrl: furnichar,
    theme: "btn-back-yellow",
    name: "Furnichar Store App UI Design",
    description:
      "Furnichar Store App that have every functionality included,Figma used for designing.",
    link: "https://www.figma.com/file/b7YL1X4cC7TNhqIkFhco2Y/Furnichar-stor?type=design&node-id=1%3A97&mode=design&t=kRwKwDjhKFrkSGoL-1",
  },
];
