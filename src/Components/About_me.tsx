const About_me= () => {
    return(
        <div className="w-3/4 m-auto mt-30">
        <h1 className="text-2xl font-bold ">
                    &lt;/About me&gt;
                </h1>
        <div className=" flex ">
            
            <div className="w-4/7">
                
                <div className="text-gray-500 text-xl mt-10">
                <p >
                    I am known for my discipline, creativity, and innovation. I have been involved in a variety of projects for different clients, consistently proposing and leading the development of disruptive solutions using modern technologies.
                </p>
                <p className="mt-10">
                    I specialize in bringing clients' ideas to life by deeply researching the most suitable technologies to solve real-world problems. My work spans across 3D applications, websites, and web apps, always aiming to deliver functional and visually compelling results. I am constantly seeking new challenges that push me to grow both technically and personally.
                </p>
                </div>
                
            </div>
            <div className="w-3/7">
                <img className="w-4/6 m-auto rounded-4xl"
                src="./src/assets/Pics/Services.jpeg"alt="About me"></img>
            </div>
        </div>
        </div>
    );
};

export default About_me;