// Home.tsx
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="m-auto w-2/3 text-left pt-40 outer_block mb-100 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-gray-500 text-xl md:text-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Hello World; I’m
      </motion.div>

      <motion.div
        className="text-cyan-400 text-3xl md:text-5xl font-black mt-4 md:mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        Juan Jose Riaño
      </motion.div>

      <motion.div
        className="text-white font-light text-3xl md:text-5xl mt-4 md:mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
      >
        a software and mechanical engineer
      </motion.div>

      <motion.div
        className="text-gray-500 mt-4 text-lg md:text-3xl md:mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
        viewport={{ once: true }}
      >
        I create innovative user experiences that blend functionality and creativity.
      </motion.div>
    </motion.div>
  );
};

export default Home;
