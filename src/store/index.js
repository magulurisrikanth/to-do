import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'; // Import your rootReducer
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choose your storage option (localStorage, AsyncStorage, etc.)



const persistConfig = {
  key: 'root', // This key is used to persist only a specific part of the state if needed
  storage,
  // You can configure other options like whitelist or blacklist here
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(/* Apply middleware here if needed */)
);

const persistor = persistStore(store);

export { store, persistor };
