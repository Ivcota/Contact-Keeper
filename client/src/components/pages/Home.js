import React from "react";
import Contacts from "./../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";

const Home = () => {
  return (
    <React.Fragment>
      <h1>
        <strong>Home</strong>
      </h1>
      <div className="row">
        <div className="col-md-6">
          <ContactForm/>
        </div>
        <div className="col-md-6">
          <Contacts />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
