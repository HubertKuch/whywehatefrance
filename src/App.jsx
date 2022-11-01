import React from "react";
import "./style/base.css";
import "./style/output.css";
import Header from "./components/Header";
import GeoInformationsAboutFrance from "./components/GeoInformationsAboutFrance";
import BeautifulThingsInTheFrance from "./components/BeautifulThingsInTheFrance";
import ReasonsContainer from "./components/ReasonsContainer";
import ThingsToDoInFrance from "./components/ThingsToDoInFrance";
import HowToSaveFrance from "./components/HowToSaveFrance";

export default function () {
    return (
        <>
            <Header/>
            <GeoInformationsAboutFrance />
            <BeautifulThingsInTheFrance />
            <ReasonsContainer />
            <ThingsToDoInFrance />
            <HowToSaveFrance />
        </>
    )
}
