import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import style from "./items.module.scss";
import Axios from "axios";
import { AddButton } from "components/addButton/addBtn";

export const Items = () => {
  const [items, setItems] = useState([]);
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const client = Axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
  });

  useEffect(() => {
    client.get("?userId=1").then((response) => {
      setItems(response.data);
    });
  }, [setItems]);

  const PostData = (e) => {
    setOpen(!open);
    Axios.post("https://jsonplaceholder.typicode.com/posts/?userId=1", {
      userId: 1,
      title: heading,
      body: text,
    })
      .then((response) => setItems([...items, response.data]))
      .catch((err) => console.log(err));
  };

  const deletePost = (id) => {
    client.delete(`${id}`);
    setItems(
      items.filter((item) => {
        return item.id !== id;
      })
    );
  };
  return (
    <div className={style.items}>
      <AddButton
        PostData={PostData}
        setText={setText}
        setHeading={setHeading}
        open={open}
        setOpen={setOpen}
      />
      {items.map((item) => (
        <div className={style.items__container} key={item.Id}>
          <h1 className={style.items__heading}>{item.title}</h1>
          <NavLink
            className={style.items__link}
            to={`/CurrentCard/${item.id}`}
            key={item.Id}
          >
            Подробнее...
          </NavLink>
          <p className={style.items__paragraph}>{item.body}</p>
          <button
            className={style.items__btn}
            onClick={() => deletePost(item.id)}
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};
