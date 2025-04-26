function Services() {
    return (
      <div className="w-2/3 mx-auto mt-30">
        <h1 className="text-4xl font-black text-center">&lt;/Services&gt;</h1>
        <div>
          <div className="relative w-[900px] h-[900px] mx-auto my-10 bg-[url('/src/assets/Pics/Services.jpeg')] bg-cover bg-center rounded-4xl">
  

            <div
              className="absolute w-5/6 h-5/6 rounded-full z-10"
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
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 z-30"
                  style={{
                    transform: `rotate(${angle}deg) translate(320px) rotate(-${angle}deg)`,
                    transformOrigin: "center",
                  }}
                >
                  <div className="flex flex-col items-center justify-center  text-white rounded-xl px-4 py-2 shadow-lg text-center w-[130px] hover:scale-105 transition-transform cursor-pointer">
                    <h3 className="font-bold text-sm">Servicio {i + 1}</h3>
                    <p className="text-xs">Descripción</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  
  export default Services;