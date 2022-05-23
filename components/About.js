import React from "react";
import Typewriter from "typewriter-effect";
import { BiMessageDots } from "react-icons/bi";
import { BsArrowDownCircle, BsDownload } from "react-icons/bs";

const About = () => {
    return (
        <div
            id="about"
            className="pt-20 md:pt-0 flex flex-col-reverse md:flex-row justify-evenly min-h-[50vh] md:min-h-[50vh] lg:min-h-[90vh] items-center"
        >
            <div className="text-center md:text-left m-5">
                <div className="md:text-xl">Hello, My Name is</div>
                <h1 className="text-3xl md:text-5xl antialized font-light pb-2 tracking-wider">Abhishek Mishra</h1>
                <div className="antialized text-slate-700 dark:text-slate-400">
                    <div className="text-2xl underline decoration-sky-500/30">
                        <Typewriter
                            options={{
                                strings: ["Software Engineer", "Enthusiast programmer", "Full Stack Developer"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <button className="flex bg-teal-700 text-stone-50 py-3 px-4 mr-3 my-3 rounded hover:shadow-teal-500/50 hover:shadow-md transition-shadow duration-200 ease-in-out">
                            <BiMessageDots className="m-1" /> Contact Me
                        </button>
                        <a
                            className="cursor-pointer flex bg-teal-700 text-stone-50 py-3 px-4 mr-3 my-3 rounded hover:shadow-teal-500/50 hover:shadow-md transition-shadow duration-200 ease-in-out"
                            href="/Abhishek_Mishra_Resume.pdf"
                            target="_blank"
                            download
                        >
                            <BsDownload className="m-1" /> Download Resume
                        </a>
                    </div>
                </div>
                <div className="flex m-6 text-lg ml-24">
                    Scroll Down
                    <BsArrowDownCircle className="animate-bounce m-2" />
                </div>
            </div>
            <div className="w-52 h-52 rounded-full bg-teal-500"></div>
        </div>
    );
};

export default About;
