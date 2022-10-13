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

  const BlurHahdler = (e) => {
    switch (e.target.name) {
      case "email":
        setForm((previous) => ({
          ...previous,
          error: (form.email.isDirty = true),
        }));
        break;
      case "password":
        setForm((previous) => ({
          ...previous,
          error: (form.password.isDirty = true),
        }));
        break;
    }
  };

  const EmailHandler = (e) => {
    setForm((previous) => ({
      ...previous,
      error: (form.email.value = e.target.value),
    }));
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setForm((previous) => ({
        ...previous,
        error: (form.email.error = "недопустимые символы в поле EMAIL"),
      }));
    } else {
      setForm((previous) => ({
        ...previous,
        error: (form.email.error = false),
      }));
    }
  };

  const PasswordHandler = (e) => {
    setForm((previous) => ({
      ...previous,
      error: (form.password.value = e.target.value.trim()),
    }));
    if (e.target.value < 6) {
      setForm((previous) => ({
        ...previous,
        error: (form.password.error =
          "поле пароль не может иметь меньше 6 символов!"),
      }));
      if (!e.target.value) {
        setForm((previous) => ({
          ...previous,
          error: (form.password.error = "поле пароль не может быть пустым!"),
        }));
      }
    } else {
      setForm((previous) => ({
        ...previous,
        error: (form.password.error = false),
      }));
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
          onBlur={BlurHahdler}
          type="email"
          value={form.email.value}
          onChange={EmailHandler}
          placeholder="email"
          name="email"
        />
        <input
          className={style.input}
          onBlur={BlurHahdler}
          type="password"
          value={form.password.value}
          onChange={PasswordHandler}
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
