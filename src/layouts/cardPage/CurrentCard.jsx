import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import style from "./card.module.scss";

export const CurrentCard = () => {
  const { id } = useParams();
  const [items, setItems] = useState(null); // { title: '', body: ''}
  const [editText, setEditText] = useState(false);
  const [textDirty, setTextDirty] = useState(false);
  const [titleDirty, setTitleDirty] = useState(false);
  const [textErrror, setTextError] = useState(
    "поле текст не может быть пустым!"
  );
  const [titleErrror, setTitleError] = useState(
    "поле заголовок не может быть пустым!"
  );
  const [formValid, setFormValid] = useState(false);

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

  useEffect(() => {
    if (textErrror || titleErrror) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [textErrror, titleErrror]);

  const TittleHandler = (e) => {};

  const client = Axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
  });
  useEffect(() => {
    client.get(`/${id}`).then((response) => {
      setItems(response.data);
    });
  }, [id]);

  const handleChange = () => {
    Axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, items)
      .then((response) => {})
      .catch((error) => {
        console.log("error");
      });
  };

  const change1 = (e) => {
    if (!e.target.value) {
      setTitleError("поле не ЗАГОЛОВОК может быть пустым!");
    } else {
      setTitleError("");
    }
    const changeItems = items;
    changeItems[e.currentTarget.id] = e.currentTarget.value;
    setItems({ ...changeItems });
  };

  const change2 = (e) => {
    if (!e.target.value) {
      setTextError("поле ТЕКСТ не может быть пустым!");
    } else {
      setTextError("");
    }
    const changeItems = items;
    changeItems[e.currentTarget.id] = e.currentTarget.value;
    setItems({ ...changeItems });
  };

  return (
    <div className={style.card}>
      {items && (
        <div className={style.card__box}>
          {editText ? (
            <>
              {" "}
              <div className={style.card__form}>
                <input
                  type="text"
                  name="title"
                  id={"title"}
                  value={items.title}
                  onChange={change1}
                  className={style.card__headForm}
                  onBlur={(e) => BlurHahdler(e)}
                />
                <textarea
                  name="body"
                  id={"body"}
                  value={items.body}
                  onChange={change2}
                  className={style.card__bodyForm}
                  onBlur={(e) => BlurHahdler(e)}
                />
              </div>{" "}
              <button onClick={handleChange} className={style.card__btn}>
                {" "}
                save
              </button>
            </>
          ) : (
            <>
              <h1 className={style.card__heading}>{items.title}</h1>
              <p className={style.card__paragraph}>{items.body}</p>
            </>
          )}

          {editText ? (
            <button
              onClick={(e) => setEditText(!editText)}
              className={style.card__btn}
              disabled={!formValid}
            >
              Close
            </button>
          ) : (
            <button
              className={style.card__btn}
              onClick={(e) => setEditText(!editText)}
            >
              edit
            </button>
          )}
        </div>
      )}
    </div>
  );
};
