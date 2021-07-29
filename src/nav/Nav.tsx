import React from "react";
import  s from './Nav.module.css'

export function Nav() {
    return (
        <div className={s.nav}>
            <span>ABOUT ME</span>
            <span>SKILLS</span>
            <span>MY PROJECTS</span>
            <span>CONTACT ME</span>
        </div>
    )
}