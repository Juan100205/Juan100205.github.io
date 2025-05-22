import { useState } from "react";
import { Menu, X } from "lucide-react";


const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop-50,
        behavior: 'smooth',
      });
    }
  };
  
  const NavLinks = () => {
    return (
      <>
        {/* Enlace Home */}
        <div
          className="text-sm relative group transition-transform duration-300 ease-in-out hover:scale-105 hover:text-blue-400 cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          &lt;/Home&gt;
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all"></span>
        </div>
  

        <div
          className="text-sm  relative group transition-transform duration-300 ease-in-out hover:scale-105 hover:text-blue-400 cursor-pointer"
          onClick={() => scrollToSection('projects')}
        >
          &lt;/Projects&gt;
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all"></span>
        </div>
        <div
          className="text-sm  relative group transition-transform duration-300 ease-in-out hover:scale-105 hover:text-blue-400 cursor-pointer"
          onClick={() => scrollToSection('experiences')}
        >
          &lt;/Experience&gt;
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all"></span>
        </div>
        <div
          className="text-sm  relative group transition-transform duration-300 ease-in-out hover:scale-105 hover:text-blue-400 cursor-pointer"
          onClick={() => scrollToSection('services')}
        >
          &lt;/Services&gt;
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all"></span>
        </div>
        <div
          className="text-sm  relative group transition-transform duration-300 ease-in-out hover:scale-105 hover:text-blue-400 cursor-pointer"
          onClick={() => scrollToSection('education')}
        >
          &lt;/Education&gt;
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all"></span>
        </div>
      </>
    );
  };
  
  
const Nav = () => {
  const [isOpen,setisOpen]=useState(false);
  const toggleNavbar=()=>{
    setisOpen(!isOpen);

  }
    return(
      <>
        <nav className="w-1/2 md:w-2/3  flex justify-end">
          <div className="hidden w-full justify-between lg:flex font-display font-light  text-lg ">
              <NavLinks />
          </div>
          <div className=" lg:hidden justify-end transition-all fill-white hover:fill-blue-500 ">
            <button onClick={toggleNavbar} className="cursor-pointer w-10">
                {isOpen ? <X/>: <Menu/>}
            </button>
          </div>
        </nav>
        {isOpen && (
          <div className="lg:hidden flex flex-col items-center basis-full w-full mt-10">
            <NavLinks/>
          </div>
        )}
        </>
    );
};

export default Nav;
