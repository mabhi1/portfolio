import React from "react";
import { useRouter } from "next/router";

const project = () => {
    const router = useRouter();
    const { id } = router.query;
    if (id && id !== "asianmart" && id !== "questionnaire") {
        router.replace("/404", window.location.toString());
    } else {
        return <div>{id}</div>;
    }
};

export default project;
