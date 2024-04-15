import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker"

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  formName,
  setFormName,
  formContact,
  setFormContact,
  formDate,
  setFormDate,
  formTime,
  setFormTime,
  handleSubmit,
  contacts
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formName}
        onChange={(e) => {setFormName(e.target.value)}}
        placeholder="Enter Appointment Title"/>
      <input
        type="date"
        value={formDate}
        onChange={(e) => {setFormDate(e.target.value)}}
        min={getTodayString()}
        placeholder="Enter Date of Appointment"/>
      <input
        type="time"
        value={formTime}
        onChange={(e) => {setFormTime(e.target.value)}}
        placeholder="Enter Time of Appointment"/>
      <ContactPicker 
        value={formContact}
        onChange={(e) => {setFormContact(e.target.value)}}
        contacts={contacts}/>
      <input type="submit" value="Submit"/>
    </form>
  );
};
