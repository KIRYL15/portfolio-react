import React from 'react';
import style from './Nav.module.scss'
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
    return (
        <div className={style.nav}>
            <a type={"submit"} href="#home">Home</a>
            <a type={"submit"} href="#skills">Skills</a>
            <a type={"submit"} href="#projects">Projects</a>
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