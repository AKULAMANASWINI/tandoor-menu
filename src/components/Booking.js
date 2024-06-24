import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    diners: '',
    cardNumber: '',
    firstName: '',
    lastName: '',
    expDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert('Booking confirmed!');
  };

  return (
    <div className="booking">
      <h1>Book a Table</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Number of Diners</label>
          <input type="number" name="diners" value={formData.diners} onChange={handleChange} required />
        </div>
        <h2>Credit Card Details</h2>
        <div className="form-group">
          <label>Card Number</label>
          <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Exp Date</label>
          <input type="month" name="expDate" value={formData.expDate} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required />
        </div>
        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default Booking;
