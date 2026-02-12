import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Lingo",
          path: "/lingo-portfolio.png",
          slug: "lingo",
          mode: "detail",
        },
        {
          title: "Music Rewards",
          path: "/music-rewards-portfolio.png",
          slug: "music-rewards",
          mode: "detail",
        },
        {
          title: "Product Store",
          path: "/product-store-portfolio.png",
          slug: "product-store",
          mode: "detail",
        },
        {
          title: "Wallet",
          path: "/wallet-portfolio.png",
          slug: "wallet-app",
          mode: "detail",
        },
      ],
    },
    {
      images: [
        {
          title: "Responsive Tailwind Table",
          path: "/table-portfolio.png",
          liveUrl: "https://tailwind-css-tawny.vercel.app/",
          mode: "external",
        },
        {
          title: "Recipe",
          path: "/recipe-portfolio.png",
          liveUrl: "https://recipe-app-eight-beta.vercel.app",
          mode: "external",
        },
        {
          title: "Home Page Design",
          path: "/figma-portfolio.png",
          liveUrl: "https://www.figma.com/proto/ANqeOrf9XYEpI1AMwFhh4h/LablabNext?node-id=3-5&t=6zIfdLRJNcHBMQAP-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
          mode: "external",
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Link from "next/link";

const CardLink = ({ image, children }) => {
  if (image.mode === "external" && image.liveUrl) {
    return (
      <a
        href={image.liveUrl}
        target="_blank"
        rel="noreferrer"
        className="relative rounded-lg overflow-hidden flex items-center justify-center group"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={`/work/${image.slug}`}
      className="relative rounded-lg overflow-hidden flex items-center justify-center group"
    >
      {children}
    </Link>
  );
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[380px] sm:h-[580px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-5 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <CardLink image={image} key={index}>
                    <div className="flex justify-center items-center relative overflow-hidden group">
                      <Image
                        src={image.path}
                        alt={image.title}
                        width={500}
                        height={300}
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a33bd] opacity-0 group-hover:opacity-70 transition-all duration-700"></div>
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-28 transition-all duration-300">
                        <div className="flex items-center gap-2 text-[13px] tracking-[0.2em]">
                          {/* title part1 */}
                          <div className="delay-100">{image.title}</div>
                          {/* title part2 */}
                          <div className="delay-150 translate-y-[500%] group-hover:translate-y-0 transition-all duration-300">
                            App
                          </div>
                          {/* title part3 */}
                          <div className="delay-200 text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardLink>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
