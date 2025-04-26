import { ReactNode } from "react";

interface Props {
  name: ReactNode;
  icon: ReactNode;
}

function Tech_card({ name,icon }: Props) {
  return(
  <div className="my-5 ml-10 mr-10 text-sm min-w-65 bg-gradient-to-b from-purple-950 via-pruple-950 to-slate-950 outline-gray-500 outline-1 rounded-4xl">
    <div className="text-center mt-5 font-extralight"> 
    {name}
    </div>
    <div className="w-full pb-5">
    {icon}
    </div>
    <div className="mb-10 text-center bg-purple-400 mx-15 py-2 rounded-4xl font-extralight outline-1 outline-gray-500">
        Projects
    </div>
  </div>
  );
};

export default Tech_card;
