import { motion } from "framer-motion";
import Logo_GitHub from "./Logo_GitHub";
import Project_card from "./Project_card";

function Projects() {
    return (
        <motion.div
            className="w-2/3 mx-auto anim_block mt-100"
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
                    project="Laboratorios Edificio C"
                    description="Aplicación de realidad virtual para la capacitación e inmersión en los laboratorios de ingeniería de la Universidad de La Sabana."
                    image="./src/assets/Pics/LABC.jpg"
                    technologies={
                        <>
                            <Logo_GitHub />
                            <Logo_GitHub />
                            <Logo_GitHub />
                        </>
                    }
                />
            </motion.div>
        </motion.div>
    );
}

export default Projects;
