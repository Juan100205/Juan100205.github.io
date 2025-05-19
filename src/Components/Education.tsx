import Edu from "./Edu";

function Education() {
const eduBlocks = [
  {
    place: "Gimnasio Mixto Manuel del Socorro Rodríguez",
    certification: "Diploma de Bachillerato",
    date_init: "2008",
    date_finish: "2021",
  },
  {
    place: "Centro Colombo Americano",
    certification: "Entrenamiento en lengua inglesa",
    date_init: "2013",
    date_finish: "2020",
  },
  {
    place: "Universidad de La Sabana",
    certification: "Doble pregrado de Ingeniería Mecánica e Ingeniería Informática",
    date_init: "2022",
    date_finish: "2027",
  },
  // Certificados
  {
    place: "Coursera (Self‑Paced)",
    certification: "Tailwind CSS",
    date_init: "21 de abril de 2025",
    date_finish: "23 de abril de 2025",
  },
  {
    place: "Tailwind Labs",
    certification: "Tailwind Setup y PostCSS",
    date_init: "21 de abril de 2025",
    date_finish: "23 de abril de 2025",
  },
  {
    place: "Great Learning",
    certification: "React.js",
    date_init: "24 de abril de 2025",
    date_finish: "25 de abril de 2025",
  },
  {
    place: "Codecademy",
    certification: "React.js",
    date_init: "24 de abril de 2025",
    date_finish: "25 de abril de 2025",
  },
  {
    place: "University of Helsinki",
    certification: "Full Stack Open",
    date_init: "28 de abril de 2025",
    date_finish: "2 de mayo de 2025",
  },
  {
    place: "The Odin Project",
    certification: "Foundations + Full Stack JS path",
    date_init: "5 de mayo de 2025",
    date_finish: "7 de mayo de 2025",
  },
  {
    place: "AWS Skill Builder",
    certification: "AWS Skill Builder",
    date_init: "1 de mayo de 2025",
    date_finish: "2 de mayo de 2025",
  },
  {
    place: "Coursera (Self‑Paced)",
    certification: "AI for Everyone",
    date_init: "12 de mayo de 2025",
    date_finish: "12 de mayo de 2025",
  },
  {
    place: "Coursera (Self‑Paced)",
    certification: "Prompt Engineering for Everyone",
    date_init: "13 de mayo de 2025",
    date_finish: "13 de mayo de 2025",
  },
  {
    place: "Coursera (Self‑Paced)",
    certification: "Data Analysis with Python",
    date_init: "14 de mayo de 2025",
    date_finish: "15 de mayo de 2025",
  },
  {
    place: "Microsoft",
    certification: "DEVOPS",
    date_init: "16 de mayo de 2025",
    date_finish: "16 de mayo de 2025",
  },
];


  const linesPerBlock = 10;

  return (
    <div className="md:w-2/3 w-full mx-auto mb-50 anim_block md:mt-100 ">
      <h1 className="text-4xl font-black text-center">&lt;Education&gt;</h1>

      <div className="mt-10 bg-gray-800 rounded-3xl w-full overflow-y-auto md:overflow-x-auto  h-[600px] transition scrollbar-transicionedu">
        {/* Botones tipo ventana con animación de entrada */}
        <div className="relative rounded-full bg-red-600 w-4 h-4 left-8 top-6 button-popup hover:cursor-pointer hover:scale-110"></div>
        <div className="relative rounded-full bg-yellow-300 w-4 h-4 left-15 top-2 button-popup hover:cursor-pointer hover:scale-110"></div>
        <div className="relative rounded-full bg-green-600 w-4 h-4 left-22 -top-2 button-popup hover:cursor-pointer hover:scale-110"></div>

        <div className="px-10 py-10 flex-warp">
          {eduBlocks.map((edu, index) => (
            <Edu
              key={index}
              place={edu.place}
              certification={edu.certification}
              date_init={edu.date_init}
              date_finish={edu.date_finish}
              initialLine={index * linesPerBlock + 1}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
