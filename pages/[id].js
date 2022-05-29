import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/project/Header";
import Footer from "../components/Footer";
import { AiOutlineArrowUp } from "react-icons/ai";
import Body from "../components/project/Body";
const projects = require("../components/project/projects.json");

const Project = () => {
    const [position, setPosition] = useState(null);
    const handleScroll = () => {
        setPosition(window?.pageYOffset);
    };

    useEffect(() => {
        window?.addEventListener("scroll", handleScroll);
        return () => window?.removeEventListener("scroll", handleScroll);
    });
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        router.beforePopState(({ url, as, options }) => {
            if (url.toString() !== "/[id]") {
                location.replace("/#projects");
                router.reload();
            } else return true;
        });
    });
    if (id && (id == "asianmart" || id == "questionnaire")) {
        return (
            <div className="font-['Helvetica'] text-base text-slate-900 dark:text-slate-50 divide-y-2 dark:divide-slate-800">
                {position > 350 ? (
                    <div className="group">
                        <span className="z-20 animate-[linkDescription_250ms_ease-in-out] hidden lg:group-hover:inline dark:group-hover:opacity-100 text-base -translate-y-9 bg-cyan-900/80 fixed right-7 bottom-20 text-cyan-50 rounded p-1 px-2">
                            Scroll to top
                        </span>
                        <AiOutlineArrowUp
                            className="fixed z-40 hover:-translate-y-1 animate-[scrolltotop_500ms_ease-in-out] bottom-12 right-12 text-5xl rounded-full cursor-pointer p-[10px] scale-110 bg-cyan-600/90 dark:bg-cyan-700 text-slate-50 transition duration-200"
                            onClick={() => {
                                window?.scrollTo(0, 0);
                            }}
                        />
                    </div>
                ) : null}
                <Header data={projects[id].header} />
                <Body data={projects[id].body} />
                <Footer />
            </div>
        );
    } else if (id) {
        router.replace("/404", window?.location.toString());
    }
};

export default Project;
