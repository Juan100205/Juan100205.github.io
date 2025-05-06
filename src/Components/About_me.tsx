// About_me.tsx
import { motion } from "framer-motion";
import aboutMeImage from '../assets/Pics/About_me.jpeg';

const About_me = () => {
  return (
    <motion.div
      className="w-3/4 m-auto mb-100 anim_block"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h1 className="text-2xl font-bold">&lt;/About me&gt;</h1>
      <div className="flex">
        <div className="w-4/7">
          <div className="text-gray-500 text-xl mt-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              I am known for my discipline, creativity, and innovation. I have
              been involved in a variety of projects for different clients,
              consistently proposing and leading the development of disruptive
              solutions using modern technologies.
            </motion.p>
            <motion.p
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              I specialize in bringing clients' ideas to life by deeply
              researching the most suitable technologies to solve real-world
              problems. My work spans across 3D applications, websites, and web
              apps, always aiming to deliver functional and visually compelling
              results. I am constantly seeking new challenges that push me to
              grow both technically and personally.
            </motion.p>
          </div>
        </div>
        <div className="w-3/7 flex items-center justify-center">
          <motion.img
            className="w-4/6 rounded-4xl"
            src={aboutMeImage}
            alt="About me"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About_me;
