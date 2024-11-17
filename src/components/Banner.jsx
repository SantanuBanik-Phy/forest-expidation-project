import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";


const Banner = () => {
    const slides = [
        {
          id: 1,
          image: "https://i.ibb.co.com/KN4QTsV/landscape-photography-mountain-forest-395237-272.jpg",
          title: "Explore Majestic Mountains",
          description: "Embark on eco-friendly treks through pristine landscapes.",
        },
        {
          id: 2,
          image: "https://i.ibb.co.com/G5ZFnc5/stunning-fiji-island-with-crystal-clear-waters-sunny-blue-sky-beauty-horizon-paradise-idyllic-travel.jpg",
          title: "Dive into Crystal Clear Oceans",
          description: "Discover the underwater wonders while protecting marine life.",
        },
        {
          id: 3,
          image: "https://i.ibb.co.com/yfmkFmY/pngtree-exploring-the-wild-jungle-a-summertime-adventure-in-nature-picture-image-6936966.png",
          title: "Adventure in Tropical Jungles",
          description: "Experience the thrill of exploring lush rainforests.",
        },
      ];
    

  return (
    <div className="bg-neutral text-neutral-content">
      <Swiper
        navigation={true}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Navigation,Autoplay]}
        className="mySwiper w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-5xl font-bold mb-2">{slide.title}</h2>
                <p className="mb-4">{slide.description}</p>
                <button className="btn  bg-green-500 rounded-xl">About Us</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
