import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import tsIcon from '../assets/image/skillsIcon/typescriptIcon.svg';
import jsIcon from '../assets/image/skillsIcon/javascriptIcon.svg';
import cssIcon from '../assets/image/skillsIcon/cssIcon.svg';
import jestIcon from '../assets/image/skillsIcon/jestIcon.svg';
import gitIcon from '../assets/image/skillsIcon/gitIcon.svg';
import materialIcon from '../assets/image/skillsIcon/materialIcon.svg';
import postmanIcon from '../assets/image/skillsIcon/postmanIcon.svg';
import reactjsIcon from '../assets/image/skillsIcon/reactjsIcon.svg';
import reduxIcon from '../assets/image/skillsIcon/reduxIcon.svg';
import sassIcon from '../assets/image/skillsIcon/sassIcon.svg';
import storybookIcon from '../assets/image/skillsIcon/storybookIcon.svg';
import htmlIcon from '../assets/image/skillsIcon/htmlIcon.svg';

const iconsForSkill = [
    {img: reactjsIcon, alt: 'ReactJS'},
    {img: reduxIcon, alt: 'Redux'},
    {img: tsIcon, alt: 'TypeScript'},
    {img: jsIcon, alt: 'JavaScript'},
    {img: cssIcon, alt: 'CSS'},
    {img: htmlIcon, alt: 'HTML'},
    {img: jestIcon, alt: 'Jest'},
    {img: gitIcon, alt: 'Git'},
    {img: materialIcon, alt: 'Material UI'},
    {img: postmanIcon, alt: 'Postman'},
    {img: sassIcon, alt: 'SASS'},
    {img: storybookIcon, alt: 'Storybook'},
];
const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={style.skills}>
                    {iconsForSkill.map((icon) => (
                        <Skill title={icon.alt} image={icon.img} key={icon.alt} alt={icon.alt}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;