import React from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { BiMessageDots } from "react-icons/bi";
import { BsArrowDownCircle, BsDownload } from "react-icons/bs";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="animate-[front_500ms_ease-in-out] flex flex-col-reverse md:flex-row justify-center md:justify-evenly min-h-screen md:min-h-[50vh] lg:min-h-[90vh] items-center"
    >
      <div className="flex w-full md:w-auto">
        <div className="m-5 h-32 hidden md:flex flex-col justify-evenly text-2xl">
          <a href="https://github.com/mabhi1" target="_blank" rel="noopener noreferrer">
            <BsGithub className="hover:text-teal-700 cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/abhi-m-a86925274/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin className="hover:text-teal-700 cursor-pointer" />
          </a>
        </div>
        <div className="text-center md:text-left w-full m-2 lg:m-5">
          <div className="md:text-xl">Hello, My Name is</div>
          <h1 className="text-3xl md:text-5xl antialized font-light pb-2 tracking-wider">Abhishek Mishra</h1>
          <div className="antialized text-slate-700 dark:text-slate-400">
            <div className="text-2xl h-8">
              <Typewriter
                options={{
                  strings: ["Full Stack Engineer", "Software Developer", "Enthusiastic programmer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="w-full flex justify-center md:justify-start">
              <a
                href="#contact"
                className="dark:hover:shadow-[0px_0px_8px_3px_rgb(21,94,117,0.4)] flex dark:bg-cyan-700 bg-cyan-800 text-stone-50 py-3 px-4 m-1 md:m-3 md:ml-0 rounded hover:shadow-cyan-500/50 hover:shadow-md transition duration-200 ease-in-out hover:translate-x-1"
              >
                <BiMessageDots className="m-1" /> Contact Me
              </a>

              <a
                className="dark:hover:shadow-[0px_0px_8px_3px_rgb(21,94,117,0.4)] cursor-pointer flex dark:bg-cyan-700 bg-cyan-800 text-stone-50 py-3 px-4 m-1 md:m-3 md:ml-0 rounded hover:shadow-cyan-500/50 hover:shadow-md transition duration-200 ease-in-out hover:translate-x-1"
                href="/Abhishek_Mishra_Resume.pdf"
                target="_blank"
                download
              >
                <BsDownload className="m-1" /> Download Resume
              </a>
            </div>
            <div className="h-auto w-full flex md:hidden flex-row items-center justify-center text-3xl">
              <a href="https://github.com/mabhi1" target="_blank" rel="noopener noreferrer" className="m-5">
                <BsGithub className="hover:text-teal-700 cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/mishraabhishek226/" target="_blank" rel="noopener noreferrer" className="m-5">
                <BsLinkedin className="hover:text-teal-700 cursor-pointer" />
              </a>
            </div>
          </div>

          <div className="hidden lg:flex m-6 text-lg justify-center md:justify-end group">
            <Link href="#skills">
              <a className="dark:hover:text-slate-400 hover:text-slate-600 underline">Scroll Down</a>
            </Link>
            <BsArrowDownCircle className="dark:group-hover:text-slate-400 group-hover:text-slate-600 animate-bounce m-2" />
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-auto pl-2 md:pl-0 justify-center">
        <div className="md:w-[20rem] md:h-[17rem] lg:w-[30rem] lg:h-[25rem] rounded-full ">
          <Image src="/front.webp" width={570} height={450} priority />
        </div>
      </div>
    </div>
  );
};

export default About;
