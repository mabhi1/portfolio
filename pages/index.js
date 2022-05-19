import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
    return (
        <>
            <Head>
                <title>Abhishek Mishra</title>
                <link rel="icon" href="/logo.png" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="dark:bg-slate-900 font-serif text-slate-900 dark:text-slate-50 text-base">
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </>
    );
}
