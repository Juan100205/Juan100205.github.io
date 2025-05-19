import { motion } from "framer-motion";
import Experience from "./Experience";

function Experiences() {
    return (
        <motion.div
            className="w-2/3 mx-auto md:mt-100 anim_block "
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
          occ="Desarrollador de software"
          date="06/2023 - 06/2024"
          s_skills={
            <>
              <ul>
                <li>Trabajo en equipo.</li>
                <li>Manejo efectivo del tiempo para cumplimiento de tareas.</li>
                <li>Proposición de soluciones impactantes a problemas complejos.</li>
                <li>Capacitación autodidacta en nuevas tecnologías.</li>
                <li>Investigación continua de nuevas tecnologías.</li>
              </ul>
              <p>Desarrollo de habilidades comunicativas en inglés para realizar investigaciones efectivas.</p>
              <p>Capacidad para trabajar eficientemente bajo presión en un entorno de ritmo rápido.</p>
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
          occ="Ejecutivo de operaciones"
          date="06/2024 - 11/2024"
          s_skills={
            <ul>
              <li>Gestión efectiva del tiempo y tareas de manera independiente.</li>
              <li>Identificación de necesidades y oportunidades empresariales a través de consultoría.</li>
              <li>Aprendizaje continuo y autodirigido de las últimas tecnologías.</li>
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
              <li>Gestión efectiva y empática de recursos humanos.</li>
              <li>Utilización de tecnologías de vanguardia para impulsar la innovación y resolver desafíos empresariales impactantes.</li>
              <li>Gestión oportuna de proyectos para garantizar la entrega a tiempo.</li>
              <li>Delegación equitativa de tareas, aprovechando las fortalezas del equipo para maximizar el rendimiento.</li>
              <li>Elaboración y presentación de pitches persuasivos y convincentes.</li>
              <li>Capacitación en últimas tecnologías.</li>
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
          s_skills={<ul>
  <li>Gestión efectiva y empática de recursos humanos</li>
  <li>Utilización de tecnologías de vanguardia para impulsar la innovación y resolver desafíos empresariales impactantes</li>
  <li>Gestión oportuna de proyectos para garantizar la entrega a tiempo</li>
  <li>Delegación equitativa de tareas, aprovechando las fortalezas del equipo para maximizar el rendimiento</li>
  <li>Elaboración y presentación de pitches persuasivos y convincentes</li>
  <li>Capacitación en últimas tecnologías.</li>
</ul>}
        />
      </motion.div>
        </motion.div>
    );
}

export default Experiences;
