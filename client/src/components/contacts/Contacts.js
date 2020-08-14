import React, { useContext } from 'react'
import ContactContext from '../../context/Contact/contactContext'
import ContactItem from './ContactItem';


const Contacts = () => {

    const contactContext = useContext(ContactContext);
    const {contacts} = contactContext;
    return (
        <React.Fragment>
            {contacts.map((contact) => (
                <ContactItem key={contact.id} contact={contact} />
            ))}
        </React.Fragment>
    )
}

export default Contacts
