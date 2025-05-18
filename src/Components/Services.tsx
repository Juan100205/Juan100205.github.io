import DIcon from "./3D_icon";
import AppIcon from "./App_icon";
import Consultoria_icon from "./Consultoria_icon";
import DesignIcon from "./Design_icon";
import DevIcon from "./Dev_icon";
import GameIcon from "./game_icon";
import RenderIcon from "./Render_icon";
import SearchIcon from "./search_icon";
import { useEffect,useState } from "react";

function Services() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Función que actualiza el offset según el ancho de la ventana
    const updateOffset = () => {
      const width = window.innerWidth;
      setOffset(width < 768 ? 130 : 195);
    };

    // Ejecutar una vez al inicio
    updateOffset();

    // Ejecutar cada vez que cambia el tamaño de la ventana
    window.addEventListener('resize', updateOffset);

    // Limpiar al desmontar el componente
    return () => window.removeEventListener('resize', updateOffset);
  }, []);
 
  const servicios = [
    {
      titulo: "Consultoría",
      descripcion: "Me especializo en ofrecer consultoría estratégica para ayudarte a optimizar procesos y alcanzar tus metas de negocio de manera efectiva.",
      icon: <Consultoria_icon />,
    },
    {
      titulo: "Investigación",
      descripcion: "Realizo investigaciones sobre nuevas tecnologías, tendencias emergentes y avances innovadores, ayudándote a estar a la vanguardia y tomar decisiones basadas en lo último del mercado.",
      icon: <SearchIcon />,
    },
    {
      titulo: "Desarrollo de Videojuegos",
      descripcion: "Me apasiona crear experiencias de juegos interactivas y soluciones gamificadas que capturan la atención y fomentan la participación activa de los usuarios.",
      icon: <GameIcon />,
    },
    {
      titulo: "Desarrollo de Aplicaciones",
      descripcion: "Diseño y desarrollo aplicaciones móviles personalizadas para satisfacer las necesidades específicas de tus usuarios y proporcionar una experiencia fluida y atractiva.",
      icon: <AppIcon />,
    },
    {
      titulo: "Desarrollo Web",
      descripcion: "Especializado en crear sitios web visualmente atractivos y funcionales, enfocados en la experiencia del usuario y optimizados para un rendimiento excepcional.",
      icon: <DevIcon />,
    },
    {
      titulo: "Desarrollo 3D",
      descripcion: "Ofrezco servicios de modelado, animacion, texutrizado 3d con calidad y acabados profesionales.",
      icon: <DIcon />,
    },
    {
      titulo: "Renderizado 3D",
      descripcion: "Me especializo en el renderizado 3D de alta calidad, ofreciendo representaciones visuales realistas para arquitectura, diseño de productos y más.",
      icon: <RenderIcon />,
    },
    {
      titulo: "Diseño Web",
      descripcion: "Diseño interfaces de usuario intuitivas y visualmente atractivas, asegurando una experiencia fluida y optimizada en todas las plataformas.",
      icon: <DesignIcon />,
    },
  ];
  

    return (
      <div className="w-2/3 mx-auto mt-100 anim_block ">
        <h1 className="text-4xl font-black text-center">&lt;/Services&gt;</h1>
        <div>
          <div className="relative w-[400px] h-[400px] md:w-[610px] md:h-[610px] mx-auto my-10 rounded-4xl bg_opacity_img">
            <div
              className="absolute w-5/6 h-5/6 rounded-full z-10 "
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: `conic-gradient(
                  #0E112699 0% 11.2%, transparent 11.2% 11.5%,
                  #0E112699 11.5% 23.7%, transparent 23.7% 24%,
                  #0E112699 24% 36.2%, transparent 36.2% 36.5%,
                  #0E112699 36.5% 48.7%, transparent 48.7% 49%,
                  #0E112699 49% 61.2%, transparent 61.2% 61.5%,
                  #0E112699 61.5% 73.7%, transparent 73.7% 74%,
                  #0E112699 74% 86.2%, transparent 86.2% 86.5%,
                  #0E112699 86.5% 99.7%, transparent 99.7% 0%
                )`,
                WebkitMaskImage: "radial-gradient(circle, transparent 0% 27%, black 30% 100%)",
                maskImage: "radial-gradient(circle, transparent 0% 40%, black 40% 100%)",
                WebkitMaskComposite: "destination-out",
              }}
            ></div>
  

            <div
              className="absolute w-5/6 h-5/6 rounded-full z-20 pointer-events-none"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: `conic-gradient(
                  #0E1126 0% 11.2%, transparent 11.2% 11.5%,
                  #0E1126 11.5% 23.7%, transparent 23.7% 24%,
                  #0E1126 24% 36.2%, transparent 36.2% 36.5%,
                  #0E1126 36.5% 48.7%, transparent 48.7% 49%,
                  #0E1126 49% 61.2%, transparent 61.2% 61.5%,
                  #0E1126 61.5% 73.7%, transparent 73.7% 74%,
                  #0E1126 74% 86.2%, transparent 86.2% 86.5%,
                  #0E1126 86.5% 99.7%, transparent 99.7% 0%
                )`,
                WebkitMaskImage: "radial-gradient(circle, transparent 0% 70%, black 70% 100%)",
                maskImage: "radial-gradient(circle, transparent 0% 70%, black 70% 100%)",
                WebkitMaskComposite: "destination-out",
              }}
            ></div>


            {[...Array(8)].map((_, i) => {
  const angle = (360 / 8) * i;
   
  return (
    <>
    <div
      key={i}
      className="absolute left-60 top-65 z-30"
      style={{
        transform: `rotate(${angle}deg) translate(0px) rotate(-${angle}deg)`,
        transformOrigin: "center",
      }}
    >
      {/* Contenedor principal con group */}
      <div className="group relative md:translate-y-5 -translate-y-18  md:-translate-x-4 -translate-x-30 text-xs flex flex-col items-center justify-center text-gray-500 fill-gray-500 rounded-xl px-4 py-5 text-center w-[160px] hover:scale-105 transition-transform cursor-pointer">

        {/* Ícono y título visibles siempre */}
        <div
          className="absolute transform origin-center transition-all inset-0 flex flex-col items-center justify-center rotate-20 hover:text-white hover:fill-white"
          style={{
            transform: `rotate(${angle }deg) translate(-${offset}px)   rotate(-${angle+20}deg)`,
          }}
        >
          <h3 className="font-bold text-sm">{servicios[i].icon}</h3>
          <p className="md:flex text-xs hidden">{servicios[i].titulo}</p>
        </div>

        {/* Descripción oculta por defecto, aparece en hover sobre el ícono/título */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute   text-white px-3 py-2 rounded-md z-50 text-xs w-[160px] text-center ">
          <h1 className="font-bold md:text-sm mb-1">{servicios[i].titulo}</h1>
          <div className="md:flex hidden">
          {servicios[i].descripcion}
          </div>
        </div>
        

      </div>
    </div>

      </>
  );
}
)}

          </div>
        </div>
      </div>
    );
  }

  
  export default Services;