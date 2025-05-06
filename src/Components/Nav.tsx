const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 150, // Ajusta este valor si quieres más o menos espacio
        behavior: 'smooth',
      });
    }
  };
  
  const NavLinks = () => {
    return (
      <div className="font-display font-light flex gap-6 text-lg">
        {/* Enlace Home */}
        <a
          className="relative group transition-transform duration-300 ease-in-out hover:scale-105 hover:text-blue-400 cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          &lt;/Home&gt;
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all"></span>
        </a>
  
        {/* Enlace About Me */}
        <a
          className="relative group transition-transform duration-300 ease-in-out hover:scale-105 hover:text-blue-400 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          &lt;/About me&gt;
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all"></span>
        </a>
  
        {/* Enlace Skills */}
        <a
          className="relative group transition-transform duration-300 ease-in-out hover:scale-105 hover:text-blue-400 cursor-pointer"
          onClick={() => scrollToSection('skills')}
        >
          &lt;/Skills&gt;
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all"></span>
        </a>
  
        {/* Enlace Projects */}
        <a
          className="relative group transition-transform duration-300 ease-in-out hover:scale-105 hover:text-blue-400 cursor-pointer"
          onClick={() => scrollToSection('projects')}
        >
          &lt;/Projects&gt;
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all"></span>
        </a>
      </div>
    );
  };
  
  
const Nav = () => {
    return(
        <div className="w-1/2">
            <NavLinks />
        </div>  
    );
};

export default Nav;
