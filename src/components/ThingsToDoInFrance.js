import React from "react";
import ReactPlayer from 'react-player'

export default function () {
    return (
        <section className={"w-full h-full flex flex-col  text-center justify-center bg-red-300"}>
            <header>
                <h1 className={"text-4xl"}>Things to do in France</h1>
            </header>
            <main className="center">
                <ReactPlayer url='https://www.youtube.com/watch?v=liO3dAhlX1M' controls/>
            </main>
        </section>
    );
}