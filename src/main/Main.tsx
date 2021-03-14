import React from "react";
import s from './Main.module.css'
import styleContainer from '../../src/common/styles/Container.module.css'

export function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.greeting}>
                    <span>Hi There</span>
                    <h1 className={s.name}>I am Pavel Shamashov</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    )
}


