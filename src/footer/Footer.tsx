import React from "react";
import s from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import {faTelegram} from '@fortawesome/free-brands-svg-icons'
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons'

export function Footer() {
    return (
        <div className={s.footerBlock}>
            <hr className={styleContainer.top_dashed}/>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h3 className={s.title}>Pavel Shamashov</h3>
                <div className={s.containerIcon}>
                    <div>
                        <span className={s.iconSpan}><FontAwesomeIcon icon={faLinkedin} size={"3x"}/></span>
                    </div>
                    <div>
                        <span className={s.iconSpan}><FontAwesomeIcon icon={faGithubSquare} size={"3x"}/></span>
                    </div>
                    <div>
                        <span className={s.iconSpan}><FontAwesomeIcon icon={faTelegram} size={"3x"}/></span>
                    </div>
                    <div>
                        <span className={s.iconSpan}><FontAwesomeIcon icon={faInstagramSquare} size={"3x"}/></span>
                    </div>
                </div>
                <div>
                    <p className={s.title}>&#169; 2021 All Rights Reserved</p>
                </div>
            </div>
            <hr className={styleContainer.bottom_dashed}/>
        </div>
    )
}