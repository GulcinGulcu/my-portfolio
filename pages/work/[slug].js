import { useRouter } from "next/router";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import WalletSignIn from "../../public/wallet5.jpg";
import WalletHome from "../../public/wallet3.jpg";
import WalletCreate from "../../public/wallet6.jpg";
import MrHome from "../../public/mr-img-home.png";
import MrProfile from "../../public/mr-img-profile.png";
import MrSettings from "../../public/mr-img-settings.png";
import MrHomeLight from "../../public/mr-img-home-light.png";
import MrProfileLight from "../../public/mr-img-profile-light.png";
import MrSettingsLight from "../../public/mr-img-settings-light.png";
import MrCompleted from "../../public/mr-img-completed.png";
import { BsArrowRight } from "react-icons/bs";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import ProjectSlider from "../../components/ProjectSlider";

import { FaReact, FaNodeJs, FaLayerGroup } from "react-icons/fa";

import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiExpo,
} from "react-icons/si";

///data
export const projects = [
  {
    slug: "lingo",
    title: "Lingo Social App",
    description:
      "Fullstack appliction designed to connect people from around the world, helping them find language partners and practice their language skills in real time.",
    bullets: [
      "Seamless login and signup with JWT-based authentication and protected routes backed by MongoDB.",
      "Send and receive friend requests through a clean API, making it easy to build your global language network.",
      "Practice languages with your partners instantly through real-time messaging and video calling powered by Stream SDK.",
      "Beautiful, accessible interface with Tailwind CSS and Daisy UI, including customizable themes for a personalized experience.",
      "Efficient data fetching and caching using TanStack Query and Axios, plus robust custom React hooks and an API testing suite to ensure smooth performance.",
      "Node.js + Express backend integrated with a modern React frontend for a cohesive and production-ready experience.",
    ],
    tech: ["React", "Node.js", "MongoDB", "JWT", "Stream SDK"],
    liveUrl: "https://lingo-vn8u.onrender.com",
    githubUrl: "https://github.com/GulcinGulcu/lingo",
    hero: "video",
    video: { src: "/lingo.mp4" },
    icons: [FaReact, FaNodeJs, SiExpress, SiMongodb],
  },
  {
    slug: "wallet-app",
    title: "Wallet App",
    description:
      "A cross-platform (iOS/Android) expense tracker built with React Native and Expo. It features Clerk authentication with email verification, real-time balance updates, and an Express + Postgres backend—fully deployable with free-tier tooling.",
    bullets: [
      "Authentication via Clerk with signup/login and 6-digit email verification.",
      "Add income/expenses, live balance calculation, and delete transactions.",
      "Pull-to-refresh implemented from scratch for Recent Transactions.",
      "Logout flow for easy account switching.",
      "Express REST API with Neon-hosted Postgres database.",
      "Cloud-deployed backend for mobile access.",
      "Redis-based rate limiting to protect the API.",
    ],
    tech: ["React Native", "Expo", "Express", "Postgres", "Redis"],
    githubUrl: "https://github.com/GulcinGulcu/wallet",
    hero: "gallery",
    images: [WalletSignIn, WalletHome, WalletCreate],
    icons: [FaReact, FaNodeJs, SiExpress, SiPostgresql],
  },
  {
    slug: "music-rewards",
    title: "Music Rewards App",
    description:
      "A cross-platform (iOS/Android) music rewards app built with React Native (Expo Bare Workflow) and TypeScript. It features background audio playback, persistent state management with Zustand, and theme support. Users earn points by listening to full tracks, with a confetti celebration when songs finish.",
    bullets: [
      "Background audio handled by React Native Track Player (RNTP).",
      "Points and progress tracking — rewards for completing a full track.",
      "Confetti modal with congratulatory message (“You earned 150 points!”).",
      "Global state via Zustand + AsyncStorage for user, theme, and music data.",
      "Dynamic Light/Dark Mode support.",
      "Home, Profile, and Settings screens with persistent navigation.",
      "Developer tools in Settings: clear or log persisted data.",
    ],
    tech: [
      "React Native",
      "Expo (Bare)",
      "TypeScript",
      "Zustand",
      "RN Track Player",
    ],
    githubUrl: "https://github.com/GulcinGulcu/musicrewards",
    hero: "gallery",
    images: [
      MrHome,
      MrProfile,
      MrSettings,
      MrHomeLight,
      MrProfileLight,
      MrSettingsLight,
      MrCompleted,
    ],
    icons: [FaReact, SiTypescript, SiExpo],
  },
  {
    slug: "product-store",
    title: "Fullstack Product Store",
    description:
      "A production-ready single-domain e-commerce demo built with Next.js and Express, featuring clean /api routing, a modern UI, and a MongoDB-backed REST API.",
    bullets: [
      "Single-domain deployment with UI and API served together using clean /api routing.",
      "Full CRUD product flows built on REST endpoints with MongoDB and data validations.",
      "Responsive and accessible interface using Chakra UI with dialogs, forms, and keyboard and focus states.",
      "Predictable global state management with Zustand for a smooth user experience.",
      "Production-ready setup with environment variables, error handling, and optimized build scripts.",
    ],
    tech: ["Next.js", "Express", "MongoDB", "Zustand", "Chakra UI"],
    cover: "/work/product-store.png",
    liveUrl: "ecommerce-ea93.onrender.com",
    githubUrl: "https://github.com/GulcinGulcu/ecommerce",
    hero: "video",
    video: { src: "/product-store.mp4" },
    icons: [SiNextdotjs, SiMongodb, FaLayerGroup],
  },
];

export default function WorkDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects.find((p) => p.slug === slug);

  if (!project)
    return <div className="container mx-auto py-20">Project not found.</div>;

  return (
    <div className="h-full overflow-y-auto bg-primary/30 py-36 flex sm:items-center">
      <Circles />
      <div className="container mx-auto my-10 xl:my-0">
        <div className="flex flex-col items-center xl:flex-row gap-x-8 overflow-scroll">
          {project.hero === "video" && project.video?.src && (
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:w-[45vw] xl:mr-6"
            >
              <div className="relative w-full aspect-video overflow-hidden cursor-pointer">
                <video
                  className="absolute inset-0 w-full h-full object-contain"
                  controls
                  playsInline
                >
                  <source src={project.video.src} type="video/mp4" />
                </video>
              </div>
            </motion.div>
          )}
          {project.hero === "gallery" && project.images?.length && (
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:w-[30vw]"
            >
              <ProjectSlider projectImages={project.images} />
            </motion.div>
          )}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col text-center px-2 xl:px-0 xl:text-left mb-4 xl:mb-0 gap-y-4 xl:gap-y-6"
          >
            <div className="h2 py-2 relative after:w-[70px] after:h-0.5 after:bg-accent/70 after:absolute after:bottom-0 after:left-0">
              {project.title}
            </div>
            <div className="flex flex-col md:flex-row gap-x-2 items-center text-white/60">
              <div className="font-light mb-2 xl:mb-0">Tech Stack</div>
              <div className="hidden md:flex">-</div>
              {/* icons */}
              <div className="flex gap-x-4">
                {project.icons?.map((Icon, iconIndex) => {
                  return (
                    <div key={iconIndex} className="text-lg text-white">
                      <Icon />
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="max-w-[600px] mx-auto xl:mx-0">
              {project.description}
            </p>
            <ul className="grid gap-3">
              {project.bullets.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center text-left gap-3 group cursor-default"
                >
                  <p className="mt-1 text-accent">✓</p>
                  <p className="text-sm leading-relaxed opacity-90 group-hover:text-white transition-all duration-300">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 justify-center xl:justify-start mb-24 xl:mb-0">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="btn rounded-full border border-white/50 max-w-[220px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                >
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    Live Demo
                  </span>
                  <BsArrowRight className="-translate-y-[120%] opacity-0 absolute text-[22px] group-hover:flex group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-500" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="btn rounded-full border border-white/50 max-w-[220px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                >
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    Github
                  </span>
                  <BsArrowRight className="-translate-y-[120%] opacity-0 absolute text-[22px] group-hover:flex group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-500" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
}
