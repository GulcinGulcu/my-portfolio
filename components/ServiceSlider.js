import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Frontend Development",
    description:
      "Modern and responsive user interfaces with React, Next.js, and Tailwind CSS, focusing on performance and usability.",
  },
  {
    icon: <RxCrop />,
    title: "UI / UX Implementation",
    description:
      "Turning designs into polished, user-friendly experiences with attention to layout, interaction, and visual detail.",
  },
  {
    icon: <RxRocket />,
    title: "Full-Stack Development",
    description:
      "Developing scalable applications with a frontend-first mindset, integrating APIs, authentication, and backend services.",
  },
  {
    icon: <RxReader />,
    title: "Product-Focused Development",
    description:
      "Working on real-world products with a focus on maintainable code, clean architecture, and collaborative development.",
  },
  {
    icon: <RxPencil2 />,
    title: "Continuous Improvement",
    description:
      "Constantly learning and refining my skills through real projects, modern tools, and best practices in frontend development.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="xl:h-[440px] h-[280px]"
    >
      {serviceData.map((service, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{service.icon}</div>
              {/* title and description */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{service.title}</div>
                <p className="max-w-[350px] leading-normal">{service.description}</p>
              </div>
              {/* arrpw */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
