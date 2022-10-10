import React from "react";
import { Link } from "react-router-dom";
import HeaderText from './HeaderText';
import HeaderNav from "./HeaderNav";
import { GiBroom, } from "react-icons/gi";

import style from './header.module.css';

const Header = () => {
  return (
    <header>
      <div className={style.wrapper}>
        <Link to='/'>
          <div className={style.container}>
            <div className={style.headerText}>
              <h1>Maid</h1>
              <GiBroom className={style.icon} />
            </div>
            <div>
              <h1>Complete</h1>
            </div>
          </div>
        </Link>
        
      <HeaderNav />
      <HeaderText />
      </div>
    </header>
  );
};

export default Header;
