import React from "react";
import GeoInformation from "./GeoInformation";

export default function () {
    return (
        <section className={"flex flex-row w-full h-fit-content bg-red-100 p-10 justify-center"}>
            <GeoInformation
                icon={<i className="fa-solid fa-map fa-10xl"></i>}
                text={"area"}
                info={"105,4 km²"}
            />

            <GeoInformation
                icon={<i className="fa-solid fa-person"></i>}
                text={"Percent of Immigrants in Paris (2006)"}
                info={"45%"}
            />

            <GeoInformation
                icon={<i className="fa-solid fa-skull"></i>}
                text={"Deaths in France (2019)"}
                info={"600 000"}
            />
        </section>
    );
}
