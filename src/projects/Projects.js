import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from './project/Project';
import {Title} from '../common/components/title/Title';
import todoImage from '../assets/image/todoImage.jpg'
import socialImage from '../assets/image/socialImage.jpg'

const Projects = () => {
    const social = {
        backgroundImage: 'url(' + socialImage + ')',
    }
    const todo = {
        backgroundImage: 'url(' + todoImage + ')',
    }
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={"Projects"}/>
                <div className={style.projects}>
                    <Project style={todo}  title={"Todo list"} description={"Simple task management service"}/>
                    <Project style={social}  title={"Social network"} description={"An online platform that is used for communication, dating, creating social relationships between people who have similar interests or offline connections, as well as for entertainment (music, movies) and work."}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;