// actions.js
export const addTodo = (text) => {
    return {
      type: 'ADD_TODO',
      payload: {
        id: new Date().getTime(),
        text,
        completed: false, // New todos are initially not completed
      },
    };
  };
  
  export const deleteTodo = (id) => {
    return {
      type: 'DELETE_TODO',
      payload: id,
    };
  };
  
  export const toggleTodo = (id) => {
    return {
      type: 'TOGGLE_TODO',
      payload: id,
    };
  };
  
  export const clearCompleted = () => {
    return {
      type: 'CLEAR_COMPLETED',
    };
  };
  
  export const setFilter = (filter) => {
    return {
      type: 'SET_FILTER',
      payload: filter,
    };
  };
  