// import React, { useState } from 'react';
// import axios from 'axios';

// const ProductForm = ({ onClose, onUpdate }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: '',
//     image: null,
//   });

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
//     const formDataObj = new FormData();
//     formDataObj.append('title', formData.title);
//     formDataObj.append('description', formData.description);
//     formDataObj.append('price', formData.price);
//     if (formData.image) {
//       formDataObj.append('image', formData.image);
//     }

//     try {
//       const response = await axios.post('/api/products', formDataObj, {
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
//     }
//   };

//   return (
//     <div className="modal fade show" role="dialog" style={{ display: "block", paddingRight: "17px" }}>
//       <div className="modal-dialog modal-lg">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title">Add New Product</h5>
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
//                   className="form-control custom-placeholdere"
//                   id="title"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="form-label" htmlFor="description">
//                   Description
//                 </label>
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   className="form-control custom-placeholdere"
//                   id="description"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="form-label" htmlFor="price">
//                   Price
//                 </label>
//                 <input
//                   type="number"
//                   name="price"
//                   value={formData.price}
//                   onChange={handleChange}
//                   className="form-control custom-placeholdere"
//                   id="price"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="form-label" htmlFor="image">
//                   Image
//                 </label>
//                 <input
//                   type="file"
//                   name="image"
//                   onChange={handleFileChange}
//                   className="form-control custom-placeholdere"
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

// export default ProductForm;


import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: null,
  });

  const [errors, setErrors] = useState({
    description: '',
  });

  const [wordCount, setWordCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'description') {
      const wordCount = value.trim().split(/\s+/).length;
      setWordCount(wordCount);
      setErrors({
        ...errors,
        description: wordCount > 35 ? "Description should not exceed 35 words." : ""
      });
    }
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

  const validateDescription = (description) => {
    const wordCount = description.trim().split(/\s+/).length;
    if (wordCount > 35) {
      return "Description should be less than 35 words.";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate the description
    const descriptionError = validateDescription(formData.description);
    if (descriptionError) {
      setErrors({ description: descriptionError });
      return;
    } else {
      setErrors({ description: '' });
    }

    const formDataObj = new FormData();
    formDataObj.append('title', formData.title);
    formDataObj.append('description', formData.description);
    formDataObj.append('price', formData.price);
    if (formData.image) {
      formDataObj.append('image', formData.image);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/products', formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
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
            <h5 className="modal-title">Add New Product</h5>
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
                  className="form-control custom-placeholdere"
                  id="title"
                  required
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
                  className="form-control custom-placeholdere"
                  id="description"
                  required
                />
                <small className="form-text text-muted">
                  {errors.description ? (
                    <span className="text-danger">{errors.description}</span>
                  ) : (
                    <span>{35 - wordCount} words remaining.</span>
                  )}
                </small>
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="price">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="form-control custom-placeholdere"
                  id="price"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="image">
                  Image
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  className="form-control custom-placeholdere"
                  id="image"
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

export default ProductForm;
