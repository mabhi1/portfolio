import React from "react";
import Image from "next/image";
import { MdOutlineSubtitles } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { AiFillCaretRight } from "react-icons/ai";

const classes = {
    cards: "w-[45%] md:w-60 m-2 md:m-8 lg:hover:scale-105 shadow-lg dark:shadow dark:shadow-slate-600 dark:lg:hover:shadow-slate-600 dark:lg:hover:shadow-lg lg:hover:shadow-2xl transition duration-200 rounded-md h-[22rem]",
    header: "p-2 border-b-2 mx-2",
    description: "h-24 md:h-20 m-2 border-b-2",
    image: "rounded-t-md",
    body: "m-1 flex justify-center h-9",
    links: "m-2 mx-3 text-xl hover:text-teal-700",
    footer: "m-0 flex items-center",
    button: "flex m-auto bg-teal-700 p-1 text-slate-50 rounded px-4 pr-2 hover:bg-slate-50 hover:text-teal-700 border border-teal-700",
};

const Projects = () => {
    return (
        <div id="projects" className="md:min-h-[60vh] lg:min-h-[90vh] mb-40">
            <div className="pt-24 md:pt-40 lg:pt-28 text-center mx-5 md:mx-20 lg:mx-40">
                <div className="text-2xl mb-8 md:mb-16">My Projects</div>
            </div>
            <div className="text-slate-700 dark:text-slate-50 font-['Helvetica'] text-center flex w-full px-5 flex-wrap justify-center">
                <div className={classes.cards}>
                    <div>
                        <Image src="/asianmart.png" className={classes.image} width={300} height={140} />
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
                            <BsGithub />
                        </a>
                        <a href="https://animated-meerkat-2d5d3b.netlify.app/" className={classes.links} target="_blank" rel="noopener noreferrer">
                            <FiExternalLink />
                        </a>
                    </div>
                    <div className={classes.footer}>
                        <a href="#" className={classes.button}>
                            Read More
                            <AiFillCaretRight className="m-1 mr-0" />
                        </a>
                    </div>
                </div>
                <div className={classes.cards}>
                    <div>
                        <Image src="/questionnaire.png" className={classes.image} width={300} height={140} />
                    </div>
                    <h1 className={classes.header}>Questionnaire</h1>
                    <h2 className={classes.description}>
                        <MdOutlineSubtitles className="m-auto" />A question and answer portal to collaborate
                    </h2>
                    <div className={classes.body}>
                        <a href="https://github.com/mabhi1/cs-546-Questionnaire-" className={classes.links} target="_blank" rel="noopener noreferrer">
                            <BsGithub />
                        </a>
                        <a href="https://questionnaire-node.herokuapp.com/" className={classes.links} target="_blank" rel="noopener noreferrer">
                            <FiExternalLink />
                        </a>
                    </div>
                    <div className={classes.footer}>
                        <a href="#" className={classes.button}>
                            Read More
                            <AiFillCaretRight className="m-1 mr-0" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
