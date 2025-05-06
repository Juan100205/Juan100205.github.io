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
      place: "Universidad X",
      certification: "Ingeniería Informática",
      date_init: "2022",
      date_finish: "2026",
    },
    {
      place: "Universidad X",
      certification: "Ingeniería Informática",
      date_init: "2022",
      date_finish: "2026",
    },
    {
      place: "Universidad X",
      certification: "Ingeniería Informática",
      date_init: "2022",
      date_finish: "2026",
    },
  ];

  const linesPerBlock = 10;

  return (
    <div className="w-2/3 mx-auto mb-50 anim_block mt-100 ">
      <h1 className="text-4xl font-black text-center">&lt;Education&gt;</h1>

      <div className="mt-10 bg-gray-800 rounded-3xl w-full overflow-auto h-[600px] transition scrollbar-transicionedu">
        {/* Botones tipo ventana con animación de entrada */}
        <div className="relative rounded-full bg-red-600 w-4 h-4 left-8 top-6 button-popup"></div>
        <div className="relative rounded-full bg-yellow-300 w-4 h-4 left-15 top-2 button-popup"></div>
        <div className="relative rounded-full bg-green-600 w-4 h-4 left-22 -top-2 button-popup"></div>

        <div className="px-10 py-10">
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
