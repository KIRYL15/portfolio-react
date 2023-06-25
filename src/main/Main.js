import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Привет всем!</span>
                    <h1>Меня зовут Кирилл Правдин</h1>
                    <p>Я Фронтенд - разработчик</p>
                </div>
                <div className={style.photo}>
                    <img src={''} alt={'Avatar'}/>
                </div>
            </div>

        </div>
    );
};

export default Main;