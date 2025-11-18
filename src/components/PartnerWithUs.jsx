import React from "react";

export default function PartnerWithUs() {
  return (
    <div className="px-4 py-10">

      {/* TITLE */}
      <h2 className="text-[#10478B] text-[28px] font-extrabold leading-tight">
        FGFC PARTNER 
      </h2>
      <h3 className="text-[#10478B] text-[28px] font-extrabold leading-tight mb-8">
        WITH US
      </h3>

      {/* GRID SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* AFTER SCHOOL PROGRAM */}
        <div className="bg-[#DE7A4F] text-white rounded-3xl p-6 shadow-md">
          <h4 className="font-bold text-lg mb-4">After School Program</h4>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li>• Program extends beyond traditional classrooms with dynamic after school hours.</li>
            <li>• Pay-and-Play Format assessing skill development and camaraderie.</li>
            <li>• Intensive tactical and technical training methodologies.</li>
            <li>• Fostering a passion for sports.</li>
          </ul>
        </div>

        {/* AFFILIATE PROGRAM */}
        <div className="bg-[#C45463] text-white rounded-3xl p-6 shadow-md">
          <h4 className="font-bold text-lg mb-4">Affiliate Program</h4>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li>• Sports development by collaborating with existing institutions, academies, and clubs.</li>
            <li>• Utilizes in-house resources, enabling schools to implement specialized training programs.</li>
            <li>• Specialized training sessions & opportunities within educational ecosystems.</li>
            <li>• Fostering holistic student development.</li>
          </ul>
        </div>

        {/* IN SCHOOL PROGRAM */}
        <div className="bg-[#5A86C8] text-white rounded-3xl p-6 shadow-md">
          <h4 className="font-bold text-lg mb-4">In School Program</h4>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li>• The thrill of sports into the daily routine blended with academics.</li>
            <li>• Program curriculum operates during school hours, particularly during PE sessions.</li>
            <li>• Structured play and physical fitness training two to three times a week within the school.</li>
            <li>• Fostering values of discipline and teamwork.</li>
          </ul>
        </div>

      </div>

    </div>
  );
}
