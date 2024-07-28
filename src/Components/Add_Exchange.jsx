import React, { useState } from 'react';
import { RiContactsBookFill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';

const Add_Exchange = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleExchangeContactClick = () => {
        downloadContact(); // Call downloadContact function when clicked
        setIsModalOpen(true); // Optionally open modal after downloading
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const downloadContact = () => {
        // Prepare contact information
        const contactInfo = {
            name: "Aditya",
            email: "aditya@example.com",
            phone: "9876543210",
            remark: "Sample remark"
        };

        // Create a text file with contact details
        const contactText = `Name: ${contactInfo.name}\nEmail: ${contactInfo.email}\nPhone: ${contactInfo.phone}\nRemark: ${contactInfo.remark}`;
        const blob = new Blob([contactText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        // Create a temporary anchor element and trigger download
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'AddContact.txt';
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
    };

    return (
        <div className='w-full'>
            <div className='md:bottom-7 md:ml-32 sm:bottom-7 sm:ml-9 position-absolute position-fixed flex align-items-center justify-center gap-4 z-50'>
                <button
                    className="sm:text-xs md:text-sm p-2 text-white rounded flex align-items-center justify-center gap-2 bg-gradient-to-r from-[#F4829D] to-[#115C8E] hover:from-[#115C8E] hover:to-[#F4829D]"
                    onClick={handleExchangeContactClick} // Updated click handler
                >
                    <RiContactsBookFill /> Add to contact
                </button>
                <button
                    className="sm:text-xs md:text-sm p-2 text-white rounded flex align-items-center justify-center gap-2 bg-gradient-to-r from-[#F4829D] to-[#115C8E] hover:from-[#115C8E] hover:to-[#F4829D]"
                    onClick={handleExchangeContactClick}
                >
                    <RiContactsBookFill /> Exchange contact
                </button>
            </div>
            <div className="d-flex pt-12 text-end justify-content-evenly">
                <div>
                    <a className="cursor-pointer text-decoration-none text-dark terms-policies-btn" href="https://pro.unogreencard.com/UNO123/privacy-policy/2">
                        <small>All rights reserved by Aditya Shrivastava ❤️</small>
                    </a>
                </div>
            </div>

            {/* Modal */}
            <Modal show={isModalOpen} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Exchange</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form method="POST" acceptCharset="UTF-8" id="addAppointmentForm">
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
                            <input className="form-control custom-placeholder" placeholder="Enter Phone" id="paypalIntUserPhone" name="phone" type="text" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="remark" className="form-label">Remark :</label>
                            <textarea className="form-control custom-placeholder" placeholder="Enter remark" id="paypalIntUserremark" name="remark" type="text" />
                        </div>
                        <div className="modal-footer pt-0">
                            <button type="submit" className="submit-btn btn btn-primary m-0">Save</button>
                            <Button onClick={handleCloseModal}>
                                Discard
                            </Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Add_Exchange;
