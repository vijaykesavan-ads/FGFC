import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { FaUsers, FaHeart } from "react-icons/fa";
import { GiSoccerField } from "react-icons/gi";
import Philosophy from "../components/Philosophy";
import Clublife from "../components/Clublife";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-reveal");
          } else {
            entry.target.classList.remove("animate-reveal");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-trigger");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Hero />
      <div className="flex flex-col gap-10 px-4 py-10 mt-12 overflow-hidden">
        <div className="flex flex-col items-center text-center gap-4 fade-trigger opacity-0">
          <h1 className="text-[#10487B] text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:tracking-[-0.033em] max-w-[720px]">
            Why Join First Goal FC?
          </h1>
          <p className="text-base font-normal leading-normal max-w-[720px]">
            First Goal Football Club (FGFC) is a community-driven football club
            dedicated to nurturing young talent and promoting grassroots football.
            With a strong focus on youth development, FGFC offers structured training,
            expert coaching, and competitive opportunities to shape all-rounders.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 mt-20">
          <div className="card fade-trigger opacity-0">
            <div className="text-[#10487B] text-4xl">
              <FaUsers />
            </div>
            <h2 className="text-base font-bold leading-tight mt-2">Expert Coaching</h2>
            <p className="text-sm font-normal text-gray-600 mt-1">
              Benefit from structured training and expert guidance to develop your skills.
            </p>
          </div>

          <div className="card fade-trigger opacity-0">
            <div className="text-[#10487B] text-4xl">
              <GiSoccerField />
            </div>
            <h2 className="text-base font-bold leading-tight mt-2">
              State-of-the-Art Facilities
            </h2>
            <p className="text-sm font-normal text-gray-600 mt-1">
              Train on well-maintained pitches with modern equipment in an ideal environment.
            </p>
          </div>

          <div className="card fade-trigger opacity-0">
            <div className="text-[#10487B] text-4xl">
              <FaHeart />
            </div>
            <h2 className="text-base font-bold leading-tight mt-2">Community Focus</h2>
            <p className="text-sm font-normal text-gray-600 mt-1">
              Join outreach programs and workshops that inspire a love for the sport.
            </p>
          </div>
        </div>
      </div>

      <Philosophy />
      <Clublife />
    </div>
  );
}
