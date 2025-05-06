import { useState, useEffect } from 'react';
import Logo_GitHub from "./Logo_GitHub.tsx";
import Logo_LinkedIn from "./Logo_LinkedIn.tsx";
import Nav from "./Nav.tsx";

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
    <div className="">
<header
  className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-4/5 rounded-full  outline-1 outline-gray-500 transition-all duration-300
    ${scrolled ? 'opacity-5 scale-90 hover:scale-100 hover:opacity-100'  : 'opacity-100 '}
    bg-gradient-to-r from-blue-800 via-blue-900 to-[#0E1126]`}
>
        <div className="flex items-center justify-between text-white px-6">
          <div className="flex gap-4 w-25 h-25 ml-15">
            <Logo_GitHub />
            <Logo_LinkedIn />
          </div>
          <Nav />
        </div>
      </header>
    </div>
  );
};

export default Header;
