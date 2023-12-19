import React, { useState } from "react";
import styles from "./SighUpPass.module.scss";
import Button from "../../components/Button/Button";
import ArrowLeft from "./img/arrow-left.png";
import Eye from "./img/eye-disable.png";
import Eye2 from "./img/eye2.png";
import Key from "./img/Frame 861.png";
import { NavLink } from "react-router-dom";
const SighUpPass = () => {
  const [isImage1, setIsImage1] = useState(true);
  const [isImage2, setIsImage2] = useState(true);
  const imageSrc = isImage1 ? Eye : Eye2;
  const imageSrc2 = isImage2 ? Eye : Eye2;
  const handleClick = () => {
    setIsImage1((prevState) => !prevState);
  };
  const handleClick2 = () => {
    setIsImage2((prevState) => !prevState);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p>
            <NavLink to="/sighUp">
              <img src={ArrowLeft} alt="" className={styles.arrow} />
            </NavLink>
            Назад
          </p>

          <p className={styles.text}>Регистрация</p>
        </div>

        <div className={styles.form}>
          <div className={styles.validate}>
            <img src={Key} alt="" />
            <p className={styles.title}>Придумайте пароль</p>
            <p className={styles.sub__title}>
              Минимальная длина — 8 символов. Для надежности пароль должен
              содержать буквы и цифры.
            </p>
          </div>
          <input
            type={isImage1 ? "password" : "text"}
            className={styles.password}
            placeholder="Пароль"
          />
          <img
            src={imageSrc}
            onClick={handleClick}
            alt="eye"
            className={styles.eye__img}
          />
          <input
            type={isImage2 ? "password" : "text"}
            className={styles.password}
            placeholder="Повторите пароль"
          />
          <img
            src={imageSrc2}
            onClick={handleClick2}
            alt="eye"
            className={styles.eye__img}
          />

          <Button text="Далее" />
        </div>
      </div>
    </div>
  );
};

export default SighUpPass;
