import React from "react";
import s from "./MyProjects.module.css"
import styleContainer from "../common/styles/Container.module.css";


export function MyProjects () {
return (
    <div className={s.projectsBlock}>
        <div className={`${styleContainer.container} ${s.projectsContainer}`}>
            <h2>My projects</h2>
            <div className={s.projects}>

            </div>
        </div>
    </div>
)
}