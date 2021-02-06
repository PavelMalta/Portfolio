import React from "react";
import s from "./Project.module.css"

type ProjectPropsType = {
    title: string
    description: string
}

export function Project(props: ProjectPropsType) {
    return (
        <div className={s.project}>
            <div className={s.photo}><button className={s.buttonSee}>See</button></div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    )
}