import React, {useEffect} from "react";
import s from "./Contact.module.css"
import {Title} from "../common/components/title/Title";
import styleContainer from "../common/styles/Container.module.css";
import axios from "axios";
import { useFormik } from "formik";


export function Contact() {

    useEffect(() => {
        axios.post('https://smtp-nodejs-ser.herokuapp.com/sendMessage',{})
            .then((res) => {
                console.log('ok')
            })
    },[])

    const formik = useFormik({
        initialValues: {
            name: '',
            contacts: '',
            message: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
    })



    return (
        <div className={s.contactsBlock}>
            <hr className={styleContainer.top_dashed}/>
            <div className={s.contactsContainer}>
                <Title title={'Contact'}/>
                <form action="#" className={s.contacts} onSubmit={formik.handleSubmit}>
                    <input type="text"
                           className={s.input}
                           placeholder={"Name"}
                           name={"name"}
                           onChange={formik.handleChange}
                           value={formik.values.name}
                    />
                    <input type="text"
                           className={s.input}
                           placeholder={"E-mail"}
                           name={"contacts"}
                           onChange={formik.handleChange}
                           value={formik.values.contacts}
                    />
                    <textarea className={s.textarea}
                              placeholder={"Your message"}
                              name={"message"}
                              onChange={formik.handleChange}
                              value={formik.values.message}
                    />
                <button type={"submit"}>send</button>
                </form>
            </div>
            <hr className={styleContainer.bottom_dashed}/>
        </div>
    )
}
