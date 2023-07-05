import React from 'react';
import style from './Project.module.scss'
import Fade from 'react-reveal/Fade';

const Project = (props) => {
    return (
        <div className={style.project}>
            <Fade top>
                <div className={style.imgContainer} style={props.style}>
                    <a type={"submit"} href={props.path} className={style.button}>View</a>
                </div>
                <div className={style.projectInfo}>
                    <h3 className={style.projectTitle}>{props.title}</h3>
                    <span className={style.description}>{props.description}</span>
                </div>
            </Fade>
        </div>
    );
};

export default Project;