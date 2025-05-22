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
      setOffset(width < 768 ? 90 : 195);
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
    title: "Consulting",
    description:
      "I specialize in providing strategic consulting to help you optimize processes and effectively achieve your business goals.",
    icon: <Consultoria_icon />,
  },
  {
    title: "Research",
    description:
      "I conduct research on new technologies, emerging trends, and innovative advancements, helping you stay ahead and make decisions based on the latest market developments.",
    icon: <SearchIcon />,
  },
  {
    title: "Game Development",
    description:
      "I'm passionate about creating interactive game experiences and gamified solutions that capture attention and encourage active user engagement.",
    icon: <GameIcon />,
  },
  {
    title: "App Development",
    description:
      "I design and develop customized mobile applications tailored to meet your users’ specific needs and deliver a smooth, engaging experience.",
    icon: <AppIcon />,
  },
  {
    title: "Web Development",
    description:
      "Specialized in creating visually appealing and functional websites focused on user experience and optimized for exceptional performance.",
    icon: <DevIcon />,
  },
  {
    title: "3D Development",
    description:
      "I offer 3D modeling, animation, and texturing services with professional quality and polished finishes.",
    icon: <DIcon />,
  },
  {
    title: "3D Rendering",
    description:
      "I specialize in high-quality 3D rendering, providing realistic visual representations for architecture, product design, and more.",
    icon: <RenderIcon />,
  },
  {
    title: "Web Design",
    description:
      "I design intuitive and visually appealing user interfaces, ensuring a smooth and optimized experience across all platforms.",
    icon: <DesignIcon />,
  },
];

  

    return (
      <div className="w-full mx-auto md:mt-100 anim_block overflow-hidden">
        <h1 className="text-4xl font-black text-center">&lt;/Services&gt;</h1>
        <div>
          <div className="relative w-[300px] h-[300px] md:w-[610px] md:h-[610px] mx-auto my-10 rounded-4xl bg_opacity_img">
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
      <div className="group relative md:translate-y-8 -translate-y-32  md:-translate-x-3 -translate-x-42 text-xs flex flex-col items-center justify-center text-gray-500 fill-gray-500 rounded-xl px-4 py-5 text-center w-[160px] hover:scale-105 transition-transform cursor-pointer">

        {/* Ícono y título visibles siempre */}
        <div
          className="absolute transform origin-center transition-all inset-0 flex flex-col items-center justify-center rotate-20 hover:text-white hover:fill-white"
          style={{
            transform: `rotate(${angle }deg) translate(-${offset}px)   rotate(-${angle+20}deg)`,
          }}
        >
          <h3 className="font-bold text-sm">{servicios[i].icon}</h3>
          <p className="md:flex text-xs hidden">{servicios[i].title}</p>
        </div>

        {/* Descripción oculta por defecto, aparece en hover sobre el ícono/título */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute   text-white px-3 py-2 rounded-md z-50 text-xs w-[160px] text-center ">
          <h1 className="font-bold md:text-sm mb-1">{servicios[i].title}</h1>
          <div className="md:flex hidden">
          {servicios[i].description}
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