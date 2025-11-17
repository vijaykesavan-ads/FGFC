import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactForm from "../components/ContactForm";
import Program from "../assets/Program.jpg";

export default function Programhero() {
  const [showForm, setShowForm] = useState(false);

  // Parallax Logic
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], ["0%", "50%"]); 
  // Moves background slowly downward

  return (
    <section className="container mx-auto min-w-full overflow-hidden">
      <motion.div style={{ y }}>
        <div className="@container">
          <div
            className="flex min-h-[550px] flex-col gap-6 bg-cover bg-center bg-no-repeat 
            @[480px]:gap-8 items-center justify-center p-4"
            style={{
              backgroundImage:
                `linear-gradient(rgba(0, 25, 75, 0.4) 0%, rgba(0, 25, 75, 0.7) 100%), url(${Program})`
            }}
          >
            {/* Text */}
            <div className="flex max-w-3xl flex-col gap-4 text-center">
              <h1 className="text-white text-4xl font-black leading-tight tracking-tighter @[480px]:text-6xl">
                Unlock Your Potential. Achieve Your Football Dreams.
              </h1>
              <h2 className="text-white/90 text-sm font-normal leading-normal @[480px]:text-lg">
                Join First Goal's elite residential program and take your game
                to the next level with professional coaching and state-of-the-art
                facilities.
              </h2>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <button
                onClick={() => setShowForm(true)}
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden 
                rounded-full h-12 px-5 bg-[#10487B] text-white text-base font-bold tracking-wide 
                hover:bg-[#0d3a65] transition-colors"
              >
                <span className="truncate">Apply Now</span>
              </button>

              <a
                href="https://drive.google.com/uc?export=download&id=18594G71OT4azoDdWelL5F4NZUqa42T3z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden 
                rounded-full h-12 px-5 bg-white text-[#111318] text-base font-bold tracking-wide 
                hover:bg-gray-200 transition-colors"
              >
                <span className="truncate">Download Brochure</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </section>
  );
}
