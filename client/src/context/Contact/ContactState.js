import React, { useReducer } from "react";
import uuid from "uuid";
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

// Del Contact

// Set Current Contact

// Clear Current Contact

// Update Contact

// Filter Contacts

// Clear Filter

  return (
      <ContactContext.Provider 
      value={{
          contacts:state.contacts
      }}
      >
          { props.children }
      </ContactContext.Provider>
  )

};

export default ContactState;