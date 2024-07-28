import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const AppointmentForm = ({ showModal, setShowModal, selectedSlot, startDate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointmentData = {
      ...formData,
      from_time: selectedSlot ? selectedSlot.split(' - ')[0] : '',
      to_time: selectedSlot ? selectedSlot.split(' - ')[1] : '',
      date: startDate ? startDate.toISOString().split('T')[0] : '',
    };

    try {
      const response = await axios.post('/api/appointments', appointmentData);
      if (response.status === 200) {
        alert('Appointment successfully booked!');
        setShowModal(false);
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Make Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 form-group">
            <label htmlFor="name" className="form-label required">Name :</label>
            <input
              className="form-control custom-placeholder"
              required
              placeholder="Enter Name"
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label required">Email :</label>
            <input
              className="form-control custom-placeholder"
              required
              placeholder="Enter Email"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone :</label>
            <input
              className="form-control custom-placeholder"
              placeholder="Enter Phone"
              id="phone"
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <input
            id="from_time"
            name="from_time"
            type="hidden"
            value={selectedSlot ? selectedSlot.split(' - ')[0] : ''}
          />
          <input
            id="to_time"
            name="to_time"
            type="hidden"
            value={selectedSlot ? selectedSlot.split(' - ')[1] : ''}
          />
          <input
            id="date"
            name="date"
            type="hidden"
            value={startDate ? startDate.toISOString().split('T')[0] : ''}
          />
          <div className="modal-footer pt-0">
            <button type="submit" className="submit-btn btn btn-primary m-0">
              Save
            </button>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Discard
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AppointmentForm;
