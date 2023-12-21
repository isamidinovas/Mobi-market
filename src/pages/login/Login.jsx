import React, { useState } from "react";
import Eye from "./img/eye-disable.png";
import Eye2 from "./img/eye2.png";
import Call from "./img/Frame 860.png";
import CloseBtn from "./img/close1437.jpg";
import styles from "./Login.module.scss";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";
import {
  BarLoader,
  BeatLoader,
  ClipLoader,
  ClockLoader,
  DotLoader,
} from "react-spinners";

const Login = () => {
  const [isImage1, setIsImage1] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const imageSrc = isImage1 ? Eye : Eye2;

  const handleClick = () => {
    setIsImage1((prevState) => !prevState);
  };

  const handleVisibility = () => {
    setIsVisible(!isVisible);
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
          <p onClick={handleVisibility} className={styles.text}>
            Забыли пароль
          </p>
          <Button text="Войти" />
        </div>
      </div>
      <NavLink to="/sighUp">
        <p className={styles.text__reg}>Зарегистрироваться</p>
      </NavLink>

      {isVisible && (
        <div className={styles.block}>
          <div className={styles.overlay}></div>
          <div className={styles.modal}>
            <img
              onClick={() => setIsVisible(!isVisible)}
              src={CloseBtn}
              alt=""
              className={styles.close}
            />
            <p className={styles.title}>Введите номер телефона</p>
            <img src={Call} alt="" />
            <p className={styles.subtitle}>Введите номер телефона</p>
            <p className={styles.text__reset}>
              Мы отправим вам СМС с кодом подтверждения
            </p>
            <input
              placeholder="00000000"
              type="phone"
              name=""
              className={styles.phone}
            />
            <Button text="Далее" />
          </div>
          {/* <div className={styles.modal__mess}>
            <img
              onClick={() => setIsVisible(!isVisible)}
              src={CloseBtn}
              alt=""
              className={styles.close}
            />
            <p className={styles.title}>Сброс пароля</p>
            <img src={Call} alt="" />
            <p className={styles.subtitle}>Введите код из СМС</p>

            <input
              placeholder="00000000"
              type="phone"
              name=""
              className={styles.phone}
            />
            <p className={styles.text__reset}>Повторный запрос</p>
            <ClipLoader
              size={15}
              color={"#123abc"}
              loading={true}
              className={styles.loader}
            />
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Login;
