import React from "react";
import s from "./Project.module.scss"


type ProjectPropsType = {
    style: object
    title: string
    description: string
}

export function Project(props: ProjectPropsType) {
    return (
        <div className={s.project}>
            <div style={props.style} className={s.imgContainer}>
                <button className={s.default}>See</button>
            </div>
            <h3 className={s.projectTitle}>{props.title}</h3>
            <div className={s.description}>
                {props.description}
            </div>
        </div>
    )
}