import React, { useState } from 'react';
import axios from 'axios';

const BlogForm = ({ onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = '';
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        const uploadResponse = await axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        imageUrl = uploadResponse.data.url;
      }

      const response = await axios.post('/api/blogs', { ...formData, imageUrl });
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
            <h5 className="modal-title">Add New Blog</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-4">
                <label className="form-label" htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="form-control custom-placeholder"
                  id="title"
                />
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="image">
                  Upload Image
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  className="form-control custom-placeholder"
                  id="image"
                />
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="content">
                  Content
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  className="form-control custom-placeholder"
                  id="content"
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

export default BlogForm;
