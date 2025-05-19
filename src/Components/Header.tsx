import { useState, useEffect } from 'react';
import Nav from "./Nav.tsx";
import Logo_GitHub_nav from './Logo_GitHub copy.tsx';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Puedes ajustar el valor
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
<header
  className={` sticky  left-1/2 transform transform-all -translate-x-1/6  z-50 w-3/4 h-1/8  lg:px-20 px-10 py-2 items-center justify-between rounded-4xl outline-1 outline-gray-800 transition-all duration-300 flex-wrap
   flex
    ${scrolled ? 'sticky w-full top-0 rounded-none translate-x-0 opacity-100  bg-slate-900 lg:px-60'  : 'opacity-100 top-8 bg-slate-900'}
     `}
>
            <Logo_GitHub_nav />
            <Nav /> 
            

                    
      </header>

  );
};

export default Header;
