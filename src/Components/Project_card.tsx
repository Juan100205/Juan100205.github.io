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
        <div className=" flex bg-gradient-to-b from-purple-950 rounded-4xl outline-1 outline-gray-200">
            <div className="w-1/2 p-20 my-auto">
                <div className="text-2xl font-bold ">
                    {project}
                </div>
                <div className="text-md font-light text-gray-500 mt-10">
                    {description}
                </div>
                <div className=" flex mt-10 items-center ">
                    <div className="w-1/5">
                    <Logo_GitHub/>
                    </div>
                    <div className="bg-purple-500 rounded-4xl font-thin px-5 py-2 mx-5 text-center ">
                        Live View
                    </div>
                </div>
            </div>
            <div className="w-1/2">
                <div className="w-full h-full rounded-r-4xl">
                {image}
                </div>
                <div className="hidden w-0 h-0">
                {technologies}
                </div>
            </div>
        </div>
    );
};

export default Project_card;