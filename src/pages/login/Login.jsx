import React, { useState } from "react";
import Eye from "./img/eye-disable.png";
import Eye2 from "./img/eye2.png";
import styles from "./Login.module.scss";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [isImage1, setIsImage1] = useState(true);

  const imageSrc = isImage1 ? Eye : Eye2;

  const handleClick = () => {
    setIsImage1((prevState) => !prevState);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.form}>
          <input
            type="text"
            className={styles.input}
            placeholder="Имя пользователя"
          />
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
          <p className={styles.text}>Забыли пароль?</p>
          <Button text="Войти" />
        </div>
      </div>
      <NavLink to="/sighUp">
        <p className={styles.text__reg}>Зарегистрироваться</p>
      </NavLink>
    </div>
  );
};

export default Login;
