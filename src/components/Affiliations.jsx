import React from "react";
import aiffLogo from "../assets/AIFF.png";
import TTFA from "../assets/TFA.png";
import MFA from "../assets/MFA.png"
export default function Affiliations() {
  return (
    <div>
      <h2 className="text-[#10487B] text-[26px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 mt-10">
        Our Official Affiliations
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4 mt-10">
        {/* AIFF */}
        <div className="flex flex-col gap-3 pb-3 bg-[#ebeff2] dark:bg-background-dark rounded-lg p-4 transition-shadow hover:shadow-lg dark:border dark:border-white/10">
                  <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded"
                      data-alt="Logo for The All India Football Federation (AIFF)"
                      style={{
                          backgroundImage: `url(${aiffLogo})`,
                      }}
                  ></div>

          <div>
            <p className="text-[#10487B] text-base font-bold leading-normal">
              The All India Football Federation (AIFF)
            </p>
            <p className="text-[#606e8a] dark:text-gray-400 text-sm font-normal leading-normal mt-1">
              The AIFF is the governing body for football in India, overseeing national tournaments,
              leagues and the development of the sport across the country.
            </p>
          </div>
        </div>

        {/* TNFA */}
        <div className="flex flex-col gap-3 pb-3 bg-[#ebeff2] dark:bg-background-dark rounded-lg p-4 transition-shadow hover:shadow-lg dark:border dark:border-white/10">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded"
            data-alt="Logo for Tamil Nadu Football Association (TNFA)"
            style={{
              backgroundImage: `url(${TTFA})`,
            }}
          ></div>

          <div>
            <p className="text-[#10487B] text-base font-bold leading-normal">
              Tamil Nadu Football Association (TNFA)
            </p>
            <p className="text-[#606e8a] dark:text-gray-400 text-sm font-normal leading-normal mt-1">
              The TNFA is the official authority for football in Tamil Nadu, responsible for promoting
              the sport and organising competitions at the state level.
            </p>
          </div>
        </div>

        {/* MFA */}
        <div className="flex flex-col gap-3 pb-3 bg-[#ebeff2] dark:bg-background-dark rounded-lg p-4 transition-shadow hover:shadow-lg dark:border dark:border-white/10">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded"
            data-alt="Logo for Mumbai Football Association (MFA)"
            style={{
              backgroundImage: `url(${MFA})`,
             }}
          ></div>

          <div>
            <p className="text-[#10487B] text-base font-bold leading-normal">
              Mumbai Football Association (MFA)
            </p>
            <p className="text-[#606e8a] dark:text-gray-400 text-sm font-normal leading-normal mt-1">
              The MFA is the primary organisation for football in Mumbai. First Goal Football Club (FGFC)
              is recognised by the MFA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
