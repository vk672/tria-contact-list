import React from "react";

function ContactSearch({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search contact by name..."
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
    />
  );
}

export default ContactSearch;
