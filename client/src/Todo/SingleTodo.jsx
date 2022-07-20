import React from "react";

const SingleTodo = (props) => {
  const { item, deleteTodo, updateTodo } = props;

  return (
    <div
      style={{
        border: "2px solid black",
        margin: "10px auto",
        width: "50%",
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <h2>{item?.id}</h2>
      <h3>{item?.title}</h3>
      <h3>{item?.status == false ? "Pending" : "Done"}</h3>
      <button onClick={() => updateTodo(item?.id, item?.status)}>toggle</button>
      <button onClick={() => deleteTodo(item?.id)}>delete</button>
    </div>
  );
};

export default SingleTodo;
