import { useState } from "react";
import { useEffect } from "react";
import style from "./forms.module.scss";

export const Forms = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passDirty, setPasslDirty] = useState(false);
  const [emailErrror, setEmaillError] = useState(
    "поле email не может быть пустым!"
  );
  const [passErrror, setPasslError] = useState(
    "поле пароль не может быть пустым!"
  );

  const [formValid, setFormValid] = useState(false);

  const BlurHahdler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "pass":
        setPasslDirty(true);
        break;
    }
  };

  const EmailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmaillError("Некорректный email!");
    } else {
      setEmaillError("");
    }
  };

  useEffect(() => {
    if (emailErrror || passErrror) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailErrror, passErrror]);

  const PasswordHandler = (e) => {
    setPass(e.target.value);
    if (e.target.value.length < 6) {
      setPasslError("В пароле должно быть не меньше 6 символов!");
      if (!e.target.value) {
        setPasslError("поле пароль не может быть пустым!");
      }
    } else {
      setPasslError("");
    }
  };

  return (
    <>
      <div className={style.input__box}>
        <input
          className={style.input}
          onBlur={(e) => BlurHahdler(e)}
          type="email"
          value={email}
          onChange={(e) => EmailHandler(e)}
          placeholder="email"
          autoComplete="off"
          name="email"
        />
        <input
          className={style.input}
          onBlur={(e) => BlurHahdler(e)}
          type="password"
          value={pass}
          onChange={(e) => PasswordHandler(e)}
          placeholder="password"
          autoComplete="off"
          name="pass"
        />
      </div>
      <button
        disabled={!formValid}
        onClick={() => handleClick(email, pass)}
        className={style.input__btn}
      >
        {title}
      </button>
      {emailDirty && emailErrror && (
        <div className={style.input__error}>{emailErrror}</div>
      )}
      {passDirty && passErrror && (
        <div className={style.input__error}>{passErrror}</div>
      )}
    </>
  );
};
