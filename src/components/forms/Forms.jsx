import React, { useEffect, useState } from "react";
import style from "./forms.module.scss";

export const Forms = ({ title, handleClick }) => {
  const [form, setForm] = useState({
    email: {
      value: "",
      isDirty: false,
      error: "some email error",
    },
    password: {
      value: "",
      isDirty: false,
      error: "some password error",
    },
  });

  const [formValid, setFormValid] = useState(false);

  const checkEmailError = (value) => {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(value).toLowerCase())) {
      return "Недопустимые символы для поля EMAIL!";
    }
  };
  const checkPasswordError = (value) => {
    if (value.length <= 6) {
      return "Длинна поля ПАРОЛЬ должна быть не меньше 6 символов!";
    }

    if (!value) {
      return "Поле ПАРОЛЬ не может быть пустым!";
    }

    if (value.charAt(0) === " ") {
      return "В поле Пароль нельзя использовать ПРОБЕЛ!";
    }
  };

  const checkError = (name, value) => {
    switch (name) {
      case "email":
        return checkEmailError(value);
      case "password":
        return checkPasswordError(value);
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
        error: checkError(name, value),
      },
    }));
    console.log(form);
  };

  const BlurHahdler = (e) => {
    const { name } = e.target;
    switch (name) {
      case "email":
        setForm((prev) => ({
          ...prev,
          [name]: {
            ...prev[name],
            isDirty: (form.email.isDirty = true),
          },
        }));
        break;
      case "password":
        setForm((prev) => ({
          ...prev,
          [name]: {
            ...prev[name],
            isDirty: (form.email.isDirty = true),
          },
        }));
        console.log(form, form.email.isDirty);
        break;
    }
  };

  useEffect(() => {
    if (form.email.error || form.password.error) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [form.email.error, form.password.error]);

  return (
    <>
      <div className={style.input__box}>
        <input
          className={style.input}
          type="email"
          value={form.email.value}
          onBlur={BlurHahdler}
          onChange={handleChange}
          placeholder="email"
          name="email"
        />
        <input
          className={style.input}
          type="password"
          value={form.password.value}
          onChange={handleChange}
          onBlur={BlurHahdler}
          placeholder="password"
          name="password"
        />
      </div>
      <button
        disabled={!formValid}
        onClick={() => handleClick(form.email.value, form.password.value)}
        className={style.input__btn}
      >
        {title}
      </button>
      {form.email.isDirty && form.email.error && (
        <div className={style.input__error}>{form.email.error}</div>
      )}
      {form.password.isDirty && form.password.error && (
        <div className={style.input__error}>{form.password.error}</div>
      )}
    </>
  );
};
