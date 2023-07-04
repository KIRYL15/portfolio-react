import React from 'react';
import style from './Nav.module.scss'

const Nav = () => {
    return (
        <div className={style.nav}>
            <a type={"submit"} className={style.btNav} href="">Home</a>
            <a type={"submit"} className={style.btNav} href="">Skills</a>
            <a type={"submit"} className={style.btNav} href="">Projects</a>
            <a type={"submit"} className={style.btNav} href="">Contacts</a>
        </div>
    );
};

export default Nav;