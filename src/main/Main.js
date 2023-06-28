import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";
import ava from "../assets/image/ava.jpg";

const Main = () => {
    const avatar = {backgroundImage: 'url(' + ava + ')'}

    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi all!</span>
                    <Title title={"My name is Kirill Pravdin"}/>
                    <p>I am a frontend developer</p>
                </div>
                <div className={style.photo} style={avatar}>
                </div>
            </div>

        </div>
    );
};

export default Main;