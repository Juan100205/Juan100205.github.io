import { ReactNode } from "react";

interface Props {
  name: ReactNode;
  icon: ReactNode;
}

function Tech_card({ name, icon }: Props) {
  return (
    <div className="group relative overflow-hidden ml-5 my-5 md:ml-1 mr-23 text-sm min-w-65 rounded-4xl outline-1 outline-gray-500 transition-transform hover:scale-105 cursor-pointer hover:font-bold">
      {/* Fondo original */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-cyan-600 to-cyan-950 transition-opacity duration-500 opacity-100 group-hover:opacity-0" />
      
      {/* Fondo al hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-600 via-cyan-800 to-slate-950 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-between min-h-full p-6">
        <div className="text-center mt-5">
          {name}
        </div>
        <div className="w-full pb-5 p-10">
          {icon}
        </div>

        {/* Botón Projects */}
        <div className="group/button relative m-10 text-center rounded-4xl font-extralight outline-1 outline-gray-500 px-5 py-2 overflow-hidden cursor-pointer transition-transform hover:scale-110">
          {/* Fondo normal */}
          <div className="absolute inset-0 bg-slate-900  transition-opacity duration-500 opacity-100 group-hover/button:opacity-0 rounded-4xl" />
          {/* Fondo al hover */}
          <div className="absolute inset-0 bg-slate-950 transition-opacity duration-500 opacity-0 group-hover/button:opacity-100 rounded-4xl" />
          {/* Texto */}
          <div className="relative z-10">
            Projects
          </div>
        </div>

      </div>
    </div>
  );
}

export default Tech_card;
