import { motion } from "framer-motion";
import Logo_GitHub from "./Logo_GitHub";
import Project_card from "./Project_card";
import Logo_UE from "./Logo_UE";
import Logo_Maya from "./Logo_Maya";
import Logo_A3D from "./Logo_A3D";
import Logo_TS from "./Logo_TS";
import Logo_React from "./Logo_react";
import Logo_Tailwind from "./Logo_Tailwind";
import Logo_Unity from "./Logo_Unity";
import Logo_Blender from "./Logo_Blender";
import Logo_SQL from "./Logo_MySql";

function Projects() {
    return (
        <motion.div
            className="w-2/3 mx-auto anim_block md:mt-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="text-3xl font-black">
                &lt;/Projects&gt;
            </div>

            <motion.div
                className="mt-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Project_card
                    project="Laboratories Building C"
                    description="Virtual reality application for training and immersion in the engineering laboratories at Universidad de La Sabana."
                    image="https://raw.githubusercontent.com/Juan100205/rianodev/main/src/assets/Pics/LABC.jpg"
                    technologies={
                        <>
                            <Logo_UE/>
                            <Logo_Maya/>
                            <Logo_A3D/>
                        </>
                    }
                />
                
            </motion.div>
            <motion.div
                className="mt-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Project_card
                    project="Chat GPT 2.0 Clone"
                    description="A project that replicates the core functionality of ChatGPT, enabling natural language conversations between a user and an AI-based language model. The app features an interactive interface, multi-turn conversation support, and can integrate with language processing APIs such as OpenAI or local models. Ideal for development practice with React, Node.js, and AI API usage."
                    image="https://ih1.redbubble.net/image.4645200823.0367/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
                    technologies={
                        <>
                            <Logo_TS/>
                            <Logo_React/>
                            <Logo_Tailwind/>
                        </>
                    }
                />
            </motion.div>
            <motion.div
                className="mt-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Project_card
                    project="My Portfolio"
                    description="A personal web portfolio to showcase my projects, skills, work experience, and contact information. Designed to highlight my professional profile and serve as an online resume for job opportunities or collaborations."
                    image="https://raw.githubusercontent.com/Juan100205/rianodev/main/src/assets/Pics/About_me.jpeg"
                    technologies={
                        <>
                            <Logo_TS/>
                            <Logo_React/>
                            <Logo_Tailwind/>
                        </>
                    }
                />
            </motion.div>
            <motion.div
                className="mt-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Project_card
                    project="Patology Museum"
                    description="A fully custom-built 3D virtual reality application focused on immersive visualization of anatomical models affected by various pathologies. This virtual museum allows users to explore interactive environments within the metaverse, where each 3D model has been designed, modeled, and textured from scratch. Aimed at educational and medical purposes, it offers a cutting-edge experience for universities, medical students, and healthcare professionals seeking innovative ways to learn about pathological anatomy.

"
                    image="https://i.pinimg.com/736x/f6/2d/a0/f62da0329b47fefaa34bed8f0297575f.jpg"
                    technologies={
                        <>
                            <Logo_UE/>
                            <Logo_Unity/>
                            <Logo_A3D/>
                            <Logo_Blender/>
                        </>
                    }
                />
            </motion.div>
            <motion.div
                className="mt-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Project_card
                    project="Induction to a Scholar software"
                    description="An interactive metaverse-based application designed for onboarding new students or staff within an educational institution. Users can navigate through virtual environments that replicate key campus areas (such as classrooms, labs, offices, etc.), where informative videos are played in each section to introduce services, rules, institutional culture, and academic resources. This immersive experience enhances understanding and engagement during the induction process in a modern and innovative way.

"
                    image="https://i.pinimg.com/736x/d3/33/dc/d333dc29af4aa034915fb3b9a12cde11.jpg"
                    technologies={
                        <>
                            <Logo_Unity/>
                            <Logo_A3D/>
                            <Logo_Blender/>
                        </>
                    }
                />
            </motion.div>
            <motion.div
                className="mt-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Project_card
                    project="Instagram API"
                    description="An interactive metaverse-based application designed for onboarding new students or staff within an educational institution. Users can navigate through virtual environments that replicate key campus areas (such as classrooms, labs, offices, etc.), where informative videos are played in each section to introduce services, rules, institutional culture, and academic resources. This immersive experience enhances understanding and engagement during the induction process in a modern and innovative way.

"
                    image="https://i.pinimg.com/736x/7f/1e/d2/7f1ed2cb9f6ee758e66b4c51055dd8a5.jpg"
                    technologies={
                        <>
                            <Logo_TS/>
                            <Logo_React/>
                            <Logo_Tailwind/>
                            <Logo_SQL/>
                        </>
                    }
                />
            </motion.div>
        </motion.div>
    );
}

export default Projects;
