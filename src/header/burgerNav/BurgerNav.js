import React, {useState} from 'react';
import style from './BurgerNav.module.scss'
import {Link} from "react-scroll";
import burgerIcon from "../../assets/image/hamburger-svgrepo-com.svg"


const BurgerNav = () => {
    const [burgerMenu, setBergerMenu] = useState(false)

    let onBurgerMenu = () => {
        setBergerMenu(!burgerMenu)
    }


    return (
        <div className={style.burgerNav}>
            <div className={burgerMenu ? `${style.burgerNavItems} ${style.show}`: style.burgerNavItems}>
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
                      spyThrottle={500}>Home</Link>
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
                      spyThrottle={500}>Skills</Link>
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
                      spyThrottle={500}>Projects</Link>
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
                      spyThrottle={500}>Contacts</Link>
            </div>
            <div onClick={onBurgerMenu} className={style.burgerBtn} >
                <img src={burgerIcon}/>
            </div>
        </div>
    );
};

export default BurgerNav;