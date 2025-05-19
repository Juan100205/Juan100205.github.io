import Logo_ig from "./Logo_instagram";
import Logo_mail from "./Logo_instagram copy";
import Logo_LinkedIn from "./Logo_LinkedIn";
import Logo_wha from "./Logo_whatsapp";

function Footer() {
  return (
    <div className="mt-20 bg-gradient-to-b from-blue-9500 to-cyan-800 py-12">
      <div className="text-4xl font-black text-center text-white animate__animated animate__fadeIn animate__delay-1s">
        Did you like it?
      </div>

      <div className="text-xl font-bold text-center rounded-4xl  outline-1 outline-gray-500 p-2 mt-10 w-50 transition-all cursor-pointer mx-auto bg-slate-900 hover:bg-slate-950 hover:cursor-pointer hover:scale-110 animate__animated animate__fadeIn animate__delay-2s">
        Contact me
      </div>

      <div className="mx-auto w-3/8">
        <div className="flex mt-10 justify-center gap-6">
          <div className="transition-all cursor-pointer  mx-auto w-15 bg-slate-900 hover:bg-slate-950 hover:cursor-pointer hover:scale-110 outline-1 outline-gray-500 rounded-full p-2 animate__animated animate__fadeIn animate__delay-3s">
            <Logo_LinkedIn />
          </div>
          <div className="transition-all cursor-pointer  mx-auto w-15 bg-slate-900 hover:bg-slate-950 hover:cursor-pointer hover:scale-110 outline-1 outline-gray-500 rounded-full p-2 animate__animated animate__fadeIn animate__delay-4s">
            <Logo_mail />
          </div>
        </div>

        <div className="flex justify-center gap-6 w-1/2 mx-auto pt-3 pb-20">
          <div className="transition-all cursor-pointer  mx-auto w-15 bg-slate-900 hover:bg-slate-950 hover:cursor-pointer hover:scale-110 outline-1 outline-gray-500 rounded-full p-2 animate__animated animate__fadeIn animate__delay-5s">
            <Logo_wha />
          </div>
          <div className="transition-all cursor-pointer  mx-auto w-15 bg-slate-900 hover:bg-slate-950 hover:cursor-pointer hover:scale-110 outline-1 outline-gray-500 rounded-full p-2 animate__animated animate__fadeIn animate__delay-6s">
            <Logo_ig />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
