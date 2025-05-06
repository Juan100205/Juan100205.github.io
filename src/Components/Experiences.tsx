import { motion } from "framer-motion";
import Experience from "./Experience";

function Experiences() {
    return (
        <motion.div
            className="w-2/3 mx-auto mt-100 anim_block "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <h1 className="text-4xl font-black">
                &lt;/Experience&gt;
            </h1>

            <motion.div
                className="mt-20 text-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Experience
                    place="Universidad de La Sabana Living Lab"
                    occ="Desarrollador de software"
                    date="06/2023 - 06/2024"
                    s_skills={
                        <ul>
                            <li>Trabajo en equipo.</li>
                            <li>Manejo efectivo del tiempo para cumplimiento de tareas.</li>
                            <li>Proposición de soluciones impactantes a problemas complejos.</li>
                            <li>Capacitación autodidacta en nuevas tecnologías.</li>
                            <li>Investigación continua de nuevas tecnologías.</li>
                        </ul>
                    }
                />
            </motion.div>
        </motion.div>
    );
}

export default Experiences;
