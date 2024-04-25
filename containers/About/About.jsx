import React from "react";
import styles from "./About.module.css";
import commonStyles from "../../assets/styles/commonStyles.module.css";
import aboutImg from "../../assets/images/about/Frame 48096188.png";

const About = () => {
  return (
    <>
      <div id={styles.whoAreWe}>
        <div className={styles.bg}></div>
        <div className={commonStyles.cont}>
          <div className={styles.contRow}>
            <div className={styles.left}>
              <h2 className={styles.title}>Biz kimik?</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500sof the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s
              </p>
              <div className={styles.buttonContainer} style={{ borderRadius: "30px" }}>
                <div className={styles.buttonBorder}></div>
                <button className={styles.btn}>
                  Konsultasiya
                </button>
              </div>
            </div>
            <div className={styles.right}>
              <img src={aboutImg} alt="aboutImage" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
