import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { ContactForm } from './FormContacts/ContactsForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export const App = () => {
  const contacts = useSelector(state => state.changeContacts.items);
  const filter = useSelector(state => state.filter);

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );
  }, [contacts, filter]);

  return (
    <Layout>
      <ContactForm />
      <Filter />
      <ContactsList isFilteredContacts={filteredContacts} />
      <GlobalStyle />
    </Layout>
  );
};
