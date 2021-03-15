import React from "react";
import {Nav} from "../nav/Nav";
import s from './Header.module.css'
import styleContainer from "../common/styles/Container.module.css";

export function Header() {
    return (
        <div className={s.header}>
            <div className={s.nav}>
                <Nav/>
            </div>
            <hr className={styleContainer.bottom_dashed}/>
        </div>
    )
}