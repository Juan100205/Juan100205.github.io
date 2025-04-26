import Logo_GitHub from "./Logo_GitHub";
import Project_card from "./Project_card";

function Projects () {
    return(
        <div className="w-2/3 mx-auto">
            <div className="text-3xl font-black mt-30">
                &lt;/Projects&gt;
            </div>
            <div className="mt-20">
            <Project_card
                project="Laboratorios Edificio C"
                description="Aplicación de realidad virtual para la capacitación e inmersión en los laboratorios de ingeniería de la Universidad de La Sabana."
                image={<img src="./src/assets/Pics/edificioc.jpg"alt="Edificio C" className="w-full h-full rounded-r-4xl"/>}
                technologies={<Logo_GitHub/>}
                
            />
            </div>
        </div>
    );
};

export default Projects;