import React from "react";
import '../index.css';


const Todo = (props) => {
  return (
    <div className="one-todo">
      <div
        className="text"
        style={{
          textDecoration: props.oneTodo.completed ? "line-through" : "",
        }}
        onClick={props.toggleComplete}
      >
        {props.oneTodo.text}
      </div>
      <button onClick={props.onDelete} className="delete">
        X
      </button>
    </div>
  );
};

export default Todo;
