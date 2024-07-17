'use client'
import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      className={styles[props.className]}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
