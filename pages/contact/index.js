import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <Circles />
      <div className="h-full container mx-auto py-32 text-center flex items-center justify-center">
        <div className="flex w-full max-w-[700px] flex-col gap-y-5 items-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-12"
          >
            Let's <span className="text-accent">connect!</span>
          </motion.h2>
          <a
            href={"mailto:gulcingulcu7@gmail.com?subject=Hello"}
            className="btn rounded-full border border-white/50 max-w-[220px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
          >
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
              Say Hello!
            </span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 absolute text-[22px] group-hover:flex group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-500" />
          </a>
          <a
            href={"/_Gulcin_Gulcu_CV.pdf"}
            download
            className="btn rounded-full border border-white/50 max-w-[220px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
          >
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
              Download my CV
            </span>
            <BsArrowDown className="-translate-y-[120%] opacity-0 absolute text-[22px] group-hover:flex group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
