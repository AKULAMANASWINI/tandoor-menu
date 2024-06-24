import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Little Lemon</h1>
      <p>Your favorite place to dine in Chicago</p>
      <Link to="/booking" className="booking-link">Book a Table</Link>
    </div>
  );
}

export default Home;
