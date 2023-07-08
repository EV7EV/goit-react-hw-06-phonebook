import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts/contactSlice';
import filterReducer from './contacts/filterSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: { contacts: contactReducer, filters: filterReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// The store now has redux-thunk added and the Redux DevTools Extension is turned on
export const persistor = persistStore(store);
