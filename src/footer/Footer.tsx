import React from "react";
import s from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";

export function Footer() {
    return(
        <div className={s.footerBlock}>
            <hr className={styleContainer.top_dashed}/>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h3 className={s.title}>Pavel Shamashov</h3>
                <div className={s.containerIcon}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                <div>
                    <p className={s.title}>&#169; 2021 All Rights Reserved</p>
                </div>
            </div>
            <hr className={styleContainer.bottom_dashed}/>
        </div>
    )
}