import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Qualifications from "../components/Qualifications";
import Skills from "../components/Skills";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";

export default function Home() {
    const router = useRouter();
    const [position, setPosition] = useState(null);
    const handleScroll = () => {
        setPosition(window?.pageYOffset);
    };
    useEffect(() => {
        window?.addEventListener("scroll", handleScroll);
        return () => window?.removeEventListener("scroll", handleScroll);
    });
    return (
        <>
            <Head>
                <title>Abhishek Mishra</title>
                <link rel="icon" href="/logo.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Portfolio" />
            </Head>
            <div className="selection:bg-cyan-300 selection:text-cyan-900 dark:bg-slate-900 font-serif text-slate-900 dark:text-slate-50 text-base divide-y-2 dark:divide-slate-800">
                {position > 350 ? (
                    <div className="group rounded-full">
                        <span className="z-20 animate-[linkDescription_250ms_ease-in-out] hidden lg:group-hover:inline dark:group-hover:opacity-100 text-base -translate-y-9 bg-cyan-900/80 fixed right-7 bottom-20 text-cyan-50 rounded-full p-1 px-2">
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
