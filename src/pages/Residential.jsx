import React from "react";
import Residental from "../assets/Residental.jpg";

export default function Residential() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      {/* Background layer */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 25, 75, 0.2), rgba(0, 25, 75, 0.7)), url(${Residental})`,
        }}
      ></div>

      {/* Content layer */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-white text-5xl font-black leading-tight tracking-tighter md:text-6xl">
          Experience India’s Best in Football Education and Training
        </h1>
        <p className="text-base sm:text-lg text-white mt-4">
          FirstGoal FC | Residential Academy Where Academic Excellence Meets Professional Football Training
        </p>
        <h2 className="text-4xl text-white sm:text-6xl md:text-7xl font-black tracking-tighter mt-6">
          Coming Soon . . .
        </h2>
      </div>
    </section>
  );
}
