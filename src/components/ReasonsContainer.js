import React from "react";
import ReasonToHateFrance from "./ReasonToHateFrance";

export default function () {
    return (
        <section className={"w-full h-full bg-red-200 p-4"}>
            <header className={"w-full h-1/6"}>
                <h1 className={"text-4xl"}>
                    Reasons to hate France. (Objective)
                </h1>
            </header>

            <main className={"grid grid-cols-3 w-full h-5/6"}>
                <ReasonToHateFrance header={"test"}>
                    Immigrants
                </ReasonToHateFrance>

                <ReasonToHateFrance header={"test"}>
                    Immigrants
                </ReasonToHateFrance>

                <ReasonToHateFrance header={"test"}>
                    Immigrants
                </ReasonToHateFrance>
            </main>
        </section>
    )
}