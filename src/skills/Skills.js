import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import {Title} from "../common/components/title/Title";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"TypeScript"} description={"Описание Скиллов"}/>
                    <Skill title={"JavaScript"} description={"Описание Скиллов"}/>
                    <Skill title={"CSS"} description={"Описание Скиллов"}/>
                    <Skill title={"HTML"} description={"Описание Скиллов"}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;