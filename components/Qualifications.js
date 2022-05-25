import React from "react";
import { FaGraduationCap, FaBriefcase, FaRegCalendarAlt } from "react-icons/fa";

const classes = {
    heading: "flex justify-start items-center rounded p-5 pr-24 mr-5 hover:bg-cyan-50 cursor-pointer bg-cyan-100",
    section: "bg-slate-500 p-10 rounded",
};
const Qualifications = () => {
    return (
        <div id="qualification" className="min-h-[95vh] md:min-h-[98vh] lg:min-h-screen lg:mb-28">
            <div className="pt-24 md:pt-40 lg:pt-28 text-center mx-5 md:mx-20 lg:mx-40">
                <div className="text-2xl mb-8 md:mb-16">My Qualifications</div>
            </div>
            <div className="flex justify-center w-[60rem] m-auto">
                <div>
                    <div id="edu" className={classes.heading}>
                        <FaGraduationCap />
                        Education
                    </div>
                    <div id="work" className={classes.heading}>
                        <FaBriefcase />
                        Work
                    </div>
                </div>
                <span className="w-[1px] bg-slate-300 mr-5"></span>
                <div className="w-full">
                    <div id="edu-section" className={classes.section}>
                        <div>Education</div>
                    </div>
                    <div className={classes.section}>
                        <div>Work</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qualifications;
