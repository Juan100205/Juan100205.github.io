import { ReactNode } from "react";
import Logo_GitHub from "./Logo_GitHub";


interface Props{
    project:ReactNode;
    description:ReactNode;
    image:ReactNode;
    technologies:ReactNode;
}
    function Project_card ({project,description,image,technologies}:Props){
        
    return(

                <div className="group/button relative rounded-4xl font-extralight outline-1 outline-gray-500  overflow-hidden cursor-pointer transition-transform hover:scale-105 h-100 ">
                {/* Fondo normal */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-950 to-purple-800 transition-opacity duration-500 opacity-100 group-hover/button:opacity-0 rounded-4xl" />
                {/* Fondo al hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-800 to-purple-950 transition-opacity duration-500 opacity-0 group-hover/button:opacity-100 rounded-4xl" />
                {/* Texto */}   
                <div className="relative">
                <div className=" flex bg-gradient-to-b  rounded-4xl transition-al cursor-pointer hover:bg-gradient-to-b ">
                    <div className="w-2/3 p-20 my-auto">
                        <div className="text-2xl font-bold ">
                            {project}
                    </div>
                    <div className="text-md font-light text-gray-500 mt-10 w-110">
                        {description}
                    </div>
                    <div className=" flex mt-10 items-center ">
                        <div className="w-1/5">
                            <Logo_GitHub/>
                        </div>
                    <div className="transition-all bg-purple-700 rounded-4xl font-thin px-5 py-2 mx-5 text-center outline-1 outline-gray-400 cursor-pointer hover:scale-110 hover:bg-purple-950">
                        Live View
                    </div>
                </div>
            </div>
            <div className="transition-all relative hover:w-1/2 w-1/3 ">
            <div
               className="absolute inset-0 bg-cover bg-center"
               style={{ backgroundImage: `url(${image})` }}
             />
                <div className="absolute inset-0 bg-slate-950 opacity-80" />
                <div className="transition-all inset-0 opacity-0 absolute z-10   py-5  text-white hover:opacity-100">
                <div className="flex gap-4 p-20 pt-30">
                    {technologies}
                </div>
                </div>
            </div>
        </div>
                </div>
              </div>
    );
};

export default Project_card;