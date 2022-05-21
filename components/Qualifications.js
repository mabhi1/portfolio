import React from "react";
import { FaGraduationCap, FaBriefcase, FaRegCalendarAlt } from "react-icons/fa";

const classes = {
    heading: "flex justify-end items-center text-base mb-10 mr-2",
    section: "flex flex-col items-end min-h-[50vh] justify-between",
    subsection: "flex flex-col items-end h-[15vh] justify-evenly",
};
const Qualifications = () => {
    return (
        <div id="qualification" className="min-h-screen ">
            <div className="pt-24 md:pt-40 lg:pt-28 text-center mx-5 md:mx-20 lg:mx-40">
                <div className="text-2xl mb-8 md:mb-16">My Qualifications</div>
            </div>
            <div className="font-['Helvetica'] flex justify-center text-slate-600 dark:text-slate-300">
                <div className="p-5 border-r border-slate-600 w-[40%]">
                    <h1 className={classes.heading}>
                        <FaGraduationCap className="m-1 w-5" />
                        Education
                    </h1>
                    <div className={classes.section}>
                        <div className={classes.subsection}>
                            <span className="flex h-3 w-3 mr-[-27px] mb-[-27px]">
                                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-teal-500  dark:bg-teal-50 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-600 dark:bg-teal-100"></span>
                            </span>
                            <h2>Bachelor's in Computer Science</h2>
                            <h3>AKTU, India</h3>
                            <div className="flex">
                                <FaRegCalendarAlt className="m-1" />
                                2013 - 2017
                            </div>
                        </div>
                        <div className={classes.subsection}>
                            <span className="flex h-3 w-3 mr-[-27px] mb-[-27px]">
                                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-teal-500 dark:bg-teal-50 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-600 dark:bg-teal-100"></span>
                            </span>
                            <h2>Master's in Computer Science</h2>
                            <h3>Stevens Institute of Technology, NJ</h3>
                            <div className="flex">
                                <FaRegCalendarAlt className="m-1" />
                                2021 - 2022
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5 border-l border-slate-600 w-[40%]">
                    <h1 className="flex justify-start items-center text-base mb-10">
                        <FaBriefcase className="m-1 w-5" />
                        Work
                    </h1>
                    <div className="flex flex-col items-start min-h-[50vh] justify-around">
                        <div className="flex flex-col items-start h-[15vh] justify-evenly">
                            <span className="flex h-3 w-3 ml-[-27px] mb-[-27px]">
                                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-teal-500 dark:bg-teal-50 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-600 dark:bg-teal-100"></span>
                            </span>
                            <h2>Data Analyst</h2>
                            <h3>PwC, New Delhi, India</h3>
                            <h4>
                                <div className="flex">
                                    <FaRegCalendarAlt className="m-1" />
                                    2018 - 2019
                                </div>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qualifications;
