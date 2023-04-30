import React from "react";
import Image from "next/image";
import { MdOutlineSubtitles } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { AiFillCaretRight } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

const classes = {
  cards:
    "w-48 md:w-60 m-2 md:m-8 lg:hover:scale-105 shadow-lg dark:shadow dark:shadow-slate-600 dark:lg:hover:shadow-slate-600 dark:lg:hover:shadow-lg lg:hover:shadow-lg transition duration-200 rounded-md h-[22rem]",
  header: "p-2 border-b-2 dark:border-slate-800 mx-2",
  description: "h-24 md:h-20 m-2 border-b-2 dark:border-slate-800",
  image: "rounded-t-md",
  body: "m-1 flex justify-center h-9",
  links: "group m-2 mx-3 text-xl hover:text-teal-700",
  linkDescription:
    "animate-[linkDescription_250ms_ease-in-out] inline hidden lg:group-hover:inline dark:group-hover:opacity-100 text-base -translate-y-9 bg-cyan-900 absolute text-cyan-50 rounded p-1 px-2",
  footer: "m-0 flex items-center",
  button:
    "group flex m-auto bg-cyan-800 dark:bg-cyan-700 p-1 hover:shadow dark:hover:bg-cyan-800 hover:bg-cyan-900 text-slate-50 rounded px-4 pr-2 border border-teal-700",
};

const Projects = () => {
  const router = useRouter();
  return (
    <div id="projects" className="md:min-h-[60vh] lg:min-h-[90vh] mb-40">
      <div className="pt-24 md:pt-40 lg:pt-28 text-center mx-5 md:mx-20 lg:mx-40">
        <div className="text-2xl mb-8 md:mb-16">My Projects</div>
      </div>
      <div className="overflow-scroll md:overflow-auto md:w-10/12 m-auto">
        <div className="text-slate-700 dark:text-slate-50 font-['Helvetica'] text-center flex md:flex-wrap w-full px-5 min-w-fit justify-evenly">
          <div className={classes.cards}>
            <div>
              <Image src="/questionnaire.png" className={classes.image} width={300} height={140} priority />
            </div>
            <h1 className={classes.header}>Questionnaire</h1>
            <h2 className={classes.description}>
              <MdOutlineSubtitles className="m-auto" />A question-and-answer based discussion forum
            </h2>
            <div className={classes.body}>
              <a href="https://github.com/mabhi1/cs-546-Questionnaire-" className={classes.links} target="_blank" rel="noopener noreferrer">
                <span className={classes.linkDescription}>Code</span>
                <BsGithub />
              </a>
              <a href="https://questionnaire.onrender.com/" className={classes.links} target="_blank" rel="noopener noreferrer">
                <span className={classes.linkDescription}>Demo</span>
                <FiExternalLink />
              </a>
            </div>
            <div className={classes.footer}>
              <Link href="/questionnaire">
                <a className={classes.button}>
                  Details
                  <AiFillCaretRight className="m-1 mr-0 group-hover:translate-x-1 transition duration-300" />
                </a>
              </Link>
            </div>
          </div>
          <div className={classes.cards}>
            <div>
              <Image src="/asianmart.png" className={classes.image} width={300} height={140} priority />
            </div>
            <h1 className={classes.header}>Asian Mart</h1>
            <h2 className={classes.description}>
              <MdOutlineSubtitles className="m-auto" />
              An e-commerce platform for asian groceries
            </h2>
            <div className={classes.body}>
              <a
                href="https://github.com/mabhi1/Grocery-E-commerce-Web-Application"
                className={classes.links}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={classes.linkDescription}>Code</span>
                <BsGithub />
              </a>
              <a href="https://animated-meerkat-2d5d3b.netlify.app/" className={classes.links} target="_blank" rel="noopener noreferrer">
                <span className={classes.linkDescription}>Demo</span>
                <FiExternalLink />
              </a>
            </div>
            <div className={classes.footer}>
              <Link href="/asianmart">
                <a className={classes.button}>
                  Details
                  <AiFillCaretRight className="m-1 mr-0 group-hover:translate-x-1 transition duration-300" />
                </a>
              </Link>
            </div>
          </div>
          <div className={classes.cards}>
            <div>
              <Image src="/quiz.png" className={classes.image} width={300} height={140} priority />
            </div>
            <h1 className={classes.header}>Quiz</h1>
            <h2 className={classes.description}>
              <MdOutlineSubtitles className="m-auto" />
              An online quiz portal
            </h2>
            <div className={classes.body}>
              <a href="https://github.com/mabhi1/quiz" className={classes.links} target="_blank" rel="noopener noreferrer">
                <span className={classes.linkDescription}>Code</span>
                <BsGithub />
              </a>
              <a href="https://quiz-app18.netlify.app/" className={classes.links} target="_blank" rel="noopener noreferrer">
                <span className={classes.linkDescription}>Demo</span>
                <FiExternalLink />
              </a>
            </div>
            <div className={classes.footer}>
              <Link href="/quiz">
                <a className={classes.button}>
                  Details
                  <AiFillCaretRight className="m-1 mr-0 group-hover:translate-x-1 transition duration-300" />
                </a>
              </Link>
            </div>
          </div>
          <div className={classes.cards}>
            <div>
              <Image src="/safehouse.png" className={classes.image} width={300} height={140} />
            </div>
            <h1 className={classes.header}>Safe House</h1>
            <h2 className={classes.description}>
              <MdOutlineSubtitles className="m-auto" />
              Application for storing passwords, docs, and more
            </h2>
            <div className={classes.body}>
              <a href="https://github.com/mabhi1/safehouse" className={classes.links} target="_blank" rel="noopener noreferrer">
                <span className={classes.linkDescription}>Code</span>
                <BsGithub />
              </a>
              <a href="https://mysafehouse.vercel.app/" className={classes.links} target="_blank" rel="noopener noreferrer">
                <span className={classes.linkDescription}>Demo</span>
                <FiExternalLink />
              </a>
            </div>
            <div className={classes.footer}>
              <Link href="/safehouse">
                <a className={classes.button}>
                  Details
                  <AiFillCaretRight className="m-1 mr-0 group-hover:translate-x-1 transition duration-300" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
