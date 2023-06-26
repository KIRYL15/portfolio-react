import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Кирилл Правдин</h2>
                <div className={style.socialContainer}>
                    <div className={style.iconFooter}></div>
                    <div className={style.iconFooter}></div>
                    <div className={style.iconFooter}></div>
                    <div className={style.iconFooter}></div>
                </div>
                <span>&#xA9;2023 Все права защищены</span>
            </div>
        </div>
    );
};

export default Footer;