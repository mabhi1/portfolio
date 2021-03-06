import React, { useState } from "react";
import { FaGraduationCap, FaBriefcase, FaRegCalendarAlt, FaBookReader } from "react-icons/fa";
import { AiOutlineCaretDown, AiOutlineCaretRight } from "react-icons/ai";
import Image from "next/image";

const classes = {
    heading:
        "group relative flex justify-start items-center p-4 rounded md:rounded-l md:rounded-none m-1 md:m-0 md:pr-24 cursor-pointer w-full transition duration-300",
    section: "overflow-y-auto rounded md:min-h-[35vh] lg:min-h-[45vh] animate-[qualifications_500ms_ease-in-out]",
};
const Qualifications = () => {
    const [selected, setSelected] = useState("edu");
    return (
        <div id="qualification" className="min-h-[100vh] md:min-h-[78vh] lg:min-h-screen pb-20 ">
            <div className="pt-24 md:pt-40 lg:pt-28 text-center mx-5 md:mx-20 lg:mx-40">
                <div className="text-2xl mb-8 md:mb-24">My Qualifications</div>
            </div>
            <div className="font-['Helvetica'] md:flex justify-center w-[85%] md:w-[75%] m-auto mb-20">
                <div className="flex md:block">
                    <button
                        className={
                            classes.heading +
                            (selected === "edu"
                                ? " bg-cyan-700 dark:bg-cyan-900 text-slate-50"
                                : " bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-800")
                        }
                        onClick={() => setSelected("edu")}
                    >
                        <FaGraduationCap className="m-1" />
                        Education
                        <AiOutlineCaretRight
                            className={
                                "m-1 hidden md:block transition-transform duration-200" + (selected === "work" ? " group-hover:translate-x-1" : "")
                            }
                        />
                        <AiOutlineCaretDown className="m-1 md:hidden" />
                    </button>
                    <button
                        id="work"
                        className={
                            classes.heading +
                            (selected === "work"
                                ? " bg-cyan-700 dark:bg-cyan-900 text-slate-50"
                                : " bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-800")
                        }
                        onClick={() => setSelected("work")}
                    >
                        <FaBriefcase className="m-1" />
                        Work
                        <AiOutlineCaretRight
                            className={
                                "m-1 hidden md:block transition-transform duration-200" + (selected === "edu" ? " group-hover:translate-x-1" : "")
                            }
                        />
                        <AiOutlineCaretDown className="m-1 md:hidden" />
                    </button>
                </div>
                <span className="w-full md:w-[1px] bg-cyan-600 mr-10"></span>
                <div className="md:w-[50%] text-sm text-slate-600 dark:text-slate-400">
                    <div id="edu-section" className={classes.section + (selected === "work" ? " hidden" : " block")}>
                        <div>
                            <div className="flex items-center mb-2">
                                <Image src="/aktu.png" height={50} width={50} className="rounded-full" />
                                <div className="m-2">
                                    <div className="text-base text-slate-900 dark:text-slate-50">Bachelor&#39;s in Computer Science</div>
                                    <h1 className="">AKTU, India</h1>
                                </div>
                            </div>
                            <div className="flex mb-2">
                                <FaBookReader className="m-1 mr-3" />{" "}
                                <div className="w-fit">Courses - Data Structures, Algorithms, Web Technology, Computer Networks, DBMS</div>
                            </div>
                            <div className="flex">
                                <FaRegCalendarAlt className="m-1 mr-3" /> 2013 - 2017
                            </div>
                        </div>
                        <span className="w-[100%] min-h-[1px] my-6 bg-slate-300 dark:bg-slate-800 block"></span>
                        <div>
                            <div className="flex items-center mb-2">
                                <Image src="/stevens.gif" height={50} width={50} className="rounded-full" />
                                <div className="m-2">
                                    <div className="text-base text-slate-900 dark:text-slate-50">Master&#39;s in Computer Science</div>
                                    <h1 className="">Stevens Institute of Technology, United States</h1>
                                </div>
                            </div>
                            <div className="flex mb-2">
                                <FaBookReader className="m-1 mr-3" />
                                <div className="w-fit">
                                    Courses - Web Programming (Back-End), Distributed Systems and cloud computing DBMS, Web Programming 2 (Front-End),
                                    Mobile systems and applications, Algorithms
                                </div>
                            </div>
                            <div className="flex">
                                <FaRegCalendarAlt className="m-1 mr-3" /> 2021 - 2022
                            </div>
                        </div>
                    </div>
                    <div id="work-section" className={classes.section + (selected === "edu" ? " hidden" : " block")}>
                        <div>
                            <div className="flex items-center mb-2">
                                <Image src="/compitek.png" height={50} width={50} className="rounded-full bg-slate-50" />
                                <div className="m-2">
                                    <div className="text-base text-slate-900 dark:text-slate-50">Web Developer</div>
                                    <h1 className="">Compitek IT services, India</h1>
                                </div>
                            </div>
                            <div className="flex mb-2">
                                <FaBookReader className="m-1 mr-3" />
                                <div className="w-fit">
                                    <ul>
                                        <li>Designed and developed a full-stack CRM using MERN stack</li>
                                        <li>Translated designs and wireframes into high-quality code</li>
                                        <li>Optimized components for maximum performance across a variety of devices and browsers</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex">
                                <FaRegCalendarAlt className="m-1 mr-3" /> 2019 - 2020
                            </div>
                        </div>
                        <span className="w-[100%] min-h-[1px] my-6 bg-slate-300 dark:bg-slate-800 block"></span>
                        <div>
                            <div className="flex items-center mb-2">
                                <Image src="/pwc.png" height={50} width={50} className="rounded-full bg-slate-50" />
                                <div className="m-2">
                                    <div className="text-base text-slate-900 dark:text-slate-50">Data Analyst</div>
                                    <h1 className="">PwC, India</h1>
                                </div>
                            </div>
                            <div className="flex mb-2">
                                <FaBookReader className="m-1 mr-3" />
                                <div className="w-fit">
                                    <ul>
                                        <li>Analyzed Server load using Informatica PowerCenter tool</li>
                                        <li>Performed testing and debugging using SQL</li>
                                        <li>Enhanced efficiency by building scripts automating manually handled jobs</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex">
                                <FaRegCalendarAlt className="m-1 mr-3" /> 2018 - 2019
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qualifications;
