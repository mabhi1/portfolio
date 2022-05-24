import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Qualifications from "../components/Qualifications";
import Skills from "../components/Skills";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useEffect, useState } from "react";

export default function Home() {
    const [position, setPosition] = useState(null);
    const handleScroll = () => {
        setPosition(window?.pageYOffset);
        console.log(window?.pageYOffset);
    };
    useEffect(() => {
        window?.addEventListener("scroll", handleScroll);
        return () => window?.removeEventListener("scroll", handleScroll);
    });
    return (
        <>
            <Head>
                <title>Abhishek Mishra</title>
                <link rel="icon" href="/logo.png" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="dark:bg-slate-900 font-serif text-slate-900 dark:text-slate-50 text-base divide-y-2">
                {position > 350 ? (
                    <AiOutlineArrowUp
                        className="fixed animate-[scrolltotop_500ms_ease-in-out] bottom-12 right-12 text-5xl rounded-full cursor-pointer p-[10px] shadow-[0px_0px_6px_1px_rgb(15,118,110,0.5)] hover:shadow-[0px_0px_8px_3px_rgb(15,118,110,0.5)] scale-110 bg-teal-700 text-slate-50 transition duration-200"
                        onClick={() => {
                            window?.scrollTo(0, 0);
                        }}
                    />
                ) : null}
                <About />
                <Skills />
                <Qualifications />
                <Projects />
                <Contact />
            </div>
        </>
    );
}
