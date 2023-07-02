import React from 'react';
import style from './Skill.module.scss'

const Skill = ({title, image, alt}) => {
    return (
        <div className={style.skill}>
            <img className={style.icon} src={image} alt={alt}/>
            <h3>{title}</h3>
        </div>
    );
};

export default Skill;