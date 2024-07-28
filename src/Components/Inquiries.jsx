import React from 'react';

const Inquiries = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    if (!name) {
      document.getElementById('enquiryError').style.display = 'block';
      document.getElementById('enquiryError').innerText = 'The Name field is required.';
      return;
    }

    // Hide error message if validation passes
    document.getElementById('enquiryError').style.display = 'none';

    // Process form submission
    console.log('Form data:', { name, email, phone, message });
    // You can send the form data to the server here
  };

  return (
    <div>
      <div className="px-4 mt-0 mb-10 ">
        <h4 className="pb-4 text-center font-semibold vcard__heading">Inquiries</h4>
        <form id="enquiryForm" onSubmit={handleSubmit}>
          <input type="hidden" name="_token" value="sEFQLdChiO8Sd0mNoaeZCUmwSh5LBqdFVYC9G3ox" />
          <div className="contact-form px-sm-5">
            <div id="enquiryError" className="alert alert-danger" style={{ display: 'none' }}>The Name field is required.</div>
            <div className="mb-3">
              <input type="text" name="name" className="form-control rounded-lg border-1 shadow-md" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <input type="email" name="email" className="form-control rounded-lg border-1 shadow-md" id="email" placeholder="Email Address" />
            </div>
            <div className="mb-3">
              <input type="tel" name="phone" className="form-control rounded-lg border-1 shadow-md" id="phone" placeholder="Enter Phone" />
            </div>
            <div className="mb-3">
              <textarea className="form-control rounded-lg border-1 shadow-md" placeholder="Type a message here..." name="message" id="message" rows="5"></textarea>
            </div>
            <button type="submit" className="mx-auto mt-4 border-1 shadow-md text-white rounded appointmentAdd appoint-btn d-block p-2 bg-gradient-to-r from-[#F4829D] to-[#115C8E] hover:from-[#115C8E] hover:to-[#F4829D]">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inquiries;
