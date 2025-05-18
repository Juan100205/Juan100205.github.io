import { ReactNode } from "react";
import Logo_GitHub from "./Logo_GitHub";


interface Props{

    project:ReactNode;
    description:ReactNode;
    image:ReactNode;
    technologies:ReactNode;
}
    function Project_card ({project,description,image,technologies}:Props){

return (
    <div className="lg:flex w-15/16 m-auto outline-1 outline-gray-500 rounded-4xl bg-gradient-to-b from-cyan-600 to-slate-950 justify-between ">
        <div className="transition-all lg:w-2/5  lg:hover:w-3/6 hover:cursor-pointer">
        <div className="bg-cover bg-center lg:rounded-none rounded-t-4xl lg:rounded-l-4xl h-full w-full"
            style={{ backgroundImage: `url(${image})` }}>
                <div className="transition-all lg:rounded-none rounded-t-4xl bg-slate-950 opacity-50 hover:opacity-90 h-full w-full lg:rounded-l-4xl">
                    <div className="transition-all opacity-0 hover:opacity-100 w-full h-full flex p-10">
                        {technologies}
                    </div>
                </div>
        </div>
        </div>
        <div className="lg:w-3/5 p-10">
            <div className="text-2xl font-black text-white">
                {project}
            </div>
            <div className="font-light text-sm text-slate-950 mt-10">
                {description}
            </div>
                <div className="flex w-full md:justify-start gap-5 md:gap-10 mt-10 items-center justify-center">
                    <div className="w-25">
                    <Logo_GitHub/>
                    </div>
                    <button className="rounded-full transition-all w-30 md:w-50 h-10 outline-1 outline-gray-500 bg-slate-900 hover:bg-slate-950 hover:cursor-pointer hover:scale-110 md:mt-0 mt-5">
                        Live View
                    </button>
                </div>
        </div>
    </div>    
);
};

export default Project_card;