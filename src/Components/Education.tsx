import Edu from "./Edu";

function Education() {
  return (
    <div className="w-2/3 mx-auto mt-30">
      <h1 className="text-4xl font-black">
        &lt;Education&gt;
      </h1>

      <div className=" mt-10 bg-gray-800 rounded-4xl w-full">
        {/* Botones de la ventana */}
        <div className="relative rounded-full bg-red-600 w-4 h-4 left-8 top-6"></div>
        <div className="relative rounded-full bg-yellow-300 w-4 h-4 left-15 top-2"></div>
        <div className="relative rounded-full bg-green-600 w-4 h-4 left-22 -top-2"></div>

        <div className="flex px-10 py-10">
          {/* Números de línea */}
          <div className="w-10 text-right mr-5 text-gray-500">
            {/* Puedes ajustar este número según cuantos Edu pongas */}
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Código de educación */}
          <div className="px-10 text-sm text-green-300">
            <Edu
              place="Gimnasio Mixto Manuel del Socorro Rodríguez"
              certification="Diploma de Bachillerato"
              date_init="2008"
              date_finish="2021"
              initialLine={1}
            />
            <Edu
              place="Universidad X"
              certification="Ingeniería Informática"
              date_init="2022"
              date_finish="2026"
              initialLine={11}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
