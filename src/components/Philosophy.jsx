import React from "react";
import { motion } from "framer-motion";
import Vision from "../assets/Vision.jpg";
import Mission from "../assets/Mission.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }),
};

const Philosophy = () => {
  return (
    <div className="flex flex-col gap-8 px-4 py-10 bg-neutral-light dark:bg-neutral-dark rounded-xl mt-30">
      <motion.h2
        className="text-[28px] font-bold leading-tight tracking-[-0.015em] text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4 }} // 👈 removed "once: true"
      >
        Our Philosophy
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* OUR MISSION */}
        <motion.div
          className="flex flex-col items-stretch justify-between gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          viewport={{ amount: 0.3 }} // 👈 triggers every time you scroll in
        >
          <div className="flex flex-col gap-2 flex-[2_2_0px]">
            <p className=" text-[#10487B] text-base font-bold leading-tight text-primary">
              OUR MISSION
            </p>
            <p className="text-sm font-normal leading-normal">
              The mission of First Goal Football Club is to provide a platform for young football
              enthusiasts to develop their skills, gain valuable experience and pursue their
              passion for football. The club aims to create an inclusive environment where players
              from diverse backgrounds can come together, learn, improve their individualistic
              talent and also grow as a team.
            </p>
          </div>
          <motion.div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover"
            variants={fadeUp}
            custom={0.4}
          >
            <img
              src={Mission}
              alt="FGFC Mission"
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>
        </motion.div>

        {/* OUR VISION */}
        <motion.div
          className="flex flex-col items-stretch justify-between gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.4}
          viewport={{ amount: 0.3 }} // 👈 repeats on every scroll
        >
          <div className="flex flex-col gap-2 flex-[2_2_0px]">
            <p className=" text-[#10487B] text-base font-bold leading-tight text-primary">
              OUR VISION
            </p>
            <p className="text-sm font-normal leading-normal">
              Looking ahead, First Goal Football Club aims to expand its reach and continue its
              tradition of excellence in football development. The club plans to enhance its
              facilities, attract more young talent and collaborate with other football
              organisations. FGFC is also exploring opportunities to participate in higher level
              competitions, further raising its profile in the football community.
            </p>
          </div>
          <motion.div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover"
            variants={fadeUp}
            custom={0.6}
          >
            <img
              src={Vision}
              alt="FGFC Vision"
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Philosophy;
