import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Appointment = () => {
  const [startDate, setStartDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const timeSlots = ['10:00 AM - 10:15 AM', '11:00 AM - 11:15 AM', '12:00 PM - 12:15 PM', '01:00 PM - 01:15 PM', '02:00 PM - 02:15 PM', '03:00 PM - 03:15 PM'];

  const handleDateChange = (date) => {
    const day = date.getDay();
    if (day === 0 || day === 6) {
      alert('Appointments are not available on weekends.');
      return;
    }
    setStartDate(date);
    setSelectedSlot(null); // Reset selected slot when date changes
  };

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleAppointmentClick = () => {
    if (selectedSlot && startDate) {
      setShowModal(true);
    } else {
      alert('Please select a date and time slot.');
    }
  };

  return (
    <div className='py-4'>
      <h4 className='text-center font-semibold py-2'>Make an Appointment</h4>
      <div className="appointment m-3 p-3 border-1 rounded-lg shadow-md">
        <div className="mb-3 row flex align-items-center justify-content-center">
          <div className="col-md-2  flex align-items-center justify-center pt-1">
            <label htmlFor="date" className="text-base font-medium mb-2 appoint-date ">Date :- </label>
          </div>
          <div className="col-md-10  flex align-items-center justify-center ">
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              placeholderText="Pick Me"
              className="date appoint-input form-control text-center w-full"
              id="pickUpDate"
              name="date"
            />
          </div>
        </div>
        {startDate && (
          <div className="row d-flex align-items-center justify-content-center mb-md-3">
            <div className="col-md-2">
              <label htmlFor="text" className="text-base font-medium mb-2 appoint-date">Hour :- </label>
            </div>
            <div className="col-md-10 flex align-items-md-center">
              <div id="slotData" className="row">
                {timeSlots.map((slot, index) => (
                  <div className="col-md-4 mb-3 timePick p-1" key={index}>
                    <div
                      className={`card border-1 shadow-md appoint-input time-slot h-14 flex align-items-center justify-center text-sm ${selectedSlot === slot ? 'activeSlot' : ''}`}
                      data-id={slot}
                      onClick={() => handleSlotClick(slot)}
                      style={{ cursor: 'pointer' }}
                    >
                      {slot}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <button
          type="button"
          className="mx-auto mt-4 text-white rounded appointmentAdd appoint-btn d-block p-2 bg-gradient-to-r from-[#F4829D] to-[#115C8E] hover:from-[#115C8E] hover:to-[#F4829D]"
          onClick={handleAppointmentClick}
        >
          Make an Appointment
        </button>

      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Make Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form method="POST" action="https://pro.unogreencard.com/UNO123" acceptCharset="UTF-8" id="addAppointmentForm">
            <input name="_token" type="hidden" value="sEFQLdChiO8Sd0mNoaeZCUmwSh5LBqdFVYC9G3ox" />
            <div className="mb-3 form-group">
              <label htmlFor="name" className="form-label required">Name :</label>
              <input className="form-control custom-placeholder" required placeholder="Enter Name" id="paypalIntUserName" name="name" type="text" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label required">Email :</label>
              <input className="form-control custom-placeholder" required placeholder="Enter Email" id="paypalIntUserEmail" name="email" type="text" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone :</label>
              <div className="row">
                <div className="col-md-9">
                  <input className="form-control custom-placeholder" placeholder="Enter Phone" id="paypalIntUserPhone" name="phone" type="text" />
                </div>
              </div>
            </div>
            <input id="timeSlot" name="from_time" type="hidden" value={selectedSlot ? selectedSlot.split(' - ')[0] : ''} />
            <input id="toTime" name="to_time" type="hidden" value={selectedSlot ? selectedSlot.split(' - ')[1] : ''} />
            <input id="Date" name="date" type="hidden" value={startDate ? startDate.toISOString().split('T')[0] : ''} />
            <div className="modal-footer pt-0">
              <button type="submit" className="submit-btn btn btn-primary m-0" id="serviceSave">Save</button>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Discard
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      {/* CSS */}
      <style jsx>{`
      .activeSlot {
      background: linear-gradient(to right, #F4829D, #115C8E);
      border: none;
      color: white;
      }
    `}</style>

    </div>
  );
}

export default Appointment;
