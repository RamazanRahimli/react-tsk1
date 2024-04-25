import React from "react";
import styles from "./header.module.css";
import imgLogo from "../../assets/about/logo (13).png";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logoBox}>
          <img src={imgLogo} alt="Logo" />
          <h1>COURSE</h1>
        </div>
        <nav>
          <ul className={styles.menuBox}>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">ABOUT US</a>
            </li>
            <li>
              <a href="">COURSES</a>
            </li>
            <li>
              <a href="">ELEMENTS</a>
            </li>
            <li>
              <a href="">NEWS</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
        </nav>
        <div className={styles.phone}>
        <div className={styles.box}>
        <ul className={styles.phoneBox}>
              <li>
                <a href="">
                    <a href="">Phone</a>
                </a>
              </li>
              <li>
                <a href="">+43 4566 7788 2457</a>
              </li>
            </ul>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
