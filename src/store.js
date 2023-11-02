import { combineReducers, createStore  } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const todoReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, action.payload];
      case 'DELETE_TODO':
        return state.filter((todo) => todo.id !== action.payload);
      case 'TOGGLE_TODO':
        return state.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        );
      case 'CLEAR_COMPLETED':
        return state.filter((todo) => !todo.completed);
      default:
        return state;
    }
  };
  
  const filterReducer = (state = 'ALL', action) => {
    switch (action.type) {
      case 'SET_FILTER':
        return action.payload;
      default:
        return state;
    }
  };
  
  const rootReducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
  });
  
 
  const persistConfig = {
    key: 'root', // storage key
    storage,
    // Optionally, you can blacklist specific reducers you don't want to persist
    blacklist: ['filter'],
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  
  export { store, persistor };
  