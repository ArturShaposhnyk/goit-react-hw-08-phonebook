import { useState, useEffect } from "react";
import { Button} from "react-bootstrap";
import { getContact } from "Store/Selectors";
import { useDispatch, useSelector } from "react-redux";
import { addContactsThunk, getContactsThunk } from "Store/ContactsThunk";
import css from './ContactForm.module.css'
import { Notify } from 'notiflix';

const ContactForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    useEffect(() => {
        dispatch(getContactsThunk());
    }, [dispatch]);

    const handleChange = e => {
        const { name, value } = e.target;
        name === 'name' ? setName(value) : setNumber(value)
    };

    const handleSubmit = e => {
        e.preventDefault()
        if (
            contacts.some(
                value => value.name.toLowerCase() === name.toLowerCase()
            )
        ) {
            Notify.failure(`${name} is alredy in contacts`)
        } else {
            dispatch(addContactsThunk({ name, number }))
        }
        reset()
    };

    

    const reset = () => {
        setName('')
        setNumber('')
    };

    const contacts = useSelector(getContact)

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.label}>Name
                <input
                    type="text"
                    name="name"
                    placeholder="Enter a name"
                    className={css.input}
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    onChange={handleChange}
                    required
                />
            </label>
            <label className={css.label}>Number
                <input
                    type="tel"
                    name="number"
                    placeholder="Enter a number"
                    className={css.input}
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    onChange={handleChange}
                    required
                />
            </label>
            <Button className={css.AddButton}  type="submit" style={{display: 'block', margin: 'auto'}}>Add Contact</Button>
        </form>
    )
}

export default ContactForm;