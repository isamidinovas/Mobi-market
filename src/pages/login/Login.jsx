import React, { useState } from "react";
import Eye from "./img/eye-disable.png";
import Eye2 from "./img/eye2.png";
import styles from "./Login.module.scss";

const Login = () => {
  const [isImage1, setIsImage1] = useState(true);

  const handleClick = () => {
    setIsImage1((prevState) => !prevState);
  };

  const imageSrc = isImage1 ? Eye : Eye2;
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
          <button className={styles.btn}>Войти</button>
        </div>
      </div>
      <p className={styles.text__reg}>Зарегистрироваться</p>
    </div>
  );
};

export default Login;
