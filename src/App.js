import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import ContactSearch from "./components/ContactSearch";
import ContactForm from "./components/ContactForm";
import Toast from "./components/Toast";

const initialContacts = [
  { id: 1, name: "Alice Smith", phone: "123-456-7890" },
  { id: 2, name: "Bob Johnson", phone: "098-765-4321" }
];

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    setTimeout(() => {
      setContacts(initialContacts);
      setLoading(false);
    }, 900); // Simulate loading delay
  }, []);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addContact = contact => {
    setContacts(prev => [
      ...prev,
      {
        ...contact,
        id: prev.length ? prev[prev.length - 1].id + 1 : 1
      }
    ]);
    setToast({
      show: true,
      message: "Contact added!",
      type: "success"
    });
  };

  const handleSearch = term => {
    setSearchTerm(term);
    if (contacts.length > 0 && !contacts.some(c =>
      c.name.toLowerCase().includes(term.toLowerCase()))) {
      setToast({
        show: true,
        message: "No contacts found.",
        type: "info"
      });
    }
  };

  return (
    <div className="container">
      <h1>Contact List</h1>
      <ContactSearch searchTerm={searchTerm} setSearchTerm={handleSearch} />
      {loading
        ? <div className="empty">Loading contacts...</div>
        : <ContactList contacts={filteredContacts} />}
      <ContactForm addContact={addContact} />
      <Toast toast={toast} setToast={setToast} />
    </div>
  );
}

export default App;
