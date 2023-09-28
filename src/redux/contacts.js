import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const slice = createSlice({
  name: 'contacts/addContact',
  initialState,
  reducers: {
    addContact(state, action) {
      // добавить в массив
    },
    deleteContact(state, action) {
      // удалить из массива
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export const changeContacts = slice.reducer;
