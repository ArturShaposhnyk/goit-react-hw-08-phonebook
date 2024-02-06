import { useDispatch, useSelector } from "react-redux";
import { getContact, getFilter } from "Store/Selectors";
import { delContactsThunk } from "Store/ContactsThunk";
import css from './ContactList.module.css'
import { Button} from "react-bootstrap";

const ContactList = function () {
    const dispatch = useDispatch();
    const filtered = useSelector(getFilter);
    const contacts = useSelector(getContact);

    const filterContact = e => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filtered.toLowerCase())
        )
    };

    const filteredContacts = filterContact();

    return (
        <ul className={css.list}>
            {filteredContacts.map(({ id, name, number }) => (
                <li className={css.item} key={id}>
                    <p className={css.name}>
                        {name}: {number}
                        <Button 
                            data-id={id}
                            onClick={() => dispatch(delContactsThunk(id))}
                            className={css.button}
                            type="button">
                            Delete
                        </Button>
                    </p>
                </li>
            ))}
        </ul>
    )
}

export default ContactList;