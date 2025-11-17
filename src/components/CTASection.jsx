import React, { useState } from "react";
import ContactForm from "./ContactForm"; // Make sure the path is correct

export default function CTASection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="container mx-auto px-4 py-10 sm:py-20">
      <div className="bg-gradient-to-r from-[#10487B] via-[#1E90FF] to-[#10487B] rounded-lg p-10 md:p-16 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
            Ready to Take the Next Step?
          </h2>
          <p className="text-white/90">
            The journey to becoming an elite footballer starts here. Apply now to be
            considered for our next intake and start your path to greatness.
          </p>
          <button
            onClick={() => setIsFormOpen(true)}
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-white text-[#10487B] text-base font-bold tracking-wide hover:bg-slate-200"
          >
            <span className="truncate">Apply to the Program</span>
          </button>
        </div>
      </div>

      {/* Show Contact Form */}
      {isFormOpen && <ContactForm onClose={() => setIsFormOpen(false)} />}
    </section>
  );
}
