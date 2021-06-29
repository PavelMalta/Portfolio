import React, {useEffect} from "react";
import s from "./Contact.module.css"
import {Title} from "../common/components/title/Title";
import styleContainer from "../common/styles/Container.module.css";
import axios from "axios";


export function Contact() {

    useEffect(() => {
        axios.post('https://smtp-nodejs-ser.herokuapp.com/sendMessage',{})
            .then((res) => {
                console.log('ok')
            })
    },[])


    return (
        <div className={s.contactsBlock}>
            <hr className={styleContainer.top_dashed}/>
            <div className={s.contactsContainer}>
                <Title title={'Contact'}/>
                <form action="#" className={s.contacts}>
                    <input type="text" className={s.input} placeholder={"Name"}/>
                    <input type="text" className={s.input} placeholder={"E-mail"}/>
                    <textarea className={s.textarea} placeholder={"Your message"}></textarea>
                </form>
                <button>send</button>
            </div>
            <hr className={styleContainer.bottom_dashed}/>
        </div>
    )
}
