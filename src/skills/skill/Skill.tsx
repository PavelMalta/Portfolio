import React from "react";
import s from './Skill.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faFileCode } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
type SkillPropsType = {
    title: string
    style: object
}

export function Skill (props: SkillPropsType) {
    let icon
    switch (props.title) {
        case "HTML":
            icon = faHtml5
            break
        case "CSS":
            icon = faCss3
            break
        case "JS":
            icon = faJs
            break
        case "React":
            icon = faReact
            break
        case "Redux":
            icon = faFileCode
            break
        case "TypeScript":
            icon = faCode
            break
        default: icon = faCode
    }
    return (
        <div className={s.skill}>
            <div className={s.icon} style={props.style}></div>
            <span className={s.circle}><FontAwesomeIcon icon={icon}/></span>
            <h3>{props.title}</h3>
        </div>
    )
}