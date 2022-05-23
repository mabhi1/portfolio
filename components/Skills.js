import React from "react";
import { BsCaretDownSquare, BsCaretUpSquare, BsBraces, BsCodeSquare, BsCloud, BsHddNetwork } from "react-icons/bs";

const classes = {
    container: "block w-full",
    header: "relative flex justify-between w-full bg-slate-100 dark:bg-slate-900 rounded p-5 dark:border-2 dark:border-slate-50 z-10 cursor-pointer",
    body: "flex flex-wrap p-5 justify-between rounded -mt-16 md:-mt-24 lg:-mt-16 opacity-0 transition-all duration-300 text-left border-0",
    image: "w-10 hidden md:block scale-100",
    item: "flex md:m-1",
    typewriter: "tracking-wider text-sm font-sans text-cyan-800",
};
const Skills = () => {
    const ShowBody = (sectionName) => {
        const section = document.getElementById(sectionName);
        if (section.classList.contains("opacity-0")) {
            section.classList.remove("opacity-0");
            section.classList.remove("md:-mt-24");
            section.classList.remove("lg:-mt-16");
            section.classList.remove("-mt-16");
            document.getElementById(sectionName + "-down").classList.add("hidden");
            document.getElementById(sectionName + "-up").classList.remove("hidden");
        } else {
            section.classList.add("opacity-0");
            section.classList.add("md:-mt-24");
            section.classList.add("lg:-mt-16");
            section.classList.add("-mt-16");
            document.getElementById(sectionName + "-down").classList.remove("hidden");
            document.getElementById(sectionName + "-up").classList.add("hidden");
        }
    };
    return (
        <div id="skills">
            <div className="min-h-[72vh] md:min-h-0 lg:min-h-[85vh] pt-24 md:pt-40 lg:pt-28 text-center mx-5 md:mx-20 lg:mx-40">
                <div className="text-2xl mb-8 md:mb-16">My Technical Skills</div>
                <div className="md:flex flex-row w-full">
                    <div className="flex md:mr-8 lg:mr-6 md:w-1/2 flex-wrap flex-col">
                        <div className={classes.container}>
                            <div className={classes.header} onClick={() => ShowBody("programming")}>
                                <div className="flex">
                                    <BsCodeSquare className="m-1 mr-3 " />
                                    Languages
                                </div>

                                <BsCaretDownSquare id="programming-down" className="m-1 text-slate-400" />
                                <BsCaretUpSquare id="programming-up" className="hidden m-1 text-slate-400" />
                            </div>
                            <div className={classes.body} id="programming">
                                <div className={classes.item}>
                                    <img src="/python.png" alt="python" className={classes.image} />
                                    <div className="m-2">Python</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/javascript.png" alt="javascript" className={classes.image} />
                                    <div className="m-2">Javascript</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/typescript.png" alt="javascript" className={classes.image} />
                                    <div className="m-2">Typescript</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/sql.png" alt="javascript" className={classes.image} />
                                    <div className="m-2">SQL</div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.container}>
                            <div className={classes.header} onClick={() => ShowBody("databases")}>
                                <div className="flex">
                                    <BsCloud className="m-1 mr-3" />
                                    Databases
                                </div>

                                <BsCaretDownSquare id="databases-down" className="m-1 text-slate-400" />
                                <BsCaretUpSquare id="databases-up" className="hidden m-1 text-slate-400" />
                            </div>
                            <div className={classes.body} id="databases">
                                <div className={classes.item}>
                                    <img src="/mongo.png" alt="python" className={classes.image} />
                                    <div className="m-2">MongoDB</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/mysql.png" alt="javascript" className={classes.image} />
                                    <div className="m-2">MySQL</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/redis.png" alt="javascript" className={classes.image} />
                                    <div className="m-2">Redis</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:w-1/2 flex-wrap flex-col">
                        <div className={classes.container}>
                            <div className={classes.header} onClick={() => ShowBody("back")}>
                                <div className="flex">
                                    <BsHddNetwork className="m-1 mr-3" />
                                    Back End
                                </div>
                                <BsCaretDownSquare id="back-down" className="m-1 text-slate-400" />
                                <BsCaretUpSquare id="back-up" className="hidden m-1 text-slate-400" />
                            </div>
                            <div className={classes.body} id="back">
                                <div className={classes.item}>
                                    <img src="/node.png" alt="javascript" className={classes.image} />
                                    <div className="m-2">Node.js</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/express.png" alt="javascript" className={classes.image} />
                                    <div className="m-2">Express.js</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/graphql.png" alt="javascript" className={classes.image} />
                                    <div className="m-2">GraphQL</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/github.png" alt="javascript" className={classes.image} />
                                    <div className="m-2">GitHub</div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.container}>
                            <div className={classes.header} onClick={() => ShowBody("front")}>
                                <div className="flex">
                                    <BsBraces className="m-1 mr-3" />
                                    Front End
                                </div>
                                <BsCaretDownSquare id="front-down" className="m-1 text-slate-400" />
                                <BsCaretUpSquare id="front-up" className="hidden m-1 text-slate-400" />
                            </div>
                            <div className={classes.body} id="front">
                                <div className={classes.item}>
                                    <img src="/html.png" alt="javascript" className={classes.image} />
                                    <div className="m-2">HTML</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/css.png" alt="javascript" className={classes.image} />
                                    <div className="m-2">CSS</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/firebase.png" alt="javascript" className={classes.image} />
                                    <div className="m-2">Firebase</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/react.png" alt="javascript" className={classes.image} />
                                    <div className="m-2">React.js</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/redux.png" alt="javascript" className={classes.image} />
                                    <div className="m-2">Redux</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/next.png" alt="javascript" className={classes.image} />
                                    <div className="m-2">Next.js</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/bootstrap.png" alt="javascript" className={classes.image} />
                                    <div className="m-2">Bootstrap</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/tailwind.png" alt="javascript" className={classes.image} />
                                    <div className="m-2">Tailwind</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/vue.png" alt="javascript" className={classes.image} />
                                    <div className="m-2">Vue.js</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
