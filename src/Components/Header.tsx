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
  className={`sticky top-8 left-1/2 transform transform-all -translate-x-1/8 z-50 w-4/5 h-1/8 p-5 items-center justify-between rounded-4xl outline-1 outline-gray-800 transition-all duration-300 flex-wrap
   flex
    ${scrolled ? 'opacity-5 scale-90 hover:scale-100 hover:opacity-80'  : 'opacity-100 '}
    bg-gradient-to-r from-blue-800 via-blue-900 to-[#0E1126]`}
>
            <Logo_GitHub_nav />
            <Nav />         
      </header>

  );
};

export default Header;
