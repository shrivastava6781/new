// import React, { useState } from 'react';
// import axios from 'axios';

// const BlogForm = ({ onClose, onUpdate }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     content: '',
//     image: null,
//   });
//   const [file, setFile] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };


//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       image: e.target.files[0],
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     const formDataObj = new FormData();
//     formDataObj.append('title', formData.title);
//     formDataObj.append('content', formData.content);
//     if (formData.image) {
//       formDataObj.append('image', formData.image);
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/', formDataObj, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       if (response.status === 200) {
//         onUpdate(response.data); // Update the parent component with the new data
//         onClose(); // Close the modal
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setErrors({ submit: 'Failed to submit. Please try again later.' });
//     }
//   };


//   return (
//     <div className="modal fade show" role="dialog" style={{ display: "block", paddingRight: "17px" }}>
//       <div className="modal-dialog modal-lg">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title">Add New Blog</h5>
//             <button type="button" className="close" onClick={onClose}>
//               <span>&times;</span>
//             </button>
//           </div>
//           <form onSubmit={handleSubmit}>
//             <div className="modal-body">
//               <div className="mb-4">
//                 <label className="form-label" htmlFor="title">
//                   Title
//                 </label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   className="form-control custom-placeholder"
//                   id="title"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="form-label" htmlFor="image">
//                   Upload Image
//                 </label>
//                 <input
//                   type="file"
//                   name="image"
//                   onChange={handleFileChange}
//                   className="form-control custom-placeholder"
//                   id="image"
//                 />
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>
//                 Close
//               </button>
//               <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogForm;



import React, { useState } from 'react';
import axios from 'axios';

const BlogForm = ({ onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: null,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.title.trim()) {
      errors.title = 'Title is required';
    }
    if (!formData.content.trim()) {
      errors.content = 'Content is required';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formDataObj = new FormData();
    formDataObj.append('title', formData.title);
    formDataObj.append('content', formData.content);
    if (formData.image) {
      formDataObj.append('image', formData.image);
    }

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/blogs', formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        onUpdate(response.data); // Update the parent component with the new data
        onClose(); // Close the modal
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Failed to submit. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal fade show" role="dialog" style={{ display: 'block', paddingRight: '17px' }}>
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
                  className={`form-control custom-placeholder ${errors.title ? 'is-invalid' : ''}`}
                  id="title"
                />
                {errors.title && <div className="invalid-feedback">{errors.title}</div>}
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="content">
                  Content
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  className={`form-control custom-placeholder ${errors.content ? 'is-invalid' : ''}`}
                  id="content"
                  rows="5"
                ></textarea>
                {errors.content && <div className="invalid-feedback">{errors.content}</div>}
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
              {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}
            </div>
            <div className="modal-footer">
              <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>
                Close
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
