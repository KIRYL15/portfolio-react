import React from 'react';
import style from './Footers.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import telIcon from '../assets/image/telegramIcon.svg'
import linkIcon from '../assets/image/linkedinIcon.svg'
import gitIcon from '../assets/image/githubIcon.svg'


const Footers = () => {
        return (
        <div className={style.footersBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.nameTitle}>Kirill</h2>
                <div className={style.socialContainer}>
                    <img src={linkIcon} className={style.iconFooter}/>
                    <img src={gitIcon}  className={style.iconFooter}/>
                    <img src={telIcon} className={style.iconFooter}/>
                </div>
                <span className={style.bottom}>Copyright &#xA9;2023 All rights reserved</span>
            </div>
        </div>
    );
};

export default Footers;