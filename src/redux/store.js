import { configureStore } from '@reduxjs/toolkit';
// import { changeContacts } from './contacts';
// import { filterContacts } from './filter';

export const store = configureStore({
  reducer: {
    // change: changeContacts,
    // filter: filterContacts,
  },
});
