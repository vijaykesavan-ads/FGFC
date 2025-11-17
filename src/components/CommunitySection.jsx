import React from "react";
import { motion } from "framer-motion";

import G1 from "../assets/G1.jpg";
import G2 from "../assets/G2.jpg";
import G3 from "../assets/G3.jpg";
import G4 from "../assets/G4.jpg";
import G5 from "../assets/G5.jpg";
import G6 from "../assets/G6.jpg";
import G7 from "../assets/G7.jpg";
import G8 from "../assets/G8.jpg";
import { i } from "framer-motion/client";

export default function CommunitySection() {
  // Smooth fade-up animation (same as Philosophy)
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut",
      },
    }),
  };
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div>
      {/* COMMUNITY ACTIVITIES */}
      <section className="mt-20">
        {/* Title Animation */}
        <motion.h1
          className="text-[#111318] dark:text-[#10487B] text-[26px] font-bold tracking-[-0.015em] px-4 pb-3 pt-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          Our Community Activities
        </motion.h1>

        {/* Cards Container with Stagger */}
        <motion.div
          className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 p-4 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
        >
          {[
            { icon: "emoji_events", title: "First Goal Community League", desc: "Competitive league for local talent." },
            { icon: "shield", title: "AIFF Blue Cubs League", desc: "Official league for young players." },
            { icon: "event_repeat", title: "Monthly Small-Sided Games", desc: "Regular games for all age groups." },
            { icon: "woman", title: "Organising Women’s League", desc: "Promoting women's football in the community." },
            { icon: "flag", title: "Tamil Nadu Youth League", desc: "Participation in state-level youth league." },
            { icon: "star", title: "Annual Awards Night", desc: "Recognising our players' achievements." },
            { icon: "model_training", title: "Player & Coach Development", desc: "Focused programs for growth." },
            { icon: "psychology", title: "Life Skill Development", desc: "Training based on life skill development." },
            { icon: "videocam", title: "Video Performance Analysis", desc: "Performance tracking for player improvement." },
            { icon: "person_search", title: "Player Scouting", desc: "Identifying and nurturing new talent." },
            { icon: "groups", title: "Community Workshops", desc: "Free football workshops for beginners." },
            { icon: "volunteer_activism", title: "Volunteer Support Program", desc: "Parents and youth helping club activities." },
            { icon: "local_activity", title: "Festival Football Events", desc: "Special football events during festivals." },
            { icon: "school", title: "School Partnership Program", desc: "Working with schools to develop football." },
            { icon: "sports_soccer", title: "Weekend Football Camps", desc: "Skill training camps every weekend." },
            { icon: "fitness_center", title: "Fitness & Conditioning", desc: "Strength and speed training for players." },
            { icon: "manage_accounts", title: "Parent Engagement Portal", desc: "Regular updates and reports for parents." },
            { icon: "diversity_3", title: "Player Mentorship Program", desc: "Senior players guiding new talents." },
            { icon: "stadium", title: "Mini Stadium Setup", desc: "Dedicated turf field for training & matches." },
            { icon: "grass", title: "Natural Grass Arena", desc: "Professional-quality natural grass pitch." },
            { icon: "security", title: "Safe Play Environment", desc: "Safety-first training sessions for all." },
            { icon: "diversity_1", title: "Inclusive Football Program", desc: "Play for all — no barriers." },
            { icon: "military_tech", title: "Inter-Academy Matches", desc: "Competitive matches with top academies." },
            { icon: "celebration", title: "Season Kickoff Ceremony", desc: "Introducing players & coaches every season." },
            { icon: "sports_kabaddi", title: "Skills Challenge Day", desc: "Fun competitions to boost confidence." },
            // { icon: "airplanemode_active", title: "International Exposure Trips", desc: "Play matches in other states/countries." },
            { icon: "history_edu", title: "Coach Talks & Masterclasses", desc: "Sessions with experienced professionals." },
            { icon: "directions_run", title: "Endurance Training", desc: "Boost stamina & field running ability." },
            { icon: "emoji_people", title: "Behavioural Development", desc: "Building discipline & leadership." },

          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index * 0.05}
              className="flex flex-1 gap-4 rounded border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-background-dark p-4 flex-col hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontSize: 30 }}
              >
                {item.icon}
              </span>

              <div className="flex flex-col gap-1">
                <h3 className="text-[#10487B] text-base font-bold leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#606e8a] dark:text-gray-400 text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="mt-20">
        {/* Title */}
        <motion.h2
          className="text-[#111318] dark:text-[#10487B] text-[26px] font-bold tracking-[-0.015em] px-4 pb-3 pt-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          A Glimpse Into Our Community
        </motion.h2>

        {/* Image Grid with Stagger */}
        <motion.div
          key={i}
          custom={i}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="overflow-hidden rounded-lg p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              [G1, G2],
              [G3, G4],
              [G5, G6],
              [G7, G8],
            ].map((col, i) => (
              <div key={i} className="grid gap-4">
                {col.map((src, j) => (
                  <motion.img
                    key={j}
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-full object-cover rounded-3xl"
                    whileHover={{ scale: 1.1, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  />
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
