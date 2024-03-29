import React, {useEffect, useState} from "react";
import s from "./Contact.module.css"
import {Title} from "../common/components/title/Title";
import styleContainer from "../common/styles/Container.module.css";
import axios from "axios";
import {useFormik} from "formik";


export function Contact() {

    const [body, setBody] = useState({});
    const [fly, setFly] = useState(false)

    useEffect(() => {
        if (fly) {
            axios.post('https://smtp-nodejs-ser.herokuapp.com/sendMessage', body)
                .then((res) => {
                    console.log('ok')
                })
        }
    }, [body])

    const formik = useFormik({
        initialValues: {
            name: '',
            contacts: '',
            message: ''
        },
        onSubmit: values => {
            setFly(true)
            setBody(values);
        },
    })


    return (
        <div className={s.contactsBlock}>
            <hr className={styleContainer.top_dashed}/>
            <div className={s.contactsContainer}>
                <Title title={'Contact'}/>
                    <form action="#" className={s.contacts} onSubmit={formik.handleSubmit}>
                        <fieldset className={s.fieldset}>
                            <input type="text"
                                   className={s.input}
                                   placeholder={"Name"}
                                   {...formik.getFieldProps('name')}
                            />
                            <input type="text"
                                   className={s.input}
                                   placeholder={"E-mail"}
                                   {...formik.getFieldProps('contacts')}
                            />
                            <textarea className={`${s.textarea} ${s.input}`}
                                      placeholder={"Your message"}
                                      cols={60}
                                      rows={7}
                                      {...formik.getFieldProps('message')}
                            />
                            <input type={"submit"} value={"Send Message"} className={s.button}/>
                        </fieldset>
                    </form>
                </div>
            <hr className={styleContainer.bottom_dashed}/>
        </div>
    )
}
