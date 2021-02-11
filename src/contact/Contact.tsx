import React from "react";
import s from "./Contact.module.css"
import styleContainer from "../common/styles/Container.module.css";




export function Contact() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2>Contacts</h2>
                <form action="#" className={s.contacts}>
                    <div className={s.inputContainer}>
                        <input type="text" className={s.input}/>
                    </div>
                    <div>
                        <input type="text" className={s.input}/>
                    </div>
                    <div className={s.textareaContainer}>
                        <textarea className={s.textarea}></textarea>
                    </div>
                </form>
                <button>send</button>
            </div>
        </div>
    )
}
