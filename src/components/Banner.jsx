import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import 'animate.css';
import { NavLink } from "react-router-dom";


const Banner = () => {
  const slides = [
    {
      "id": 1,
      "image": "https://i.ibb.co.com/m8wMLDb/ai-generated-ai-generative-wild-tropical-jungle-forest-park-tree-landscape-adventure-travel-risky-ex.jpg",
      "title": "Explore Majestic Forests",
      "description": "Venture deep into lush, pristine forests, uncovering their secrets and beauty while ensuring environmental sustainability.",
    },
    {
      "id": 2,
      "image": "https://i.ibb.co.com/R9Bvpvf/bridal-veil-fall-52450-1280.jpg",
      "title": "Discover Hidden Forest Waterfalls",
      "description": "Embark on a journey to discover the serene beauty of forest waterfalls, surrounded by dense green landscapes.",
    },
    {
      "id": 3,
      "image": "https://i.ibb.co.com/yfmkFmY/pngtree-exploring-the-wild-jungle-a-summertime-adventure-in-nature-picture-image-6936966.png",
      "title": "Journey Through Enchanted Forests",
      "description": "Embark on an unforgettable adventure exploring vibrant jungles, encountering exotic wildlife, and enjoying eco-friendly experiences.",
    }
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
                <h2 className="md:text-5xl text-4xl font-bold mb-2 animate__animated animate__slideInDown">{slide.title}</h2>
                <p className="mb-4 animate__animated animate__slideInUp ">{slide.description}</p>
                <NavLink to="/aboutUs"><button className="btn  bg-green-500 rounded-xl">About Us</button></NavLink>
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
