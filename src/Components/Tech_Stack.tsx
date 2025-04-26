
import Logo_A3D from "./Logo_A3D";
import Logo_Angular from "./Logo_Angular";
import Logo_Astro from "./Logo_Astro";
import Logo_Blender from "./Logo_Blender";
import Logo_Css from "./Logo_Css";
import Logo_DVR from "./Logo_DVR";
import Logo_Figma from "./Logo_Figma";
import Logo_Html from "./Logo_Html";
import Logo_Java from "./Logo_Java";
import Logo_JS from "./Logo_JS";
import Logo_Maya from "./Logo_Maya";
import Logo_Py from "./Logo_Py";
import Logo_React from "./Logo_react";
import Logo_Tailwind from "./Logo_Tailwind";
import Logo_TS from "./Logo_TS";
import Logo_UE from "./Logo_UE";
import Logo_Unity from "./Logo_Unity";
import Tech_card from "./Techn_Card";
function Tech_stack () {
    return (
        <div className="w-2/3 mx-auto mt-30 font-black">
            <div className="text-center text-4xl">
            &lt;/Tech Stack&gt; 
            </div>
            <div className="flex mx-auto mt-30 overflow-x-auto transition scrollbar-transicion">
                <Tech_card name="Figma" icon={<Logo_Figma/>}/>
                <Tech_card name="React" icon={<Logo_React/>}/>
                <Tech_card name="Tailwind" icon={<Logo_Tailwind/>}/>
                <Tech_card name="TypeScript" icon={<Logo_TS/>}/>
                <Tech_card name="JavaScript" icon={<Logo_JS/>}/>
                <Tech_card name="Python" icon={<Logo_Py/>}/>
                <Tech_card name="Java" icon={<Logo_Java/>}/>
                <Tech_card name="Maya" icon={<Logo_Maya/>}/>
                <Tech_card name="Blender" icon={<Logo_Blender/>}/>
                <Tech_card name="Unreal Engine" icon={<Logo_UE/>}/>
                <Tech_card name="Unity" icon={<Logo_Unity/>}/>
                <Tech_card name="Adobe 3D suite" icon={<Logo_A3D/>}/>
                <Tech_card name="Angular" icon={<Logo_Angular/>}/>
                <Tech_card name="Astro" icon={<Logo_Astro/>}/>
                <Tech_card name="Html" icon={<Logo_Html/>}/>
                <Tech_card name="Css" icon={<Logo_Css/>}/>
                <Tech_card name="Davinci Resolve" icon={<Logo_DVR/>}/>
            </div>
        </div>
    );
};

export default Tech_stack;  