import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Опыт</h2>
                <div className={style.skills}>
                    <Skill title={"TYPESCRIPT"} description={"Описание Скиллов"}/>
                    <Skill title={"CSS"} description={"Описание Скиллов"}/>
                    <Skill title={"HTML"} description={"Описание Скиллов"}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;