import React from "react";
import Close from "./assets/close.svg"
export default function TodoList(props) {
  const { handleToggleTodo, todo, handleDeleteTodo } = props;
  return (
    <li key={todo.id} className={`flex justify-between items-center my-2 p-2 border-2 border-solid border-gray-300 ${todo.completed ? "bg-gray-100" : ""}`}>
      <span onClick={() => handleToggleTodo(todo.id)} className={`cursor-pointer ${todo.completed ? "line-through" : ""}`}>
        {todo.text}
      </span>
      <button className="text-red-500 hover:text-red-700" onClick={() => handleDeleteTodo(todo.id)}>
        <img src={Close} alt="" className="w-8"/>
      </button>
    </li>
  );
}
