import React from 'react';
import style from './Nav.module.scss'
import {Link} from "react-scroll";

const Nav = () => {
    return (
        <div className={style.nav}>
            {/*<a type={"submit"} href="#home">Home</a>*/}
            <Link activeClass={style.active}
                  to="home"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={1}
                  duration={500}
                  delay={200}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
            >Home</Link>
            {/*<a type={"submit"} href="#skills">Skills</a>*/}
            <Link activeClass={style.active}
                  to="skills"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={1}
                  duration={500}
                  delay={200}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
            >Skills</Link>
            {/*<a type={"submit"} href="#projects">Projects</a>*/}
            <Link activeClass={style.active}
                  to="projects"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={1}
                  duration={500}
                  delay={200}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
            >Projects</Link>
            {/*<a type={"submit"} className={style.btNav} href="#contacts">Contacts</a>*/}
            <Link activeClass={style.active}
                  to="contacts"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={1}
                  duration={500}
                  delay={200}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
            >
                Contacts
            </Link>
        </div>
    );
};

export default Nav;