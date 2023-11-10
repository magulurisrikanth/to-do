import { combineReducers } from 'redux';
import todoReducer from './TodoReducer'; // Import your todoReducer here

// You can import and add other reducers here if needed

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;