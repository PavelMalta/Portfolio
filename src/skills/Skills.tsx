import React from "react";
import s from './Skills.module.css'
import styleContainer from '../../src/common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export function Skills () {
    const description = 'An integrated development environment in JavaScript, ' +
                        'CSS & HTML from JetBrains, developed on the basis of ' +
                        'the IntelliJ IDEA platform. WebStorm provides auto-completion'
    return(
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={"HTML"} description={description}/>
                    <Skill title={"CSS"} description={description}/>
                    <Skill title={"JS"} description={description}/>
                </div>
            </div>
        </div>
    )
}