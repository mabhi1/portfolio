import React from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { BiMessageDots } from "react-icons/bi";
import { BsArrowDownCircle, BsDownload } from "react-icons/bs";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const About = () => {
    return (
        <div
            id="about"
            className="flex flex-col-reverse md:flex-row justify-center md:justify-evenly min-h-screen md:min-h-[50vh] lg:min-h-[90vh] items-center"
        >
            <div className="flex">
                <div className="m-5 h-32 hidden md:flex flex-col justify-evenly text-2xl">
                    <a href="https://github.com/mabhi1" target="_blank" rel="noopener noreferrer">
                        <BsGithub className="hover:text-teal-700 cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/mishraabhishek226/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className="hover:text-teal-700 cursor-pointer" />
                    </a>
                </div>
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
                            <button className="flex bg-teal-700 text-stone-50 py-3 px-4 mr-3 my-3 rounded hover:shadow-teal-500/50 hover:shadow-md transition duration-200 ease-in-out hover:translate-x-1">
                                <a href="#contact" className="flex">
                                    <BiMessageDots className="m-1" /> Contact Me
                                </a>
                            </button>
                            <a
                                className="cursor-pointer flex bg-teal-700 text-stone-50 py-3 px-4 mr-3 my-3 rounded hover:shadow-teal-500/50 hover:shadow-md transition duration-200 ease-in-out hover:translate-x-1"
                                href="/Abhishek_Mishra_Resume.pdf"
                                target="_blank"
                                download
                            >
                                <BsDownload className="m-1" /> Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="flex m-6 text-lg ml-24">
                        <Link href="#skills">
                            <a className="hover:text-teal-700 underline">Scroll Down</a>
                        </Link>
                        <BsArrowDownCircle className="animate-bounce m-2" />
                    </div>
                </div>
            </div>
            <div className="flex w-full md:w-auto pl-2 md:pl-0">
                <div className="h-52 w-[22%] flex md:hidden flex-col items-center justify-evenly text-2xl">
                    <a href="https://github.com/mabhi1" target="_blank" rel="noopener noreferrer">
                        <BsGithub className="hover:text-teal-700 cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/mishraabhishek226/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className="hover:text-teal-700 cursor-pointer" />
                    </a>
                </div>
                <div className="w-52 h-52 mb-[50px] rounded-full bg-teal-500"></div>
            </div>
        </div>
    );
};

export default About;
