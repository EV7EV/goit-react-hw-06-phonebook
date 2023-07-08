import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const inicialContacts = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactSlise = createSlice({
  name: 'contacts',
  initialState: inicialContacts,

  reducers: {
    addContact: {
      // повертає поточний стейт і додає нове значення
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
      //   підготовча функція налаштування payload
      prepare: data => {
        return { payload: { id: nanoid(), ...data } };
      },
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

const contactsReducer = persistReducer(persistConfig, contactSlise.reducer);

export default contactsReducer;
export const { addContact, deleteContact } = contactSlise.actions;
