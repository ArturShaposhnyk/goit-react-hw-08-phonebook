import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk, getContactsThunk } from 'Store/ContactsThunk';
import css from './ContactForm.module.css';
import { Notify } from 'notiflix';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', number: '' });

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.some(
        value => value.name.toLowerCase() === formData.name.toLowerCase()
      )
    ) {
      Notify.failure(`${formData.name} is already in contacts`);
    } else {
      dispatch(addContactsThunk(formData));
    }
    reset();
  };

  const reset = () => {
    setFormData({ name: '', number: '' });
  };

  const contacts = useSelector(state => state.contacts.items);

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter a name"
          className={css.input}
          value={formData.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          placeholder="Enter a number"
          className={css.input}
          value={formData.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          onChange={handleChange}
          required
        />
      </label>
      <Button
        className={css.AddButton}
        type="submit"
        style={{ display: 'block', margin: 'auto' }}
      >
        Add Contact
      </Button>
    </form>
  );
};

export default ContactForm;
