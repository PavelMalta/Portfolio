import React from "react";
import s from './Skill.module.css'

type SkillPropsType = {
    title: string
    style: object
}

export function Skill (props: SkillPropsType) {
    return (
        <div className={s.skill}>
            <div className={s.icon} style={props.style}></div>
            <h3>{props.title}</h3>
        </div>
    )
}