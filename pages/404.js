import React from "react";

const error = () => {
    return (
        <div className="text-xl text-slate-900 dark:text-slate-50 min-h-[100vh] md:min-h-[90vh] flex justify-center items-center font-mono bg-slate-50 dark:bg-slate-900">
            <div className="border-r-2 border-slate-900 dark:border-slate-50 p-5 m-5 text-red-600">Error 404</div>
            <div>Page Not Found</div>
        </div>
    );
};

export default error;
