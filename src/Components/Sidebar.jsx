import React, { useState, useEffect } from 'react';
import "./Sidebar.css";
import { BsFillGridFill } from "react-icons/bs";
import { FaWhatsapp, FaQrcode, FaShareAlt } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { ImExit, ImCross } from "react-icons/im";
import QRCode from 'qrcode.react';
import { Modal } from 'react-bootstrap';
import AllForms from './AllForms';

const Sidebar = () => {
    const [showButtons, setShowButtons] = useState(false);
    const [qrCode, setQrCode] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showFormsModal, setShowFormsModal] = useState(false);

    const toggleButtons = () => {
        setShowButtons(!showButtons);
    };

    useEffect(() => {
        if (qrCode) {
            const canvas = document.getElementById('qrCode');
            if (canvas) {
                const pngUrl = canvas
                    .toDataURL('image/png')
                    .replace('image/png', 'image/octet-stream');
                let downloadLink = document.createElement('a');
                downloadLink.href = pngUrl;
                downloadLink.download = 'qr-code.png';
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
                setQrCode(false); // Reset QR code state after download
            }
        }
    }, [qrCode]);

    const handleQrCodeDownload = () => {
        setQrCode(true);
    };

    const handleShare = () => {
        setShowModal(true);
    };

    const handleExit = () => {
        setShowFormsModal(true);
    };

    return (
        <div className='h-52 w-32 rounded mt-18 ml-1 absolute z-50 flex items-center justify-between position-absolute position-fixed'>
            <button
                className='main_button flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-b from-[#F4829D] to-[#115C8E] shadow-pulse'
                onClick={toggleButtons}
                style={{ position: 'relative' }}
            >
                <BsFillGridFill style={{ color: "white" }} className="w-50 h-50" />
            </button>
            <div className={`h-full rounded-full flex flex-col justify-between transition-all duration-300 ease-in ${showButtons ? 'opacity-100 ' : 'opacity-0 '}`}>
                <button className='w-10 h-10  bg-gradient-to-b from-[#F4829D] to-[#115C8E] rounded-full flex items-center justify-center hover:blink-border'>
                    <FaWhatsapp style={{ color: "white" }} className="w-50 h-50" />
                </button>
                <button
                    className='w-10 h-10 bg-gradient-to-b from-[#F4829D] to-[#115C8E] rounded-full flex items-center justify-center hover:blink-border'
                    onClick={handleQrCodeDownload}
                >
                    <FaQrcode style={{ color: "white" }} className="w-50 h-50" />
                </button>
                <button
                    className='w-10 h-10 bg-gradient-to-b from-[#F4829D] to-[#115C8E] rounded-full flex items-center justify-center hover:blink-border'
                    onClick={handleShare}
                >
                    <FaShareAlt style={{ color: "white" }} className="w-50 h-50" />
                </button>
                <button
                    className='w-10 h-10 bg-gradient-to-b from-[#F4829D] to-[#115C8E] rounded-full flex items-center justify-center hover:blink-border'
                    onClick={handleExit}
                >
                    <ImExit style={{ color: "white" }} className="w-50 h-50" />
                </button>
            </div>
            {qrCode && (
                <div style={{ display: 'none' }}>
                    <QRCode id="qrCode" value="http://localhost:3000" size={150} level={"H"} includeMargin={true} />
                </div>
            )}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Body>
                    <div className="modal-content">
                        <div className="">
                            <div className="mt-3 row align-items-center">
                                <div className="text-center col-10">
                                    <h5 className="modal-title" style={{ paddingLeft: '50px' }}>Share My VCard</h5>
                                </div>
                                <div className="p-0 col-2">
                                    <button type="button" aria-label="Close" className="p-3 border-none btn btn-sm btn-icon btn-active-color-danger" onClick={() => setShowModal(false)}>
                                        <ImCross />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="flex cursor-pointer  align-items-center justify-between p-2">
                                <div className='flex align-items-center justify-center gap-2'>
                                    <img width="40" height="40" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new" />
                                    <h6 className='pt-2'>Share on Facebook</h6>
                                </div>
                                <div>
                                    <MdArrowForwardIos />
                                </div>
                            </div>
                            <div className="flex cursor-pointer align-items-center justify-between p-2">
                                <div className='flex align-items-center justify-center gap-2'>
                                    <img width="40" height="40" src="https://img.icons8.com/cute-clipart/64/instagram-new.png" alt="instagram-new" />
                                    <h6 className='pt-2'>Share on Instagram</h6>
                                </div>
                                <div>
                                    <MdArrowForwardIos />
                                </div>
                            </div>
                            <div className="flex cursor-pointer align-items-center justify-between p-2">
                                <div className='flex align-items-center justify-center gap-2'>
                                    <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1" />
                                    <h6 className='pt-2'>Share on Twitter</h6>
                                </div>
                                <div>
                                    <MdArrowForwardIos />
                                </div>
                            </div>
                            <div className="flex cursor-pointer align-items-center justify-between p-2">
                                <div className='flex align-items-center justify-center gap-2'>
                                    <img width="40" height="40" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" />
                                    <h6 className='pt-2'>Share on LinkedIn</h6>
                                </div>
                                <div>
                                    <MdArrowForwardIos />
                                </div>
                            </div>
                            <div className="flex cursor-pointer align-items-center justify-between p-2">
                                <div className='flex align-items-center justify-center gap-2'>
                                    <img width="40" height="40" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1" />
                                    <h6 className='pt-2'>Share on Whatsapp</h6>
                                </div>
                                <div>
                                    <MdArrowForwardIos />
                                </div>
                            </div>
                            <div className="flex cursor-pointer align-items-center justify-between p-2">
                                <div className='flex align-items-center justify-center gap-2'>
                                    <img width="40" height="40" src="https://img.icons8.com/papercut/60/new-post.png" alt="new-post" />
                                    <h6 className='pt-2'>Share on Email</h6>
                                </div>
                                <div>
                                    <MdArrowForwardIos />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {showFormsModal && (
                <AllForms showModal={showFormsModal} setShowModal={setShowFormsModal} />
            )}
        </div>
    );
}

export default Sidebar;
