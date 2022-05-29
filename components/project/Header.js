import React from "react";
import Image from "next/image";
import { FcAbout, FcPackage, FcViewDetails } from "react-icons/fc";
import { BsGithub, BsEyeFill } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai";

const classes = {
    links: "group flex m-2 bg-cyan-800 dark:bg-cyan-700 p-1 hover:shadow dark:hover:bg-cyan-800 hover:bg-cyan-900 text-slate-50 rounded px-2 border border-teal-700",
    font: "underline decoration-slate-600 decoration-1 underline-offset-2",
};
const Header = ({ data }) => {
    return (
        <div className="w-full lg:flex h-auto pt-16 md:pt-20">
            <div className="flex justify-center lg:w-[55%] m-3 lg:ml-10 rounded transition duration-200">
                <Image
                    src={data.image}
                    alt="Asian Mart"
                    width="1090"
                    height="509"
                    className="rounded lg:hover:scale-[101%] transition duration-200"
                    priority
                />
            </div>
            <div className="lg:w-[45%] m-3 px-6 text-center relative tracking-wide leading-relaxed">
                <h1 className="text-xl mb-5 flex justify-center">
                    <FcAbout className="m-1 animate-bounce" />
                    Description
                </h1>
                <h2 className="mb-1 flex justify-center">
                    <FcPackage className="m-1" />
                    {data.heading}
                </h2>
                <span>{data.description}</span>
                <h2 className="mt-8 mb-1 flex justify-center">
                    <FcViewDetails className="m-1" />
                    Tech-Stack Used
                </h2>
                <div>
                    <span className={classes.font}>Front-end</span> : {data.techstack.frontend.join(", ")}
                </div>
                <div>
                    <span className={classes.font}>Back-end</span> : {data.techstack.backend.join(", ")}
                </div>
                <div>
                    <span className={classes.font}>Database</span> : {data.techstack.database.join(", ")}
                </div>
                <div className="flex justify-evenly w-[40%] m-auto mt-8">
                    <a href={data.links.code} className={classes.links} target="_blank" rel="noopener noreferrer">
                        <BsGithub className="my-1 mr-1" />
                        <span>Code</span>
                        <AiFillCaretRight className="m-1 mr-0 group-hover:translate-x-1 transition duration-300" />
                    </a>
                    <a href={data.links.demo} className={classes.links} target="_blank" rel="noopener noreferrer">
                        <BsEyeFill className="my-1 mr-1" />
                        <span>Demo</span>
                        <AiFillCaretRight className="m-1 mr-0 group-hover:translate-x-1 transition duration-300" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
