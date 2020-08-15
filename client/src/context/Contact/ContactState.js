import React, { useReducer } from "react";
import {v4 as uuidv4} from "uuid"; 
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  UPDATE_CONTACT,
} from "./../types";

const ContactState = (props) => {
  // Set up the inital state for the application
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Iverson Diles",
        email: "ivcotad@gmail.com",
        phone: "920-589-6254",
        type: "personal",
      },
      {
        id: 2,
        name: "James Cook",
        email: "jc@gmail.com",
        phone: "920-589-6254",
        type: "personal",
      },
      {
        id: 3,
        name: "Marry B Johnson",
        email: "mbj@gmail.com",
        phone: "920-589-6254",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // CRUD Functions

  // Add Contact
  const addContact = (contact) => {
    // using uuid to generate an id for us... and then dispatching the rest to the reducer
    contact.id = uuidv4();
    dispatch({type:ADD_CONTACT, payload: contact})
  }

  // Del Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  // The while application will be inside this context provider... make sure to add the state and functions to the value object
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
