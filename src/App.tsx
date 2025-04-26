import { useState } from 'react'
import './App.css'
import Header from './Components/Header.tsx'
import Home from './Components/Home.tsx'
import About_me from './Components/About_me.tsx'
import Tech_stack from './Components/Tech_Stack.tsx'
import Projects from './Components/Projecs.tsx'
import Experiences from './Components/Experiences.tsx'
import Services from './Components/Services.tsx'
import Education from './Components/Education.tsx'
import Footer from './Components/Footer.tsx'
function App() {
    return (
      <div>
        <>
        <Header/>
        <Home/>
        <About_me/>
        <Tech_stack/>
        <Projects/>
        <Experiences/>
        <Services/>
        <Education/>
        <Footer/>
        </>
      </div>
  );
};

export default App;
