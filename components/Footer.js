import React from "react";
import { MdOutlineCopyright } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const classes = {
    section: "p-4 w-auto md:m-auto text-left md:justify-evenly",
    item: "mx-2 md:m-3 relative after:content-[''] after:absolute after:bg-slate-50 dark:after:bg-slate-50 after:h-0.5 after:left-0 after:w-0 after:top-6 after:transition-all after:duration-300 hover:after:w-full",
};
const Footer = () => {
    return (
        <div className="bg-cyan-700 dark:bg-cyan-800 relative text-slate-50">
            <div className="absolute left-[12rem] -top-[5rem] lg:left-96 lg:-top-20">
                <Image src="/problem.png" width="150" height="150" />
            </div>
            <div className="md:flex min-h-[15vh] lg:min-h-[25vh] justify-between font-['Helvetica'] p-4 md:p-0">
                <div className={classes.section + " pl-6"}>
                    <h3 className="text-lg">Abhishek Mishra</h3>
                    <h4 className="text-sm text-slate-300">Software Developer</h4>
                </div>
                <div className={"flex " + classes.section}>
                    <div className={classes.item}>
                        <Link href="/#skills" scroll={false}>
                            <a>Skills</a>
                        </Link>
                    </div>
                    <div className={classes.item}>
                        <Link href="/#qualification" scroll={false}>
                            <a>Qualification</a>
                        </Link>
                    </div>
                    <div className={classes.item}>
                        <Link href="/#projects" scroll={false}>
                            <a>Projects</a>
                        </Link>
                    </div>
                </div>
                <div className={"flex text-2xl " + classes.section}>
                    <div className="mx-3 md:m-3">
                        <a href="https://github.com/mabhi1" target="_blank" rel="noopener noreferrer">
                            <BsGithub className="hover:scale-125 transition duration-200 cursor-pointer" />
                        </a>
                    </div>
                    <div className="mx-3 md:m-3">
                        <a href="https://www.linkedin.com/in/mishraabhishek226/" target="_blank" rel="noopener noreferrer">
                            <BsLinkedin className="hover:scale-125 transition duration-200 cursor-pointer" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex p-3 justify-center bg-cyan-800 dark:bg-cyan-900 text-slate-300">
                Copyright <MdOutlineCopyright className="m-1" /> 2022. All Rights Reserved
            </div>
        </div>
    );
};

export default Footer;
