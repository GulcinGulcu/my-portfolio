import { useState } from "react";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Avatar from "../../components/Avatar";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <SiTailwindcss />,
        ],
      },
      {
        title: "Backend & Data",
        icons: [<FaNodeJs />, <SiExpress />, <SiMongodb />, <SiPostgresql />],
      },
      {
        title: "UI / UX & Tools",
        icons: [<FaFigma />, <FaGitAlt />, <FaGithub />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Frontend Developer, BURNR",
        stage: "May 2025 – Present",
      },
      {
        title: "Frontend Developer, Globy AI",
        stage: "Sep 2024 – May 2025",
      },
      {
        title: "Frontend Developer Intern, lablab.ai",
        stage: "Jun 2024 – Jul 2024",
      },
      {
        title: "Teacher, Ministry of National Education (TR)",
        stage: "2017 – 2022",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Frontend Development Program — Code2Career Bootcamp (Sweden)",
        stage: "2023 – 2024",
      },
      {
        title: "Bachelor’s Degree in Teacher Training — Anadolu University",
        stage: "Completed",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden md:flex absolute bottom-0 -left-[275px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="h2">
            From First Lines to <span className="text-accent">Real</span>{" "}
            Products
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            My journey into software development began three years ago with a
            curiosity about turning ideas into real products. Today, I focus on
            frontend development with React and Next.js, building user-friendly
            interfaces while growing as a frontend-focused full-stack developer
            through real-world projects.
          </p>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[400px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((section, sectionIndex) => {
              return (
                <div
                  className={`${
                    index === sectionIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white/60 after:absolute after:-bottom-1 after:left-0`}
                  key={sectionIndex}
                  onClick={() => setIndex(sectionIndex)}
                >
                  {section.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 xl:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  {/* icons */}
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, iconIndex) => {
                      return <div className="text-lg text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
