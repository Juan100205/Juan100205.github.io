import { motion } from "framer-motion";
import Experience from "./Experience";

function Experiences() {
    return (
        <motion.div
            className="w-2/3 mx-auto md:mt-100 anim_block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <h1 className="text-4xl font-black">
                &lt;/Experience&gt;
            </h1>

            <motion.div
                className="text-md mt-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Experience
                    place="Universidad de La Sabana Living Lab"
                    occ="Software Developer"
                    date="06/2023 - 06/2024"
                    s_skills={
                        <>
                            <ul>
                                <li>Teamwork.</li>
                                <li>Effective time management to meet deadlines.</li>
                                <li>Proposing impactful solutions to complex problems.</li>
                                <li>Self-taught training in new technologies.</li>
                                <li>Continuous research on emerging technologies.</li>
                            </ul>
                            <p>Development of English communication skills for effective research.</p>
                            <p>Ability to work efficiently under pressure in a fast-paced environment.</p>
                        </>
                    }
                />
            </motion.div>

            <motion.div
                className="text-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Experience
                    place="Alcala Comunicaciones"
                    occ="Operations Executive"
                    date="06/2024 - 11/2024"
                    s_skills={
                        <ul>
                            <li>Effective time and task management independently.</li>
                            <li>Identifying business needs and opportunities through consulting.</li>
                            <li>Continuous and self-directed learning of the latest technologies.</li>
                        </ul>
                    }
                />
            </motion.div>

            <motion.div
                className="text-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Experience
                    place="Freelancer"
                    occ=""
                    date="06/2024 - Present"
                    s_skills={
                        <ul>
                            <li>Effective and empathetic human resource management.</li>
                            <li>Using cutting-edge technologies to drive innovation and solve impactful business challenges.</li>
                            <li>Timely project management to ensure on-time delivery.</li>
                            <li>Fair task delegation, leveraging team strengths to maximize performance.</li>
                            <li>Crafting and presenting persuasive and compelling pitches.</li>
                            <li>Training in the latest technologies.</li>
                        </ul>
                    }
                />
            </motion.div>

            <motion.div
                className="text-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Experience
                    place="Universidad de La Sabana Living Lab"
                    occ="Project Manager"
                    date="06/2024 - Present"
                    s_skills={
                        <ul>
                            <li>Effective and empathetic human resource management.</li>
                            <li>Using cutting-edge technologies to drive innovation and solve impactful business challenges.</li>
                            <li>Timely project management to ensure on-time delivery.</li>
                            <li>Fair task delegation, leveraging team strengths to maximize performance.</li>
                            <li>Crafting and presenting persuasive and compelling pitches.</li>
                            <li>Training in the latest technologies.</li>
                        </ul>
                    }
                />
            </motion.div>
        </motion.div>
    );
}

export default Experiences;
