// TodoApp.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo, clearCompleted } from './store/action/ActionCreator';
import TodoList from './TodoList';
import TodoFilters from './TodoFilters';

const TodoApp = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md w-1/3">
      <h1 className="text-4xl font-bold text-center mb-4">To-Do App</h1>
      <div className="flex items-center mb-4">
        <input
          className="bg-white border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring focus:border-blue-500"
          type="text"
          placeholder="Add a to-do"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 ml-4 rounded-r hover:bg-blue-600 transition"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <div className="mt-4 text-center">
        <button
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
          onClick={() => handleClearCompleted()}
        >
          Clear Completed
        </button>
      </div>
      <TodoFilters />
      <ul className='my-3'>
        {todos.map((todo) => (
          <TodoList handleDeleteTodo={handleDeleteTodo} todo={todo}  handleToggleTodo={handleToggleTodo}/>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default TodoApp;
