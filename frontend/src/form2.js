import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './form2.css';


const Form2 = () => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const formData = location.state.formData;

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Combine formData from both pages
    const combinedFormData = { ...formData, phone: phone, address: address };
    // Submit combined formData to backend
    const response = await fetch('http://localhost:3001/second', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(combinedFormData),
    });

    if (response.ok) {
      alert('Employee added successfully');
      navigate('/');
    } else {
      alert('Error adding employee');
    }
  };



  return (
    <div className='form2'>
        <div className='form-container'>
            <h1>Employee Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                Phone:
                <input
                    className="forminput"
                    type="text"
                    value={phone}
                    onChange={handlePhoneChange}
                />
                </label>
                <br />
                <label>
                Address:
                <input
                    className="forminput"
                    type="text"
                    value={address}
                    onChange={handleAddressChange}
                />
                </label>
                <br />
                <button type="submit" className='submitbtn'>Submit</button>
            </form>
    </div>
    </div>
  )
}

export default Form2