import React, { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

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
    return (
        <header
            className={
                scroll
                    ? "block md:justify-around md:flex w-full bg-slate-50/90 dark:bg-slate-900 text-slate-900 dark:text-slate-50 font-serif text-base sticky top-0 tracking-wide shadow dark:shadow-slate-50 transition duration-300 ease-in-out"
                    : "block md:justify-around md:flex w-full bg-slate-50/90 dark:bg-slate-900 text-slate-900 dark:text-slate-50 font-serif text-base sticky top-0 tracking-wide transition duration-300 ease-in-out"
            }
        >
            <div className="hidden md:block p-2 m-3">Abhishek Mishra</div>
            <ul className="flex justify-end p-2">
                <li className="m-3">
                    <a href="#about">About</a>
                </li>
                <li className="m-3">
                    <a href="#skills">Skills</a>
                </li>
                <li className="m-3">Projects</li>
                <li className="m-3">Contact Me</li>
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
