import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.title}>Кирилл Правдин</h3>
                <div className={style.socialContainer}>
                    <div className={style.footer}></div>
                    <div className={style.footer}></div>
                    <div className={style.footer}></div>
                    <div className={style.footer}></div>
                </div>
                <h4>&#xA9;2023 Все права защищены</h4>
            </div>


        </div>
    );
};

export default Footer;