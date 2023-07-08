import React, { useRef } from 'react';
import style from './Contacts.module.scss'
import {Title} from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com';


export const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_00hi3u6',

            'template_29jdkcd',
            form.current,
            'Y8xynPUFhj3x0h5xA')
            .then((result) => {
                console.log(result.text);
                console.log("message")
            }, (error) => {
                console.log(error.text);
                console.log('error message')
            });
    };
    return (
        <div id={"contacts"} className={style.contactsBlock}>
            <Fade top>
                <div className={style.contactsContainer}>
                    <Title title={"Contacts"}/>
                    <form ref={form} className={style.form} onSubmit={sendEmail}>
                        <input
                            className={style.formArea}
                            type="text"
                            name="to_name"
                            placeholder='User name'/>
                        <input
                            className={style.formArea}
                            type="email"
                            name="reply_to"
                            placeholder="e-mail"/>
                        <textarea name="message"
                            className={style.textarea}
                            placeholder="Message"/>
                        <button type="submit">Send message</button>
                    </form>
                </div>
            </Fade>
        </div>
    );
}