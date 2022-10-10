import React, { useState, useEffect } from "react";
import style from "./button.module.scss";

export const AddButton = ({ PostData, setText, setHeading, open, setOpen }) => {
  const [textDirty, setTextDirty] = useState(false);
  const [titleDirty, setTitleDirty] = useState(false);
  const [textErrror, setTextError] = useState(
    "поле текст не может быть пустым!"
  );
  const [titleErrror, setTitleError] = useState(
    "поле заголовок не может быть пустым!"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (textErrror || titleErrror) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [textErrror, titleErrror]);

  const change1 = (e) => {
    if (!e.target.value) {
      setTitleError("поле не ЗАГОЛОВОК может быть пустым!");
    } else {
      setTitleError("");
    }
  };

  const change2 = (e) => {
    if (!e.target.value) {
      setTextError("поле ТЕКСТ не может быть пустым!");
    } else {
      setTextError("");
    }
  };

  const HandlerHeading = (event) => {
    setHeading(event.target.value);
  };
  const HandlerText = (event) => {
    setText(event.target.value);
  };

  const BlurHahdler = (e) => {
    switch (e.target.name) {
      case "title":
        setTitleDirty(true);
        break;
      case "body":
        setTextDirty(true);
        break;
    }
  };

  return (
    <div>
      {open ? (
        <div className={style.button__openContainer}>
          <div className={style.button__inputBox}>
            <input
              name="title"
              onChange={change1}
              className={style.button__inputs}
              onInput={HandlerHeading}
              onBlur={(e) => BlurHahdler(e)}
              placeholder="Heading?"
            />
            <input
              name="body"
              onChange={change2}
              onBlur={(e) => BlurHahdler(e)}
              className={style.button__inputs}
              onInput={HandlerText}
              placeholder="Text?"
            />
            <button className={style.button} disabled={!formValid} onClick={(e) => PostData(e)}>
              Save
            </button>
          </div>
        </div>
      ) : (
        <a href="#123" className={style.button} onClick={(e) => setOpen(!open)}>
          Add post
        </a>
      )}
    </div>
  );
};
