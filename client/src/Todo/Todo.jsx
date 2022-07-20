import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import SingleTodo from "./SingleTodo";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  const postTodos = () => {
    return axios
      .post("http://localhost:8000/todo", { title: title })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTodos = () => {
    return axios
      .get("http://localhost:8000/todo")
      .then((res) => {
        console.log(res);
        setData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>Todos</h1>

      <input
        placeholder="Enter todos.."
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={postTodos}>Add</button>
      {data.map((item) => {
        return (
          <React.Fragment key={item?.id}>
            <SingleTodo item={item} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Todo;
