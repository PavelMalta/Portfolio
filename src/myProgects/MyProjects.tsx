import React from "react";
import s from "./MyProjects.module.css"
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";


export function MyProjects () {
    const description = "Todolist is a simple to-do list or to-do list. " +
                        "Write down all your important things in it so as " +
                        "not to forget. The To Do List allows you to effectively" +
                        "organize your work time."
return (
    <div className={s.projectsBlock}>
        <div className={`${styleContainer.container} ${s.projectsContainer}`}>
            <h2 className={s.title}>My projects</h2>
            <div className={s.projects}>
                <Project title={"TodoList"} description={description}/>
                <Project title={"Social network"} description={description}/>
            </div>
        </div>
    </div>
)
}