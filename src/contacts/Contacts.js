import React from 'react';
import style from './Contacts.module.scss'
import {Title} from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';

export const Contacts = () => {
    return (
        <div id={"contacts"} className={style.contactsBlock}>
            <Fade top>
                <div className={style.contactsContainer}>
                    <Title title={"Contacts"}/>
                    <form className={style.form}>
                        <input className={style.formArea} placeholder='Name' type="text"/>
                        <input className={style.formArea} placeholder="e-mail" type="text"/>
                        <textarea className={style.textarea} placeholder="Message"/>
                        <button type="submit">Send message</button>
                    </form>
                </div>
            </Fade>
        </div>
    );
}