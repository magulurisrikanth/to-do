// TodoApp.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo, clearCompleted } from './actions';

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
    <div>
      <h1>To-Do App</h1>
      <div>
        <input
          type="text"
          placeholder="Add a to-do"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => handleToggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => handleClearCompleted()}>Clear Completed</button>
      </div>
      <div>
        <label>Show: </label>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'ALL' })}>All</button>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'ACTIVE' })}>Active</button>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'COMPLETED' })}>Completed</button>
      </div>
    </div>
  );
};

export default TodoApp;
