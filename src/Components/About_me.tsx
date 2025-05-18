// About_me.tsx
import { motion } from "framer-motion";

const About_me = () => {
  return (
    <motion.div
      className="transition-all w-3/4  m-auto mb-100 anim_block  lg:bg-none flex-col bg-[url('https://raw.githubusercontent.com/Juan100205/rianodev/main/src/assets/Pics/About_me.jpeg')] bg-cover bg-center rounded-4xl lg:hover:scale-100 hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className=" transition-all hover:cursor-pointer lg:opacity-100 lg:hover:opacity-100 bg-black lg:bg-transparent   rounded-4xl opacity-50 hover:opacity-70 ">
        <div className="p-15 lg:p-0">
      <h1 className="text-2xl font-bold ">&lt;/About me&gt;</h1>
      <div className="md:flex">
        <div className="lg:w-4/7">
          <div className="lg:pt-10 lg:text-gray-500 md:text-gray-200 text-sm lg:text-xl md:text-md mt-10 items-center">
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
              className="mt-2 md:mt-4 lg:mt-10"
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
        <div className="hidden w-3/7 lg:flex items-center justify-center">
          <motion.img
              className="w-4/5 m-auto  rounded-4xl "
              src="https://raw.githubusercontent.com/Juan100205/rianodev/main/src/assets/Pics/About_me.jpeg"
              alt="About me"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
      </div>
      </div>
    </motion.div>
  );
};

export default About_me;
