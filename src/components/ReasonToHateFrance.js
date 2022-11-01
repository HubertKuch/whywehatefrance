import React from "react";

export default function ({ children, header }) {
    return (
        <div className={""}>
            <header>
                <h2 className={"text-3xl"}>
                    {header}
                </h2>
            </header>
            <article className={"text-xl text-gray-700 ml-2"}>
                {children}
            </article>
        </div>
    );
}
