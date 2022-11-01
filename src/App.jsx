import React from "react";
import "./style/base.css";
import "./style/output.css";
import Header from "./components/Header";
import GeoInformationsAboutFrance from "./components/GeoInformationsAboutFrance";

export default function () {
    return (
        <>
            <Header/>
            <GeoInformationsAboutFrance />
        </>
    )
}
