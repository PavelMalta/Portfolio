import React from "react";
import s from "./Contact.module.css"
import {Title} from "../common/components/title/Title";


export function Contact() {
    return (
        <div className={s.contactsBlock}>
            <div className={s.contactsContainer}>
                <Title title={'Contact'}/>
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
