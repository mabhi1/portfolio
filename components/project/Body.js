import React from "react";
import { FcApproval, FcHighPriority, FcServices } from "react-icons/fc";
import Image from "next/image";

const classes = {
    heading: "text-lg mb-1 flex underline decoration-slate-600 decoration-1 underline-offset-2",
    list: "list-disc list-inside",
    section: "my-5",
};
const Body = ({ data }) => {
    console.log(data);
    return (
        <div className="min-h-[160vh] md:min-h-[80vh] lg:min-h-[110vh] px-10 md:px-14 lg:px-24 mt-20 pt-20 lg:flex w-full justify-around tracking-wide leading-relaxed">
            <div className="lg:w-[60%] lg:my-5 lg:mr-14">
                <h1 className={classes.heading}>
                    <FcServices className="m-1" />
                    Key features
                </h1>
                <ul className={classes.list}>
                    {data.keypoints.map((keypoint) => {
                        return <li key={keypoint}>{keypoint}</li>;
                    })}
                </ul>
            </div>
            <div className="lg:w-[40%]">
                <div className={classes.section}>
                    <h1 className={classes.heading}>
                        <FcHighPriority className="m-1" />
                        Problems
                    </h1>
                    <ul className={classes.list}>
                        {data.problems.map((problem) => {
                            return <li key={problem}>{problem}</li>;
                        })}
                    </ul>
                </div>
                <div className={classes.section}>
                    <h1 className={classes.heading}>
                        <FcApproval className="m-1" />
                        Solutions
                    </h1>
                    <ul className={classes.list}>
                        {data.solutions.map((solution) => {
                            return <li key={solution}>{solution}</li>;
                        })}
                    </ul>
                </div>
                <div className="hidden lg:block text-left">
                    <Image src="/solution.png" width={250} height={250} />
                </div>
            </div>
        </div>
    );
};

export default Body;
