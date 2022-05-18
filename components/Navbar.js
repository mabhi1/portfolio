import React from "react";

const Navbar = () => {
    return (
        <header className="w-full bg-slate-50 text-slate-900 font-serif text-base sticky top-0">
            <ul className="flex justify-center p-2">
                <li className="m-3">About</li>
                <li className="m-3">Skills</li>
                <li className="m-3">Projects</li>
                <li className="m-3">Contact Me</li>
            </ul>
        </header>
    );
};

export default Navbar;
