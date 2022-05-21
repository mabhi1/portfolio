import React, { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Link from "next/link";
import { CgProfile, CgAwards, CgAlbum, CgFileDocument } from "react-icons/cg";
import { BiMessageDots } from "react-icons/bi";
import { GoThreeBars } from "react-icons/go";

const classes = {
    li: "m-3 relative w-fit",
    a: "flex after:content-[''] after:absolute after:bg-slate-900 dark:after:bg-slate-50 after:h-0.5 after:left-0 after:w-0 after:top-6 after:transition-all after:duration-300 hover:after:w-full",
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
        menu.classList.add("-mt-[18rem]");
    };
    return (
        <header
            className={
                scroll
                    ? "z-20 block md:justify-around md:flex md:flex-col md:items-center lg:flex-row w-full bg-slate-50/95 dark:bg-slate-900/90 text-slate-900 dark:text-slate-50 font-['Helvetica'] text-base fixed md:sticky top-0 tracking-wide shadow dark:shadow-slate-50 transition-shadow duration-300 ease-in-out"
                    : "z-20 block md:justify-around md:flex md:flex-col md:items-center lg:flex-row w-full bg-slate-50/95 dark:bg-slate-900/90 text-slate-900 dark:text-slate-50 font-['Helvetica'] text-base fixed md:sticky top-0 tracking-wide transition-shadow duration-300 ease-in-out"
            }
        >
            <div className="text-xl p-5 flex w-full md:w-auto justify-between ">
                Portfolio
                <GoThreeBars
                    className="m-1 md:hidden"
                    onClick={() => {
                        const menu = document.getElementById("menu");
                        if (menu.classList.contains("opacity-0")) {
                            menu.classList.remove("opacity-0");
                            menu.classList.remove("-mt-[18rem]");
                        } else {
                            menu.classList.add("opacity-0");
                            menu.classList.add("-mt-[18rem]");
                        }
                    }}
                />
            </div>
            <ul
                className="opacity-0 w-fit -mt-[18rem] md:opacity-100 md:mt-0 md:h-auto md:flex md:flex-row flex-col justify-end p-2 transition-all duration-500"
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
                    <Link href="#skills">
                        <a className={classes.a}>
                            <CgAwards className="m-0.5" />
                            Skills
                        </a>
                    </Link>
                </li>
                <li className={classes.li} onClick={hideMenu}>
                    <Link href="#qualifications">
                        <a className={classes.a}>
                            <CgAwards className="m-0.5" />
                            Qualifications
                        </a>
                    </Link>
                </li>
                <li className={classes.li} onClick={hideMenu}>
                    <Link href="#projects">
                        <a className={classes.a}>
                            <CgAlbum className="m-1" />
                            Projects
                        </a>
                    </Link>
                </li>
                <li className={classes.li} onClick={hideMenu}>
                    <Link href="#projects">
                        <a className={classes.a}>
                            <BiMessageDots className="m-1" />
                            Contact Me
                        </a>
                    </Link>
                </li>
                <li className={classes.li} onClick={hideMenu}>
                    <Link href="/Resume.pdf">
                        <a href="/Resume.pdf" className={classes.a} download>
                            <CgFileDocument className="m-1" />
                            Resume
                        </a>
                    </Link>
                </li>
                <li className="m-1">
                    {mode && mode === "dark" ? (
                        <MdLightMode
                            className="w-8 h-auto cursor-pointer"
                            onClick={() => {
                                document.documentElement.className = "";
                                setMode("");
                            }}
                        />
                    ) : (
                        <MdDarkMode
                            className="w-8 h-auto cursor-pointer"
                            onClick={() => {
                                document.documentElement.className = "dark";
                                setMode("dark");
                            }}
                        />
                    )}
                </li>
            </ul>
        </header>
    );
};

export default Navbar;
