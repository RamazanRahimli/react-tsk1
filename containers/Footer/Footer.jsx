import React from "react";
import styles from "./Footer.module.css";
import commonStyles from "../../assets/styles/commonStyles.module.css";
import logoDark from "../../assets/images/logo/logoDark.png";
import logoLight from "../../assets/images/logo/logoLight.svg";
import twitterIcon from "../../assets/images/footer/Twitter.svg";
import facebookIcon from "../../assets/images/footer/Facebook.svg";
import linkedinIcon from "../../assets/images/footer/Linkedin.svg";
import telephoneIcon from "../../assets/images/logo/telephone.svg";
import envelopeIcon from "../../assets/images/logo/envelope.svg";

const Footer = () => {
  
  return (
    <>
      <footer className={styles.changeMode}>
        <div className={`${commonStyles.cont} ${styles.footerSummary}`}>
          <div className={`${"grid flex justify-between"} ${styles.marCode}`}>
            <div
              className={`${"col-span-2 my-5"} ${styles.marcodeDescription}`}
            >
              <div className={styles.logo} style={{ width: 285, height: 60 }}>
                <img src={logoLight} alt="logo" className="logoLight" />
                {/* <img src={logoDark} alt="logo" className="logoDark" /> */}
              </div>
              <p className={`${"my-3"} ${styles.marcodeDescriptionText}`}>
                For businesses who need clarity, productive communication,
                prioritisation and accountability.
              </p>
            </div>
            <div className={`${"col-span-3 mt-5"} ${styles.contentFooter}`}>
              <div className={styles.descriptionInformation}>
                <p>
                  <a href="#whoAreWe" className="titles">
                    Haqqımızda
                  </a>
                </p>
                <p>
                  <a href="#services" className="titles">
                    Xidmətlər
                  </a>
                </p>
                <p>
                  <a href="#ourTeam" className="titles">
                    Komandamız
                  </a>
                </p>
              </div>
              <div
                className={`${
                  styles.button
                } ${"justify-content-center d-flex"}`}
              >
                <button className={styles.btnContact}>
                  <a
                    href="#digitalWorld"
                    className={[styles.openForm, styles.btnContact]}
                  >
                    Bizimlə əlaqə
                  </a>
                </button>
              </div>
              <p className={"text-center container titles"}>
                © 2023 Marcode All rights reserved
              </p>
            </div>
            <div
              className={`${"col-span-2 my-5 titles"} ${
                styles.informationContact
              }`}
            >
              <p className={styles.contactInfo}>
                <img
                  src={envelopeIcon}
                  alt="envelope"
                  style={{ marginLeft: "-10px" }}
                />
                info@marcode.az
              </p>
              <p className={styles.contactInfo}>
                <img src={telephoneIcon} alt="telephone" />+ 994 50 444 44 44
              </p>
              <div
                className={`${"col-span-2 d-flex gap-4 mt-5"} ${
                  styles.socialMedias
                }`}
              >
                <a href="">
                  <img src={linkedinIcon} alt="linkedin" />
                </a>
                <a href="">
                  <img src={facebookIcon} alt="facebook" />
                </a>
                <a href="">
                  <img src={twitterIcon} alt="twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
