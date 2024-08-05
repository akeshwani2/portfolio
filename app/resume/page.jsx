"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaFigma, FaSwift, FaNodeJs, FaGit} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data

const about = {
  title: "About me",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. rem?",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Arhaan Keshwani"

    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 470 685 2099"

    },
    {
      fieldName: "Experience",
      fieldValue: "6+ Years"

    },
    {
      fieldName: "Nationality",
      fieldValue: "American"

    },
    {
      fieldName: "Email",
      fieldValue: "arhaankeshwani200@gmail.com"

    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"

    },
    {
      fieldName: "Languages Spoken",
      fieldValue: "6"

    },
  ]
};

// Experience data

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. rem",
  items: [
    {
      company: "Roast",
      position: "Full Stack Developer",
      duration: "2024 - Present",
    },
    {
      company: "Moneta",
      position: "Founder and Full Stack Developer",
      duration: "2023 - 2024",
    },
    {
      company: "National Cyber Skyline",
      position: "Top Ranked Member",
      duration: "Early 2024",
    },
  ],
};

const Resume = () => {
  return (
    <div>resume page</div>
  )
};

export default Resume;