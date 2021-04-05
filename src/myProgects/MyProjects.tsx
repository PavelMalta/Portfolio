import React from "react";
import s from "./MyProjects.module.css"
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import socialImg from "../common/image/socialnetwork.jpg"
import counterImg from "../common/image/counter.jpg"
import todolistImg from "../common/image/todolist.jpg"


export function MyProjects () {
    const description = "Todolist is a simple to-do list or to-do list. " +
                        "Write down all your important things in it so as " +
                        "not to forget. The To Do List allows you to effectively" +
                        "organize your work time."
    const socialNetwork = {
        backgroundImage: `url(${socialImg})`
    }
    const counter = {
        backgroundImage: `url(${counterImg})`
    }
    const todolist = {
        backgroundImage: `url(${todolistImg})`
    }
return (
    <div className={s.projectsBlock}>
        <hr className={styleContainer.top_dashed}/>
        <div className={`${styleContainer.container} ${s.projectsContainer}`}>
            <Title title={'My projects'}/>
            <div className={s.projects}>
                <Project style={todolist} title={"TodoList"} description={description}/>
                <Project style={counter} title={"Counter"} description={description}/>
                <Project style={socialNetwork} title={"Social network"} description={description}/>
            </div>
        </div>
        <hr className={styleContainer.bottom_dashed}/>
    </div>
)
}