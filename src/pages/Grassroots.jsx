import React, { useEffect, useState } from "react";
import CommunitySection from "../components/CommunitySection";
import GR from "../assets/GR.jpg";

export default function Grassroots() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY * 0.25); 
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="@container">
      <div className="relative h-[600px] overflow-hidden mb-10">

        {/* Background Parallax Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${GR})`,
            transform: `translateY(${offsetY}px)`,
            transition: "transform 0.1s linear",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[rgba(0,25,75,0.55)]" />

        {/* Content Layer */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-5xl font-black leading-tight">
            Building the Future of Football
          </h1>
          <h2 className="text-white text-sm @[480px]:text-base max-w-2xl mx-auto mt-3">
            Discover our commitment to nurturing talent and strengthening the
            community through our grassroots initiatives.
          </h2>
        </div>
      </div>

      <CommunitySection />
    </div>
  );
}
