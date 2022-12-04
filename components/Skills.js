import React from "react";
import { BsBraces, BsCodeSquare, BsCloud, BsHddNetwork } from "react-icons/bs";

const classes = {
    container: "block w-[100%] mb-10",
    header: "relative bg-slate-100 shadow shadow-[0px,5px,45px,rgba(255,255,255,0.1)] dark:shadow dark:shadow-slate-100/50 flex justify-between w-full dark:bg-slate-700 rounded p-5 z-10",
    body: "flex flex-wrap pt-5 justify-start rounded text-left border-0",
    image: "w-10 hidden lg:block scale-100 hover:scale-110 transition duration-300",
    item: "flex md:m-1 md:mb-3",
};
const Skills = () => {
    return (
        <div id="skills">
            <div className="min-h-[110vh] md:min-h-[75vh] lg:min-h-[110vh] pt-24 md:pt-40 lg:pt-28 text-center mx-5 md:mx-20 lg:mx-40">
                <div className="text-2xl mb-8 md:mb-24">My Technical Skills</div>
                <div className="md:flex flex-row w-full mb-12">
                    <div className="flex items-center md:mr-8 lg:mr-6 md:w-1/2 flex-wrap flex-col">
                        <div className={classes.container}>
                            <div className={classes.header}>
                                <div className="flex">
                                    <BsCodeSquare className="m-1 mr-3 " />
                                    Languages
                                </div>
                            </div>
                            <div className={classes.body} id="programming">
                                <div className={classes.item}>
                                    <img src="/java.png" alt="Python" className={classes.image} />
                                    <div className="m-2">Java</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/php.png" alt="Python" className={classes.image} />
                                    <div className="m-2">PHP</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/python.png" alt="Python" className={classes.image} />
                                    <div className="m-2">Python</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/javascript.png" alt="Javascript" className={classes.image} />
                                    <div className="m-2">Javascript</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/typescript.png" alt="Typescript" className={classes.image} />
                                    <div className="m-2">Typescript</div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.container}>
                            <div className={classes.header}>
                                <div className="flex">
                                    <BsHddNetwork className="m-1 mr-3" />
                                    Back End
                                </div>
                            </div>
                            <div className={classes.body} id="back">
                                <div className={classes.item}>
                                    <img src="/node.png" alt="Node.js" className={classes.image} />
                                    <div className="m-2">Node.js</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/express.png" alt="Express" className={classes.image} />
                                    <div className="m-2">Express.js</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/graphql.png" alt="GraphQL" className={classes.image} />
                                    <div className="m-2">GraphQL</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/github.png" alt="GitHub" className={classes.image} />
                                    <div className="m-2">GitHub</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/socketio.png" alt="Socket.io" className={classes.image} />
                                    <div className="m-2">Socket.io</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/django.png" alt="django" className={classes.image} />
                                    <div className="m-2">Django</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center md:w-1/2 flex-wrap flex-col">
                        <div className={classes.container}>
                            <div className={classes.header}>
                                <div className="flex">
                                    <BsCloud className="m-1 mr-3" />
                                    Databases
                                </div>
                            </div>
                            <div className={classes.body} id="databases">
                                <div className={classes.item}>
                                    <img src="/mongo.png" alt="MongoDB" className={classes.image} />
                                    <div className="m-2">MongoDB</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/mysql.png" alt="MySQL" className={classes.image} />
                                    <div className="m-2">MySQL</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/redis.png" alt="Redis" className={classes.image} />
                                    <div className="m-2">Redis</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/postgresql.png" alt="Redis" className={classes.image} />
                                    <div className="m-2">PostgreSQL</div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.container}>
                            <div className={classes.header}>
                                <div className="flex">
                                    <BsBraces className="m-1 mr-3" />
                                    Front End
                                </div>
                            </div>
                            <div className={classes.body} id="front">
                                <div className={classes.item}>
                                    <img src="/html.png" alt="HTML" className={classes.image} />
                                    <div className="m-2">HTML</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/css.png" alt="CSS" className={classes.image} />
                                    <div className="m-2">CSS</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/react.png" alt="React" className={classes.image} />
                                    <div className="m-2">React.js</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/redux.png" alt="Redux" className={classes.image} />
                                    <div className="m-2">Redux</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/next.png" alt="Next.js" className={classes.image} />
                                    <div className="m-2">Next.js</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/firebase.png" alt="Firebase" className={classes.image} />
                                    <div className="m-2">Firebase</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/bootstrap.png" alt="Bootstrap" className={classes.image} />
                                    <div className="m-2">Bootstrap</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/tailwind.png" alt="Tailwind" className={classes.image} />
                                    <div className="m-2">Tailwind</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/vue.png" alt="Vue" className={classes.image} />
                                    <div className="m-2">Vue.js</div>
                                </div>
                                <div className={classes.item}>
                                    <img src="/reactnative.png" alt="Vue" className={classes.image} />
                                    <div className="m-2">React Native</div>
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
