import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { MdArrowForwardIos } from "react-icons/md";
import { ImCross } from "react-icons/im";
import LandingPageForm from './LandingPageForm';
import BlogForm from './BlogForm';
import TestimonialForm from './TestimonialForm';
import GalleryForm from './GalleryForm';
import ServiceForm from './ServiceForm';
import ProductForm from './ProductForm';
import PaymentForm from './PaymentForm';
import AppointmentForm from './AppointmentForm';
import AddContact from './AddContacts';

const AllForms = ({ showModal, setShowModal }) => {
    const [isLandingPageModalOpen, setLandingPageModalOpen] = useState(false);
    const [isBlogFormModalOpen, setBlogFormModalOpen] = useState(false);
    const [isTestimonialFormModalOpen, setTestimonialFormModalOpen] = useState(false);
    const [isGalleryFormModalOpen, setGalleryFormModalOpen] = useState(false);
    const [isServiceFormModalOpen, setServiceFormModalOpen] = useState(false);
    const [isProductFormModalOpen, setProductFormModalOpen] = useState(false);
    const [isPaymentFormModalOpen, setPaymentFormModalOpen] = useState(false);
    const [isAppointmentFormModalOpen, setAppointmentFormModalOpen] = useState(false);
    const [isContactFormModalOpen, setContactFormModalOpen] = useState(false);

    const [formData, setFormData] = useState(null);

    const handleAddLandingForm = () => {
        setLandingPageModalOpen(true);
    };

    const handleAddBlogForm = () => {
        setBlogFormModalOpen(true);
    };

    const handleAddTestimonialForm = () => {
        setTestimonialFormModalOpen(true);
    };

    const handleAddGalleryForm = () => {
        setGalleryFormModalOpen(true);
    };

    const handleAddServiceForm = () => {
        setServiceFormModalOpen(true);
    };

    const handleAddProductForm = () => {
        setProductFormModalOpen(true);
    };

    const handleAddPaymentForm = () => {
        setPaymentFormModalOpen(true);
    };

    const handleAddAppointmentForm = () => {
        setAppointmentFormModalOpen(true);
    };

    // Add Contact  
    const handleAddContactForm = () => {
        setContactFormModalOpen(true);
    };
    
    const handleClose = () => {
        setLandingPageModalOpen(false);
        setBlogFormModalOpen(false);
        setTestimonialFormModalOpen(false);
        setGalleryFormModalOpen(false);
        setServiceFormModalOpen(false);
        setProductFormModalOpen(false);
        setPaymentFormModalOpen(false);
        setAppointmentFormModalOpen(false);
        setContactFormModalOpen(false);
    };

    const handleUpdate = (data) => {
        setFormData(data);
    };

    return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Body>
                <div className="modal-content">
                    <div className="">
                        <div className="mt-3 row align-items-center">
                            <div className="text-center col-10">
                                <h5 className="modal-title" style={{ paddingLeft: '50px' }}>All Forms</h5>
                            </div>
                            <div className="p-0 col-2">
                                <button type="button" aria-label="Close" className="p-3 border-none btn btn-sm btn-icon btn-active-color-danger" onClick={() => setShowModal(false)}>
                                    <ImCross />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="flex cursor-pointer align-items-center justify-between p-2" onClick={handleAddLandingForm}>
                            <div className='flex align-items-center justify-center gap-2'>
                                {/* <img width="40" height="40" src="" alt="facebook-new" /> */}
                                <h6 className='pt-2'>Landing Page</h6>
                            </div>
                            <div>
                                <MdArrowForwardIos />
                            </div>
                        </div>
                        <div className="flex cursor-pointer align-items-center justify-between p-2" onClick={handleAddServiceForm}>
                            <div className='flex align-items-center justify-center gap-2'>
                                {/* <img width="40" height="40" src="" alt="instagram-new" /> */}
                                <h6 className='pt-2'>Our Services</h6>
                            </div>
                            <div>
                                <MdArrowForwardIos />
                            </div>
                        </div>
                        <div className="flex cursor-pointer align-items-center justify-between p-2" onClick={handleAddGalleryForm}>
                            <div className='flex align-items-center justify-center gap-2'>
                                {/* <img width="40" height="40" src="" alt="twitterx--v1" /> */}
                                <h6 className='pt-2'>Our Gallery</h6>
                            </div>
                            <div>
                                <MdArrowForwardIos />
                            </div>
                        </div>
                        <div className="flex cursor-pointer align-items-center justify-between p-2" onClick={handleAddProductForm}>
                            <div className='flex align-items-center justify-center gap-2'>
                                {/* <img width="40" height="40" src="" alt="linkedin" /> */}
                                <h6 className='pt-2'>Our Product</h6>
                            </div>
                            <div>
                                <MdArrowForwardIos />
                            </div>
                        </div>
                        <div className="flex cursor-pointer align-items-center justify-between p-2" onClick={handleAddTestimonialForm}>
                            <div className='flex align-items-center justify-center gap-2'>
                                {/* <img width="40" height="40" src="" alt="whatsapp--v1" /> */}
                                <h6 className='pt-2'>Our Testimonial</h6>
                            </div>
                            <div>
                                <MdArrowForwardIos />
                            </div>
                        </div>
                        <div className="flex cursor-pointer align-items-center justify-between p-2" onClick={handleAddBlogForm}>
                            <div className='flex align-items-center justify-center gap-2'>
                                {/* <img width="40" height="40" src="" alt="new-post" /> */}
                                <h6 className='pt-2'>Our Blog</h6>
                            </div>
                            <div>
                                <MdArrowForwardIos />
                            </div>
                        </div>
                        <div className="flex cursor-pointer align-items-center justify-between p-2" onClick={handleAddPaymentForm}>
                            <div className='flex align-items-center justify-center gap-2'>
                                {/* <img width="40" height="40" src="" alt="new-post" /> */}
                                <h6 className='pt-2'>Our Payments</h6>
                            </div>
                            <div>
                                <MdArrowForwardIos />
                            </div>
                        </div>
                        <div className="flex cursor-pointer align-items-center justify-between p-2" onClick={handleAddContactForm}>
                            <div className='flex align-items-center justify-center gap-2'>
                                <h6 className='pt-2'>Our Contact</h6>
                            </div>
                            <div>
                                <MdArrowForwardIos />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            {isLandingPageModalOpen && (
                <LandingPageForm
                    onClose={handleClose}
                    onUpdate={handleUpdate}
                />
            )}
            {isBlogFormModalOpen && (
                <BlogForm
                    onClose={handleClose}
                    onUpdate={handleUpdate}
                />
            )}
            {isTestimonialFormModalOpen && (
                <TestimonialForm
                    onClose={handleClose}
                    onUpdate={handleUpdate}
                />
            )}
            {isGalleryFormModalOpen && (
                <GalleryForm
                    onClose={handleClose}
                    onUpdate={handleUpdate}
                />
            )}
            {isServiceFormModalOpen && (
                <ServiceForm
                    onClose={handleClose}
                    onUpdate={handleUpdate}
                />
            )}
            {isProductFormModalOpen && (
                <ProductForm
                    onClose={handleClose}
                    onUpdate={handleUpdate}
                />
            )}
            {isPaymentFormModalOpen && (
                <PaymentForm
                    onClose={handleClose}
                    onUpdate={handleUpdate}
                />
            )}
            {isAppointmentFormModalOpen && (
                <AppointmentForm
                    onClose={handleClose}
                    onUpdate={handleUpdate}
                />
            )}
            {isContactFormModalOpen && (
                <AddContact
                    onClose={handleClose}
                    onUpdate={handleUpdate}
                />
            )}
        </Modal>
    );
};

export default AllForms;
