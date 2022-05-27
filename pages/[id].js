import React from "react";
import { useRouter } from "next/router";
import Header from "../components/project/Header";

const Project = () => {
    const router = useRouter();
    const { id } = router.query;
    if (id && id !== "asianmart" && id !== "questionnaire") {
        router.replace("/404", window.location.toString());
    } else {
        return (
            <div>
                <Header id={id} />
            </div>
        );
    }
};

export default Project;
