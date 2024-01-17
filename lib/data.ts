import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import notesAppImg from "@/public/notes-app.png";
import ednistImg from "@/public/ednist.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Level up coding, from Challengesoft",
    location: "Cherkasy",
    description:
      "I graduated after 7 months of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2022",
  },
  {
    title: "Fullstack Developer",
    location: "Cherkasy",
    description:
      "I worked as a frontend developer, almost 4 months for company called Qubyx, i did a web application for help handling their product, also i did backend to this application on NodeJS.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Frontend Developer",
    location: "Cherkasy",
    description:
      "I participated in several freelance projects, for example i did web app Ednist.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Notes App",
    description:
      "It's my own simple project, i did it to practice and improve my skills.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind", "Shadcn/ui"],
    imageUrl: notesAppImg,
    projectLink: "https://notes-bary-app.netlify.app/app/home"
  },
  {
    title: "Ednist construction",
    description:
      "Freelance project for build company. I was the front-end developer. It has features like filtering, sorting and translations.",
    tags: ["React", "TypeScript", "Styled components", "NodeJS"],
    imageUrl: ednistImg,
    projectLink: "https://ednist-construction.com.ua/",
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  //   projectLink: "/"
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
] as const;
