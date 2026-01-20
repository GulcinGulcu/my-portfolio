import { RiGithubLine, RiLinkedinLine, RiMailLine } from "react-icons/ri";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiMailLine />
      </Link>
    </div>
  );
};

export default Socials;
