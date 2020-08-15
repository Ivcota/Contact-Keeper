import React, { useState, useContext } from "react";
import ContactContext from "../../context/Contact/contactContext";

const ContactForm = () => {
  // Bring the context inside of the component
  const contactContext = useContext(ContactContext);

  // Adding useState just like this.setState({})

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  // deconstruct the state from the context
  const { name, email, phone, type } = contact;

  //  Updates the state on change based on the name.

  const onChange = (e) => {
    //   This targets the name field
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Add the contact up the props of the contactContext
    contactContext.addContact(contact);
    // Reset the state of the form component
    setContact({ name: "", email: "", phone: "", type: "personal" });
  };

  return (
    //   Call the onSubmit Function when submited
    <form onSubmit={onSubmit}>
      <h2 className="primary">Add Contact</h2>
      {/* The name will be targeted with onChange */}
      <input
        className="form-control controler"
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        className="form-control controler"
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        className="form-control controler"
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5 style={{ marginTop: "1em" }}>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
      />
      Personal{""}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        onChange={onChange}
      />
      Professional{""}
      <div>
        <input
          type="submit"
          value="Add Contact"
          className="btn btn-primary btn-block"
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default ContactForm;
