import React from "react";
import s from './Skills.module.css'
import styleContainer from '../../src/common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export function Skills () {
    const description = 'An integrated development environment in JavaScript, ' +
                        'CSS & HTML from JetBrains, developed on the basis of ' +
                        'the IntelliJ IDEA platform. WebStorm provides auto-completion'
    return(
        <div className={s.skillsBlock}>
            <hr className={styleContainer.top_dashed}/>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={"HTML"} description={description}/>
                    <Skill title={"CSS"} description={description}/>
                    <Skill title={"JS"} description={description}/>
                </div>
            </div>
            <hr className={styleContainer.bottom_dashed}/>
        </div>
    )
}