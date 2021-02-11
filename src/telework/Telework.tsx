import React from "react";
import s from "./Telework.module.css"
import styleContainer from "../common/styles/Container.module.css";

export function Telework() {
    return(
        <div className={s.teleworkBlock}>
            <div className={`${styleContainer.container} ${s.teleworkContainer}`}>
                <h2 className={s.title}>Considering options for remote work</h2>
                <button>Hire me</button>
            </div>
        </div>
    )
}