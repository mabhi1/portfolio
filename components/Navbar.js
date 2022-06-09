import React, { useState, useEffect } from "react";
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import Link from "next/link";
import { CgProfile, CgAwards, CgAlbum, CgFileDocument, CgTrophy } from "react-icons/cg";
import { BiMessageDots } from "react-icons/bi";
import { GoThreeBars } from "react-icons/go";

const classes = {
    li: "m-3 relative w-fit",
    a: "flex items-center after:content-[''] after:absolute after:bg-slate-900 dark:after:bg-slate-50 after:h-0.5 after:left-0 after:w-0 after:top-6 after:transition-all after:duration-300 hover:after:w-full",
};
const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    const [mode, setMode] = useState("");
    const changeScroll = () => {
        if (window.scrollY >= 50) {
            setScroll(true);
            return;
        }
        setScroll(false);
    };
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", changeScroll);
    }
    const hideMenu = () => {
        menu.classList.add("opacity-0");
        menu.classList.add("-mt-[15.5rem]");
    };
    useEffect(() => {
        document.documentElement.className = window?.localStorage.getItem("mode");
        setMode(window?.localStorage.getItem("mode"));
    });
    return (
        <header
            className={
                scroll
                    ? "animate-[heading_1000ms_ease-in-out] z-30 block md:justify-around md:flex md:flex-col md:items-center lg:flex-row w-full bg-slate-50/95 dark:bg-slate-900 text-slate-900 dark:text-slate-50 font-['Helvetica'] text-base fixed md:sticky top-0 tracking-wide shadow dark:shadow-slate-700 transition-shadow duration-300 ease-in-out"
                    : "animate-[heading_1000ms_ease-in-out] z-30 block md:justify-around md:flex md:flex-col md:items-center lg:flex-row w-full bg-slate-50/95 dark:bg-slate-900 text-slate-900 dark:text-slate-50 font-['Helvetica'] text-base fixed md:sticky top-0 tracking-wide transition-shadow duration-300 ease-in-out"
            }
        >
            <div className="relative z-30 text-xl p-5 flex w-full md:w-auto justify-between ">
                Portfolio
                <div className="flex md:hidden">
                    <div>
                        {mode && mode === "dark" ? (
                            <MdLightMode
                                className="w-6 m-1 h-auto cursor-pointer"
                                onClick={() => {
                                    setMode("");
                                    window?.localStorage.setItem("mode", "");
                                }}
                            />
                        ) : (
                            <FaMoon
                                className="w-5 m-1 h-auto cursor-pointer"
                                onClick={() => {
                                    setMode("dark");
                                    window?.localStorage.setItem("mode", "dark");
                                }}
                            />
                        )}
                    </div>
                    <GoThreeBars
                        className="m-1 md:hidden"
                        onClick={() => {
                            const menu = document.getElementById("menu");
                            if (menu.classList.contains("opacity-0")) {
                                menu.classList.remove("opacity-0");
                                menu.classList.remove("-mt-[15.5rem]");
                            } else {
                                menu.classList.add("opacity-0");
                                menu.classList.add("-mt-[15.5rem]");
                            }
                        }}
                    />
                </div>
            </div>
            <ul
                className="opacity-0 w-fit -mt-[15.5rem] md:opacity-100 md:mt-0 md:h-auto md:flex md:flex-row flex-col justify-end p-2 transition-all duration-500"
                id="menu"
            >
                <li className={classes.li} onClick={hideMenu}>
                    <Link href="/">
                        <a className={classes.a}>
                            <CgProfile className="m-1" />
                            About Me
                        </a>
                    </Link>
                </li>
                <li className={classes.li} onClick={hideMenu}>
                    <Link href="/#skills">
                        <a className={classes.a}>
                            <CgAwards className="m-0.5" />
                            Skills
                        </a>
                    </Link>
                </li>
                <li className={classes.li} onClick={hideMenu}>
                    <Link href="/#qualification">
                        <a className={classes.a}>
                            <CgTrophy className="m-0.5" />
                            Qualification
                        </a>
                    </Link>
                </li>
                <li className={classes.li} onClick={hideMenu}>
                    <Link href="/#projects">
                        <a className={classes.a}>
                            <CgAlbum className="m-1" />
                            Projects
                        </a>
                    </Link>
                </li>
                <li className={classes.li} onClick={hideMenu}>
                    <Link href="/#contact">
                        <a className={classes.a}>
                            <BiMessageDots className="m-1" />
                            Contact Me
                        </a>
                    </Link>
                </li>
                <li className={classes.li} onClick={hideMenu}>
                    <Link href="/Abhishek_Mishra_Resume.pdf" target="_blank">
                        <a className={classes.a} target="_blank">
                            <CgFileDocument className="m-1" />
                            Resume
                        </a>
                    </Link>
                </li>
                <li className="m-1 hidden md:block">
                    {mode && mode === "dark" ? (
                        <MdLightMode
                            className="w-8 h-auto cursor-pointer"
                            onClick={() => {
                                setMode("");
                                window?.localStorage.setItem("mode", "");
                            }}
                        />
                    ) : (
                        <FaMoon
                            className="w-7 h-auto cursor-pointer"
                            onClick={() => {
                                setMode("dark");
                                window?.localStorage.setItem("mode", "dark");
                            }}
                        />
                    )}
                </li>
            </ul>
        </header>
    );
};

export default Navbar;
