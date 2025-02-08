import React, { useState } from 'react';

export default function CommentForm() {
    // State for storing user comments
    const [userInfo, setUserInfo] = useState([]);
    
    // State for the form data
    const [formData, setFormData] = useState({ userName: "", comment: "", rating: 0 });

    // Handle input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);  // Log form data to console
        setUserInfo([...userInfo, formData]);  // Add new comment to userInfo array
        setFormData({  // Reset form fields after submission
            userName: "",
            comment: "",
            rating: 0
        });
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Comments Form!</h2>
            
            <div className="row justify-content-center">
                <form onSubmit={handleSubmit} className="card p-4 shadow-sm col-md-8 col-lg-6">
                    <div className="mb-3">
                        <label htmlFor="userName" className="form-label">User Name</label>
                        <input 
                            type="text" 
                            id="userName " 

                            placeholder="User name" 
                            name="userName" 
                            value={formData.userName} 
                            onChange={handleInputChange} 
                            className="form-control" 
                            required
                        />
                     </div>

                    <div className="mb-3">
                        <label htmlFor="comment" className="form-label">Comments</label>
                        <textarea 
                            id="comment" 
                            placeholder="Enter comments" 
                            name="comment" 
                            value={formData.comment} 
                            onChange={handleInputChange} 
                            className="form-control" 
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="rating" className="form-label">Rating</label>
                        <input 
                            type="number" 
                            id="rating" 
                            placeholder="Rating" 
                            name="rating" 
                            value={formData.rating} 
                            onChange={handleInputChange} 
                            className="form-control" 
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>

                <div className="mt-4 col-md-8 col-lg-6">
                    <h3>All Comments:</h3>
                    {userInfo.map((info, index) => (
                    <div key={index} className="card p-3 mb-2 shadow-sm">
                        <p><strong>Name:</strong> {info.userName}</p>
                        <p><strong>Comment:</strong> {info.comment}</p>
                        <p><strong>Rating:</strong> {info.rating}</p>
                    </div>
                    ))}
                 </div>
          

            </div>
        </div>
    );
}
