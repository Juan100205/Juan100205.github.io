import Logo_ig from "./Logo_instagram";
import Logo_mail from "./Logo_instagram copy";
import Logo_LinkedIn from "./Logo_LinkedIn";
import Logo_wha from "./Logo_whatsapp";

function Footer (){
    return(
        <div className="mt-30 bg-gradient-to-b from-[#0E1126] to-blue-800">
            <div className="text-4xl font-black text-center ">
            Did you like it?
            </div>
            
            <div className="text-xl font-bold text-center rounded-4xl bg-gradient-to-b from-purple-950 to-slate-900 outline-1 outline-gray-500 p-2 mt-10 w-50 mx-auto">
                Contact me
            </div>
            <div className="mx-auto w-3/8 ">

            <div className=" flex mt-10">
                <div className="mx-auto w-15 bg-gradient-to-b from-purple-950 to-slate-900 outline-1 outline-gray-500 rounded-full p-2">
                    <Logo_LinkedIn/>
                </div>
                <div className="mx-auto w-15 bg-gradient-to-b from-purple-950 to-slate-900 outline-1 outline-gray-500 rounded-full p-2">
                    <Logo_mail/>
                </div>

            </div>
            <div className=" flex w-1/2 mx-auto pt-3 pb-20">
                <div className="mx-auto w-15 bg-gradient-to-b from-purple-950 to-slate-900 outline-1 outline-gray-500 rounded-full p-2">
                    <Logo_wha/>
                </div>
                <div className="mx-auto w-15 bg-gradient-to-b from-purple-950 to-slate-900 outline-1 outline-gray-500 rounded-full p-2">
                    <Logo_ig/>
                </div>
            </div>
            </div>
            
        </div>
    );
};
export default Footer;