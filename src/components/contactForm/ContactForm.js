import React from "react";

export const ContactForm = ({
  formName,
  setFormName,
  formNumber,
  setFormNumber,
  formEmail,
  setFormEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={formName} 
        onChange={(e) => {setFormName(e.target.value)}} 
        placeholder="Enter Contact Name"/>
      <input
        type="tel"
        value={formNumber}
        onChange={(e) => {setFormNumber(e.target.value)}}
        pattern="^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$"
        placeholder="Enter Contact Mobile Phone Number"/>
      <input
        type="email"
        value={formEmail}
        onChange={(e) => {setFormEmail(e.target.value)}}
        placeholder="Enter Contact Email"/>
      <input type="submit" value="Submit"/>
    </form>
  );
};

