import React from "react";
import Typewriter from "typewriter-effect";
import { BiMessageDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

const About = () => {
    return (
        <div id="about" className="flex flex-col-reverse md:flex-row pt-5 md:pt-20 justify-evenly">
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
                        <button className="flex bg-teal-700 text-stone-50 py-3 px-4 mr-3 my-3 rounded hover:shadow-teal-500/50 hover:shadow-md transition-shadow duration-200 ease-in-out">
                            <BsArrowDownCircle className="m-1" /> Download Resume
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-52 h-52 rounded-full bg-teal-500 m-auto md:m-0"></div>
        </div>
    );
};

export default About;
