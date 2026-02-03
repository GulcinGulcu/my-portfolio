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
        },
        {
          title: "Music Rewards",
          path: "/music-rewards-portfolio.png",
          slug: "music-rewards",
        },
        {
          title: "Product Store",
          path: "/product-store-portfolio.png",
          slug: "product-store",
        },
        {
          title: "Wallet",
          path: "/wallet-portfolio.png",
          slug: "wallet-app"
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
                  <Link
                    href={`/work/${image.slug}`}
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
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
                  </Link>
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
