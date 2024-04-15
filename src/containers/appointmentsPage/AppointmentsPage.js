import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, addAppointment}) => {
  const [formName, setFormName] = useState("")
  const [formContact, setFormContact] = useState("")
  const [formDate, setFormDate] = useState("")
  const [formTime, setFormTime] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formName.trim() || !formDate.trim() || !formTime.trim()) return;
    addAppointment(formName, formContact, formDate, formTime)
    setFormName("")
    setFormContact("")
    setFormDate("")
    setFormTime("")
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          formName={formName}
          setFormName={setFormName}
          formContact={formContact}
          setFormContact={setFormContact}
          formDate={formDate}
          setFormDate={setFormDate}
          formTime={formTime}
          setFormTime={setFormTime}
          handleSubmit={handleSubmit}
          contacts={contacts}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList datalist={appointments}/>
      </section>
    </div>
  );
};