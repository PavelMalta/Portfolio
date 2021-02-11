import React from "react";
import s from "./Contact.module.css"
import styleContainer from "../common/styles/Container.module.css";


export function Contact() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contact</h2>
                <form action="#" className={s.contacts}>
                    <input type="text" className={s.input} placeholder={"Name"}/>
                    <input type="text" className={s.input} placeholder={"E-mail"}/>
                    <textarea className={s.textarea} placeholder={"Your message"}></textarea>
                </form>
                <button>send</button>
            </div>
        </div>
    )
}
