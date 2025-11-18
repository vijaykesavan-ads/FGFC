import React from "react";
import U8 from "../assets/U8.jpg";
import U10 from "../assets/U10.png";
import U11 from "../assets/U11.png";
import TDFA from "../assets/TDFAP.jpeg";
import MFAP from "../assets/MFAP.jpg";
import Porkalam from "../assets/Porkalam.jpeg";

const teams = [
  {
    name: "First Goal U-8",
    subtitle: "Coached by Gokul Harigaran",
    img: U8,
  },
  {
    name: "First Goal U-10",
    subtitle: "Coached by Vadivel Elumalai",
    img: U10,
  },
  {
    name: "First Goal U-12",
    subtitle: "Coached by B.M Varun",
    img: U11,
  },
  {
    name: "Thiruvallur District Football Association(TDFA) Team",
    subtitle: "Coached by Vadivel Elumalai",
    img: TDFA,
  },
  {
    name: "Mumbai Football Association(MFA) Team",
    subtitle: "Coached by Judon D'Souza",
    img: MFAP,
  },
  {
    name: "Porkalam 2025 Team",
    subtitle: "Coached by Gokul Harigaran,B.M Varun & Vadivel Elumalai",
    img: Porkalam
  },
];

export default function TeamGrid() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(420px,1fr))] gap-6 p-4">
      {teams.map((team, index) => (
        <div key={index} className="flex flex-col gap-3 pb-3 group cursor-pointer">
          <div className="w-full bg-center bg-no-repeat aspect-[2/1] bg-cover rounded-xl overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${team.img})` }}
            ></div>
          </div>


          <div>
            <p className="text-base font-bold leading-normal">{team.name}</p>
            <p className="text-sm font-normal leading-normal text-slate-600 dark:text-slate-400">
              {team.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
