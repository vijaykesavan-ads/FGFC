import React, { useEffect, useRef } from "react";
import banner from "../assets/banner.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const parallaxRef = useRef(null);
  const navigation = useNavigate()
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px) scale(1.05)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTeam = () => {
    navigation('/team')
  }

  const learnMore = () => {
    navigation("/about")
  }

  return (
    <div className="relative overflow-hidden h-[80vh]">
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out will-change-transform"
        style={{
          backgroundImage: `linear-gradient(rgba(0,25,75,0.3), rgba(0,25,75,0.6)), url(${banner})`,
        }}
      ></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-4">
          Welcome to{" "}
          <span className="bg-white/25 text-[#10487B] px-3 py-1 rounded-lg">
            First Goal FC
          </span>
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl">
          Nurturing young talent and promoting grassroots football for the next
          generation of champions
        </p>
        <div className="flex flex-wrap gap-3 justify-center mt-4">
          <button
            onClick={() => navigateTeam()}
            className="bg-white text-primary font-bold px-5 py-3 hover:bg-[#10487B] hover:text-white rounded-full">
            Explore Teams
          </button>
          <button
            onClick={() => learnMore()}
            className="bg-white/20 text-white hover:bg-white/50 font-bold px-5 py-3 rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
