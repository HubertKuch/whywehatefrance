import React from "react";
import ReasonToHateFrance from "./ReasonToHateFrance";

export default function () {
    return (
        <section className={"w-full h-full bg-red-200 p-4"}>
            <header className={"w-full h-1/6"}>
                <h1 className={"text-4xl center"}>
                    Reasons to hate France. 
                </h1>
            </header>

            <main className={"grid ReasonsFrance"}>
                <ReasonToHateFrance header={"French People"}>
                    French People are unpolite, don't have manners and will make fun of you, if you even try to speak their language
                </ReasonToHateFrance>

                <ReasonToHateFrance header={"History"}>
                    France has awful history with many unhuman acts, among others Rwandan genocide, where was estimated, that from 500k to 1 million Rwandans were killed, by butchering them with rifles and machetes. France is highly suspected to have indirectly participated in those massacres.
                </ReasonToHateFrance>
            </main>
        </section>
    )
}