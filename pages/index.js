import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Qualifications from "../components/Qualifications";
import Skills from "../components/Skills";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

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
                <meta name="description" content="Abhishek's Portfolio" />
            </Head>
            <div className="selection:bg-cyan-300 selection:text-cyan-900 dark:bg-slate-900 font-serif text-slate-900 dark:text-slate-50 text-base divide-y-2 dark:divide-slate-800">
                {position > 350 ? (
                    <AiOutlineArrowUp
                        className="fixed z-40 hover:-translate-y-1 animate-[scrolltotop_500ms_ease-in-out] bottom-12 right-12 text-5xl rounded-full cursor-pointer p-[10px] shadow-[0px_0px_6px_1px_rgb(21,94,117,0.6)] hover:shadow-[0px_0px_8px_3px_rgb(21,94,117,0.6)] scale-110 bg-cyan-600 dark:bg-cyan-700 text-slate-50 transition duration-200"
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
                <Footer />
            </div>
        </>
    );
}
