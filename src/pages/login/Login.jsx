import React from "react";
import Background from "./img/background (2).png";
import Eye from "./img/eye-disable.png";
import styles from "./Login.module.scss";

const Login = () => {
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
            type="password"
            className={styles.password}
            placeholder="Пароль"
          />
          <img src={Eye} alt="" className={styles.eye__img} />
          <p className={styles.text}>Забыли пароль?</p>
          <button className={styles.btn}>Войти</button>
        </div>
      </div>
      <p className={styles.text__reg}>Зарегистрироваться</p>
    </div>
  );
};

export default Login;
