import React, { useState } from "react";
import styles from "./Header.module.css";
import commonStyles from "../../assets/styles/commonStyles.module.css";
import logoLight from "../../assets/images/logo/logoLight.svg";
import logoDark from "../../assets/images/logo/logoDark.png";
import flagAzerbaijan from "../../assets/images/logo/flagAzerbaijan.svg";
import langMenuArrow from "../../assets/images/logo/langMenuArrow.svg";
import darkModeIcon from "../../assets/images/logo/darkModeIcon.svg";
const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggleMenuHandler(el) {
    setIsOpen(!isOpen);
  }
  const [langDropdownVisible, setLangDropdownVisible] = useState(false);

  const toggleLangMenu = () => {
    setLangDropdownVisible(!langDropdownVisible);
  };
  return (
    <>
      <div className={styles.header}>
        <div className={commonStyles.cont}>
          <div className={styles.contRow}>
            <div className={styles.logo}>
              <a href="index.html">
                <img src={logoLight} alt="logo" className={styles.logoLight} />
                <img src={logoDark} alt="logo" className={styles.logoDark} />
              </a>
            </div>
            <nav>
              <ul className={styles.menu}>
                <li>
                  <a href="#whoAreWe">Haqqımızda</a>
                </li>
                <li>
                  <a href="#services">Xidmətlər</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#ourTeam">Komandamız</a>
                </li>
                <li>
                  <a href="#digitalWorld" className={styles.openForm}>
                    Əlaqə
                  </a>
                </li>
              </ul>
            </nav>
            <div className={styles.lang} style={{ cursor: "pointer" }} onClick={toggleLangMenu}>
              <img src={flagAzerbaijan} alt="Aze" />
              <img src={langMenuArrow} alt="arrow" />
              <ul className={`${styles.dropdownMenu}${langDropdownVisible ? styles.visible : ''}`} style={{position:"absolute"}}>
                <li>
                  <a href="#">EN</a>
                </li>
                <li>
                  <a href="#">RU</a>
                </li>
              </ul>
            </div>
            <div className={styles.theme}>
              <img src={darkModeIcon} alt="darkMode" className={styles.dark} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={styles.light}
              >
                <g clipPath="url(#clip0_456_7387)">
                  <path
                    fill-rule="evenodd"
                    clipRule="evenodd"
                    d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C12.5523 0 13 0.447715 13 1V3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3V1C11 0.447715 11.4477 0 12 0Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clipRule="evenodd"
                    d="M12 20C12.5523 20 13 20.4477 13 21V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V21C11 20.4477 11.4477 20 12 20Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clipRule="evenodd"
                    d="M3.51286 3.51262C3.90339 3.1221 4.53655 3.1221 4.92708 3.51262L6.34708 4.93262C6.7376 5.32314 6.7376 5.95631 6.34708 6.34683C5.95655 6.73736 5.32339 6.73736 4.93286 6.34683L3.51286 4.92683C3.12234 4.53631 3.12234 3.90314 3.51286 3.51262Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clipRule="evenodd"
                    d="M17.653 17.6532C18.0435 17.2627 18.6767 17.2627 19.0672 17.6532L20.4872 19.0732C20.8777 19.4638 20.8777 20.0969 20.4872 20.4875C20.0967 20.878 19.4635 20.878 19.073 20.4875L17.653 19.0675C17.2625 18.6769 17.2625 18.0438 17.653 17.6532Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clipRule="evenodd"
                    d="M0 12C0 11.4477 0.447715 11 1 11H3C3.55228 11 4 11.4477 4 12C4 12.5523 3.55228 13 3 13H1C0.447715 13 0 12.5523 0 12Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clipRule="evenodd"
                    d="M20 12C20 11.4477 20.4477 11 21 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H21C20.4477 13 20 12.5523 20 12Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clipRule="evenodd"
                    d="M6.34708 17.6532C6.7376 18.0438 6.7376 18.6769 6.34708 19.0675L4.92708 20.4875C4.53655 20.878 3.90339 20.878 3.51286 20.4875C3.12234 20.0969 3.12234 19.4638 3.51286 19.0732L4.93286 17.6532C5.32339 17.2627 5.95655 17.2627 6.34708 17.6532Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clipRule="evenodd"
                    d="M20.4872 3.51262C20.8777 3.90314 20.8777 4.53631 20.4872 4.92683L19.0672 6.34683C18.6767 6.73736 18.0435 6.73736 17.653 6.34683C17.2625 5.95631 17.2625 5.32314 17.653 4.93262L19.073 3.51262C19.4635 3.1221 20.0967 3.1221 20.4872 3.51262Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_456_7387">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="test">
          <div onClick={toggleMenuHandler} className={styles.hamburger}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
        </div>
        {isOpen ? (
          <div className={styles.mobileMenu}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Header;
