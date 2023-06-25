import React from 'react';
import style from './Work.module.css'

const Work = (props) => {
    return (
        <div className={style.work}>
            <div className={style.imgContainer}>
                <a href="">ПОСМОТРЕТЬ</a>

            </div>
            <div>{props.title}</div>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

export default Work;