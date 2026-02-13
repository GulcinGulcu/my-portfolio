import { RiGithubLine, RiLinkedinLine, RiMailLine } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      <a
        href="https://github.com/GulcinGulcu"
        className="hover:text-accent transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiGithubLine />
      </a>
      <a
        href={"https://www.linkedin.com/in/gulcin-gulcu-07a668178/"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiLinkedinLine />
      </a>
      <a
        href={"mailto:gulcin.gulcu7@gmail.com?subject=Hello!"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiMailLine />
      </a>
    </div>
  );
};

export default Socials;
