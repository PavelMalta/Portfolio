import React from "react";
import s from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";

export function Footer() {
    return(
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h3 className={s.title}>Pavel Shamashov</h3>
                <div className={s.containerIcon}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                <div>
                    <p className={s.title}>&#169; 2021 Все права защищены</p>
                </div>
            </div>
        </div>
    )
}