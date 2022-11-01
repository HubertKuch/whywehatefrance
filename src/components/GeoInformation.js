import React from "react";

export default function ({ text, info, icon }) {
    return (
        <div className={"m-4 ml-10 mr-10 mt-auto bt-auto text-2xl"}>
            <div className={"float-left inline-block p-2"}>
                {icon}
            </div>
            <div className={"float-left"}>
                <div>{text}</div>
                <div className={"text-xl"}>{info}</div>
            </div>
        </div>
    )
}