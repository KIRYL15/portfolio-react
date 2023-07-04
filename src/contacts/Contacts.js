import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'}/>
                <form className={style.contacts}>
                    <input placeholder={'Name'} type="text"/>
                    <input placeholder={"e-mail"} type="text"/>
                    <textarea className={style.textarea} placeholder={"Message"}/>
                </form>
                <button type={"submit"} className={style.button}>Send</button>
            </div>

        </div>
    );
};

export default Contacts;