import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LandingPageForm = ({ onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessType: '',
    poweredBy: '',
    description: '',
    socialLinks: {
      googleDrive: '',
      website: '',
      location: '',
      twitter: '',
      facebook: '',
      instagram: '',
      youtube: '',
      linkedin: '',
      whatsapp: '',
      xTwitter: ''
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/user');
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.socialLinks) {
      setFormData({
        ...formData,
        socialLinks: {
          ...formData.socialLinks,
          [name]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/saveData', formData);
      if (response.status === 200) {
        onUpdate(response.data); // Update the parent component with the new data
        onClose(); // Close the modal
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="modal fade show" role="dialog" style={{ display: "block", paddingRight: "17px" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Landing Page Form</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-4">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control custom-placeholder"
                  id="name"
                />
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="businessType">
                  Business Type
                </label>
                <input
                  type="text"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="form-control custom-placeholder"
                  id="businessType"
                />
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="poweredBy">
                  Powered By
                </label>
                <input
                  type="text"
                  name="poweredBy"
                  value={formData.poweredBy}
                  onChange={handleChange}
                  className="form-control custom-placeholder"
                  id="poweredBy"
                />
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="description">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="form-control custom-placeholder"
                  id="description"
                />
              </div>
              {Object.keys(formData.socialLinks).map((key) => (
                <div key={key} className="mb-4">
                  <label className="form-label" htmlFor={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                    type="text"
                    name={key}
                    value={formData.socialLinks[key]}
                    onChange={handleChange}
                    className="form-control custom-placeholder"
                    id={key}
                  />
                </div>
              ))}
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

export default LandingPageForm;
