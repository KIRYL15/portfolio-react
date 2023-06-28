import React from 'react';
import style from './Nav.module.scss'

const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.btNav} href="">Home</a>
            <a className={style.btNav} href="">Skills</a>
            <a className={style.btNav} href="">Projects</a>
            <a className={style.btNav} href="">Contacts</a>
        </div>
    );
};

export default Nav;