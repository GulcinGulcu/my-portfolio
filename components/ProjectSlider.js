import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Image from "next/image";

const ProjectSlider = ({ projectImages }) => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="xl:h-auto h-[280px]"
      speed={350}
      threshold={10}
    >
      {projectImages.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex justify-center cursor-pointer">
              <div
                className="relative w-[260px] aspect-[9/19.5]
                 rounded-[32px] bg-black
                 ring-1 ring-white/10
                 shadow-2xl shadow-black/40
                 overflow-hidden"
              >
                {/* screen */}
                <div className="absolute inset-[6px] rounded-[26px] overflow-hidden bg-black">
                  <Image
                    src={image}
                    alt={`Project image ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* speaker / notch */}
                <div
                  className="absolute top-[10px] left-1/2 -translate-x-1/2
                      w-14 h-1.5 rounded-full bg-neutral-800"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProjectSlider;
