import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex max-w-none rotate-3">
      <Image
        src={"/avatar.png"}
        width={590}
        height={542}
        alt=""
        className="w-full h-full translate-z-0" 
      />
    </div>
  );
};

export default Avatar;
