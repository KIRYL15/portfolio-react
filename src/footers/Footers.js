import React from 'react';
import style from './Footers.module.scss'
import telIcon from '../assets/image/telegramIcon.svg'
import linkIcon from '../assets/image/linkedinIcon.svg'
import gitIcon from '../assets/image/githubIcon.svg'
import vkIcon from '../assets/image/vkIcon.svg'
import {Title} from "../common/components/title/Title";

const icons = [
    {img: linkIcon, alt: 'LinkedIn', title: 'link', ref:'https://www.linkedin.com/in/kiryl-praudzin/'},
    {img: gitIcon, alt: 'GitHub', title: 'git', ref: "https://github.com/KIRYL15"},
    {img: telIcon, alt: 'Telegram', title: 'tlg', ref: "https://t.me/Kiryl15"},
    {img: vkIcon, alt: 'Telegram', title: 'tlg', ref: "https://vk.com/pravdinkir"},
];

const Footers = () => {

    return (
        <div className={style.footersBlock}>
            <div className={style.footerContainer}>
                <Title title={"Kirill"}/>
                <div className={style.socialContainer}>
                    {icons.map(icon => (
                        <a href={icon.ref}>
                            <img title={icon.title} src={icon.img} alt={icon.alt} className={style.iconFooter}
                                 key={icon.alt}/>
                        </a>
                    ))}
                </div>
                <span className={style.bottom}>Copyright &#xA9;2023 All rights reserved</span>
            </div>
        </div>
    );
};

export default Footers;