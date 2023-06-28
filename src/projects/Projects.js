import React from 'react';
import Project from './project/Project';
import style from './Projects.module.scss'
import todoImage from '../assets/image/todoImage.jpg'
import {Title} from '../common/components/title/Title';
import socialImage from '../assets/image/socialImage.png'
import styleContainer from '../common/styles/Container.module.css'

const Projects = () => {
    const social = {backgroundImage: 'url(' + socialImage + ')'}
    const todo = {backgroundImage: 'url(' + todoImage + ')'}
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={"Projects"}/>
                <div className={style.projects}>
                    <Project path={'https://kiryl15.github.io/todolist-2.0/'} style={todo}  title={"Todo list"} description={"Simple task management service"}/>
                    <Project path={'https://kiryl15.github.io/samurai-way/'} style={social}  title={"Social network"} description={"An online platform that is used for communication, dating, creating social relationships between people who have similar interests or offline connections, as well as for entertainment (music, movies) and work."}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;