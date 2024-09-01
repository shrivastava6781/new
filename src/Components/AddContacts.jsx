import React, { useState } from 'react';
import axios from 'axios';

const AddContact = ({ onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    email: '',
    leadlineno: '',
    phoneno: '',
    state: '',
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
    try {
      const response = await axios.post('http://localhost:5000/api/addcontact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        onUpdate(response.data); // Update the parent component with the new data
        onClose(); // Close the modal
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="modal fade show" role="dialog" style={{ display: 'block', paddingRight: '17px' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Contact</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-4">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control custom-placeholder"
                  id="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="leadlineno">Lead Line No</label>
                <input
                  type="text"
                  name="leadlineno"
                  value={formData.leadlineno}
                  onChange={handleChange}
                  className="form-control custom-placeholder"
                  id="leadlineno"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="phoneno">Phone No</label>
                <input
                  type="text"
                  name="phoneno"
                  value={formData.phoneno}
                  onChange={handleChange}
                  className="form-control custom-placeholder"
                  id="phoneno"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="state">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="form-control custom-placeholder"
                  id="state"
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>
                Close
              </button>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
