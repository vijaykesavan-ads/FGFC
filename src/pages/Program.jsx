import React from 'react'
import Programhero from '../components/Programhero'
import Pillers from '../components/Pillers'
import Facilities from '../components/Facilities'
import Session from '../components/Session'
import Testimonial from '../components/Testimonial'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal';
import Parallax from '../components/Parallax';

export default function Program() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <Parallax offset={["0%", "-20%"]}>
        <Programhero />
      </Parallax>
      <Reveal delay={0.2}>
        <section className="container mx-auto px-4 py-10 sm:py-16 mt-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-text-primary text-[#10487B] dark:text-text-light text-3xl font-bold leading-tight tracking-tight mb-4">The Ultimate Football Development Experience</h2>
            <p className="text-text-secondary dark:text-slate-400 text-base font-normal leading-relaxed">Our residential program is designed to provide a holistic development environment for aspiring young footballers. We combine elite-level coaching with a strong focus on academics and personal growth, creating the perfect pathway to a professional career.</p>
          </div>
        </section>
      </Reveal>
      <Reveal delay={0.2}>
        <Pillers />
      </Reveal>

      <Reveal delay={0.2}>
        <Facilities />
      </Reveal>

      <Reveal delay={0.3}>
        <Session />
      </Reveal>

      <Reveal delay={0.4}>
        <Testimonial />
      </Reveal>

      <Reveal delay={0.5}>
        <CTASection />
      </Reveal>

    </div>
  );
}
