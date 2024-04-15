import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact}) => {
  const [formName, setFormName] = useState("")
  const [formNumber, setFormNumber] = useState("")
  const [formEmail, setFormEmail] = useState("")
  const [isDuplicate, setIsDuplicate] = useState(false)

  useEffect(() => {
    setIsDuplicate(contacts.some(contact => contact.name === formName))
  }, [formName, contacts])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formName.trim() || !formNumber.trim() || !formEmail.trim()) return;
    if (isDuplicate === true) {
      alert("Contact already exists, please check contact list for duplicate details");
      return;
    }
    addContact(formName, formNumber, formEmail)
    setFormName("")
    setFormNumber("")
    setFormEmail("")
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          formName={formName} 
          setFormName={setFormName} 
          formNumber={formNumber} 
          setFormNumber={setFormNumber} 
          formEmail={formEmail}
          setFormEmail={setFormEmail}
          handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList datalist={contacts}/>
      </section>
    </div>
  );
};
