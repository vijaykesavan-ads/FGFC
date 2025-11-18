import React from 'react';
import Velu from "../assets/Velu.png"
import Judon from "../assets/Judon.png"
import Santhosh from "../assets/Santhosh.png"
import Anton from "../assets/Anton.png"
import Gokul from "../assets/Gokul.png"
import Varun from "../assets/Varun.png"

export default function ManagementTeam() {
  const team = [
    {
      name: 'VADIVEL ELUMALAI',
      role: 'HEAD COACH',
      image: Velu,
    },
    {
      name: 'JUDON DSOUZA',
      role: 'TECHNICAL DIRECTOR',
      image: Judon
    },
    {
      name: 'DR. SANTHOSH',
      role: 'TEAM PHYSIO',
      image: Santhosh
    },
    {
      name: 'GOKUL HARIGARAN',
      role: 'ASSISTANT COACH',
      image: Gokul
    },
    {
      name: 'B.M VARUN',
      role: 'ASSISTANT COACH',
      image: Varun
    },
    {
      name: 'ANTON REGO VALDARIS',
      role: 'STRENGTH & CONDITIONS COACH',
      image: Anton
    },
  ];

  return (
    <div>
      <h2 className="text-[#10478B]  text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 mt-10">
        Team Behind The Team
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 p-4 mt-10">
        {team.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-3 p-4 bg-[#f5f6f8] dark:bg-background-dark rounded-lg transition-shadow hover:shadow-lg dark:border border-[#10478B]/10"
          >
            <div
              className="w-20 h-20 bg-center bg-no-repeat bg-cover rounded-full border-2 border-[#10478B]"
              data-alt={`Portrait of ${member.name}, ${member.role}`}
              style={{ backgroundImage: `url(${member.image})` }}
            ></div>

            <div>
              <p className="text-[#10478B]  text-base font-medium leading-normal">
                {member.name}
              </p>
              <p className="text-[#606e8a] dark:text-gray-400 text-sm font-normal leading-normal">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
