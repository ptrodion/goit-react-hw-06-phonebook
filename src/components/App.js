import { useState, useEffect, useMemo } from 'react';
import { nanoid } from 'nanoid';

import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { ContactForm } from './FormContacts/ContactsForm';
// import { Filter } from './Filter/Filter';
// import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  return (
    <Layout>
      <ContactForm />
      {/* <Filter filter={filter} onFilter={changeContactsFilter} />
      <ContactsList allContacts={filteredContacts} /> */}
      <GlobalStyle />
    </Layout>
  );
};
