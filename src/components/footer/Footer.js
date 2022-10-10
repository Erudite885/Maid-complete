import React from 'react';
import { FaCopyright
  ,} from "react-icons/fa";
// import { BsCopyRight } from "react-icons/bs";
import {
  GiBroom,
  // GiBrickWall,
  // GiCardboardBoxClosed,
  // GiDroplets,
  // GiPawPrint,
} from "react-icons/gi";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <section className={style.wrapper}>
        <section className={style.reservedSection}>
          <span> <FaCopyright className={style.reservedCopyRightIcon} /> </span>
          <p className={style.reservedText}>
            2022 maid complete. all rights reserved.
          </p>
        </section>

        <section className={style.container}>
          <div className={style.footerText}>
            <GiBroom className={style.icon} />
          </div>
          <div>
            <h1 className={style.maidText}>Maid</h1>
            <h1>Complete</h1>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;