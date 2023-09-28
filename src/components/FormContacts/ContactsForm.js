import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts';

import {
  FormStyle,
  LabelStyle,
  FieldStyle,
  ButtonStyle,
} from './ContactsForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // перед ти як додати перевірити с local storage є такє вжє їм'я чи немає.
    dispatch(addContact(values));
    actions.resetForm();
  };
  return (
    <div>
      <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
        <FormStyle>
          <LabelStyle>
            Name
            <FieldStyle
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </LabelStyle>
          <LabelStyle>
            Number
            <FieldStyle
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </LabelStyle>
          <ButtonStyle type="submit">Add contact</ButtonStyle>
        </FormStyle>
      </Formik>
    </div>
  );
};
