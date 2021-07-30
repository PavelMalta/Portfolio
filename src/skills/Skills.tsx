import React from "react";
import s from './Skills.module.css'
import styleContainer from '../../src/common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import htmlImg from "../common/image/skills/HTML.jpg";
import cssImg from "../common/image/skills/1476977488.jpg";
import jsImg from "../common/image/skills/JS.jpg";
import reactImg from "../common/image/skills/maxresdefault.jpg";
import reduxImg from "../common/image/skills/images.png";
import typeScriptImg from "../common/image/skills/Typescript.jpg";

export function Skills () {

    const html = {backgroundImage: `url(${htmlImg})`}
    const css = {backgroundImage: `url(${cssImg})`}
    const js = {backgroundImage: `url(${jsImg})`}
    const react = {backgroundImage: `url(${reactImg})`}
    const redux = {backgroundImage: `url(${reduxImg})`}
    const typeScript = {backgroundImage: `url(${typeScriptImg})`}

    return(
        <div className={s.skillsBlock}>
            <hr className={styleContainer.top_dashed}/>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={"HTML" as const} style={html}/>
                    <Skill title={"CSS" as const} style={css}/>
                    <Skill title={"JS"} style={js}/>
                    <Skill title={"React"} style={react}/>
                    <Skill title={"Redux"} style={redux}/>
                    <Skill title={"TypeScript"} style={typeScript}/>
                </div>
            </div>
            <hr className={styleContainer.bottom_dashed}/>
        </div>
    )
}