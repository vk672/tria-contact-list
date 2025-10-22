import React, { useState } from "react";

function validateContact({ name, phone }) {
  const phoneRegex = /^[0-9\-+ ]{10,}$/;
  if (!name.trim()) return { valid: false, message: "Name cannot be empty." };
  if (!phone.trim()) return { valid: false, message: "Phone cannot be empty." };
  if (!phoneRegex.test(phone))
    return { valid: false, message: "Invalid phone format." };
  return { valid: true };
}

function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const validation = validateContact({ name, phone });
    if (!validation.valid) {
      setError(validation.message);
      return;
    }
    addContact({ name, phone });
    setName("");
    setPhone("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Contact</h2>
      <input
        type="text"
        placeholder="Contact name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Contact phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <button type="submit">Add</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default ContactForm;
