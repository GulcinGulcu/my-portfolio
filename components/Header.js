import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";
import { BsArrowDown } from "react-icons/bs";

const Header = () => {
  return (
    <header className="absolute w-full z-30 flex items-center px-16 xl:px-0 xl:h-[90px] ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={220}
              height={48}
              alt="logo"
              priority={true}
            />
          </Link>
          <div className="flex gap-x-7 items-center">
            <Socials />
            <a
              href={"/_Gulcin_Gulcu_CV.pdf"}
              download
              className="btn rounded-full border border-white/50 max-w-[220px] px-6 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
               CV
              </span>
              <BsArrowDown className="-translate-y-[120%] opacity-0 absolute text-[18px] group-hover:flex group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-500" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
