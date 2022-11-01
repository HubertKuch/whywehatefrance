import React from "react";
import GeoInformation from "./GeoInformation";

export default function () {
    return (
        <section className={"flex flex-row w-full h-fit-content bg-red-100 p-10 justify-center"}>
            <GeoInformation
                icon={<i className="fa-solid fa-map fa-10xl"></i>}
                text={"area"}
                info={"12mi"}
            />

            <GeoInformation
                icon={<i className="fa-solid fa-person"></i>}
                text={"Population (normal)"}
                info={"0"}
            />

            <GeoInformation
                icon={<i className="fa-solid fa-skull"></i>}
                text={"Deaths per s"}
                info={"4000"}
            />
        </section>
    );
}
