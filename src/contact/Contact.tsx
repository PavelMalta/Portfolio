import React from "react";
import s from "./Contact.module.css"
import styleContainer from "../common/styles/Container.module.css";




export function Contact() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form action="#" className={s.contacts}>
                    <div className={s.inputContainer}>
                        <input type="text" className={s.input} placeholder={"Name"}/>
                    </div>
                    <div>
                        <input type="text" className={s.input} placeholder={"E-mail"}/>
                    </div>
                    <div className={s.textareaContainer}>
                        <textarea className={s.textarea} placeholder={"Your message"}></textarea>
                    </div>
                </form>
                <button>send</button>
            </div>
        </div>
    )
}
