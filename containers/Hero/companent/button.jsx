import React from 'react'
import styles from './button.module.css'
import svg  from "./Image/arrow-right.svg"

const Button = ({ text }) => {
  return (
      
    <button className={styles.btnMain}>
        <span className={styles.contentbtn}>
        {text}
        <img className={styles.arrowlogo} src={svg} alt="arrow-svg" />
        </span>
    </button>
  );
}

export default Button;
