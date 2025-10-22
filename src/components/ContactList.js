import React from "react";

function Avatar({ name }) {
  const initial = name ? name.charAt(0).toUpperCase() : "?";
  return <div className="avatar">{initial}</div>;
}

function ContactList({ contacts }) {
  if (contacts.length === 0)
    return <div className="empty">No contacts to display.</div>;

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Avatar name={contact.name} />
            <span>{contact.name} - {contact.phone}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
