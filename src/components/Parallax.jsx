import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ children, offset = ["0%", "50%"] }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], offset);

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
}
