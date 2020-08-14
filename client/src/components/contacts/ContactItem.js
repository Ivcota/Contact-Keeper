import React from "react";

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;

  return (
    <div className="card bg-light card-item-main">
      <h3 className="text-primary mainItem">
        {name}{" "}
        <span
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul>
        {email && (
          <li>
            <i className="fas fa-envelope-open"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"></i> {phone}
          </li>
        )}
      </ul>
      <div className="row">
          <div className="col-6">
              <button className="btn btn-primary btn-space">Edit</button>
              <button className="btn btn-danger">Delete</button>
          </div>
      </div>
    </div>
  );
};

export default ContactItem;
