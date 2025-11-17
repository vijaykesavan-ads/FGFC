import { motion } from "framer-motion";
import Train1 from "../assets/Train1.jpg";
import Train2 from "../assets/Train2.jpg";
import Train3 from "../assets/Train3.jpg";
import Train4 from "../assets/Train4.jpg";

const Clublife = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div className="flex flex-col gap-6 px-4 py-10 text-center">
      <h2 className="text-[22px] font-bold leading-tight">Club Life</h2>
      <p className="text-base max-w-2xl mx-auto">
        Explore the vibrant community and exciting moments at First Goal FC.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {[Train1, Train2, Train3, Train4].map((img, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="overflow-hidden rounded-lg"
          >
            <motion.img
              src={img}
              alt={`Gallery ${i + 1}`}
              className="w-full h-full object-cover rounded-3xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Clublife;
