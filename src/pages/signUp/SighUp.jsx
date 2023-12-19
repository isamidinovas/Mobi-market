import React from "react";
import ArrowLeft from "./img/arrow-left.png";
import styles from "./SighUp.module.scss";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";
const SighUp = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p>
            <NavLink to="/">
              <img src={ArrowLeft} alt="" className={styles.arrow} />
            </NavLink>
            Назад
          </p>

          <p className={styles.text}>Регистрация</p>
        </div>

        <div className={styles.form}>
          <input
            type="text"
            className={styles.input}
            placeholder="Имя пользователя"
          />
          <input type="email" className={styles.input} placeholder="Почта" />

          <Button text="Далее" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SighUp;
