import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
                <form className={style.contacts}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                </form>
                <button type={"submit"} className={style.button}>Отправить</button>
            </div>

        </div>
    );
};

export default Contacts;