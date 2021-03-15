import React from "react";
import s from "./Title.module.css"

type TitlePropsTitle = {
    title: string
}

export function Title (props: TitlePropsTitle) {
    return (
        <div>
        <div className={s.title}>
            <h2>{props.title}</h2>
        </div>
            <div className={s.separator}>
                <span>xxx</span>
            </div>
        </div>
    )
}