import Experience from "./Experience";

function Experiences (){
    return (
        <div className="w-2/3 mx-auto mt-30">
            <h1 className="text-4xl font-black">
                &lt;/Experience&gt;
            </h1>
            <div className="mt-20 text-md">
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
            </div>
        </div>
    );
};

export default Experiences;