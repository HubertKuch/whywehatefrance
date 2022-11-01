import React from "react";

export default function () {
    return (
        <section className={"w-full h-full flex flex-col  text-center justify-center bg-red-300"}>
            <header>
                <h1 className={"text-4xl"}>The Most Beautiful Places in The France</h1>
            </header>
            <main className="center">
                <img src="https://nypost.com/wp-content/uploads/sites/2/2021/04/paris-trash-hp.jpg?quality=75&strip=all" width={500}/>

                <img src="https://cdnuploads.aa.com.tr/uploads/Contents/2021/09/30/thumbs_b_c_21db5cb1c552f39dcca31dce4c4282e0.jpg?v=234512" width={500}/>
            </main>
        </section>
    );
}