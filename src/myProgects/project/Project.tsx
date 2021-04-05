import React from "react";
import s from "./Project.module.css"


type ProjectPropsType = {
    style: object
    title: string
    description: string
}

export function Project(props: ProjectPropsType) {
    return (
        <div className={s.project}>
            <div style={props.style} className={s.imgContainer}>
                <button>See</button>
            </div>
            <h3 className={s.projectTitle}>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    )
}