import React, { useState } from 'react';
import './Book.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Book = () => {
  const [Carname, setCarname] = useState('');
  const [Rent, setRent] = useState('');
  const [Username, setUsername] = useState('');
  const [Phonenumber, setPhonenumber] = useState('');
  const navigate = useNavigate();
  

  const handleCarnameChange = (e) => {
    setCarname(e.target.value);
  };

  const handleRentChange = (e) => {
    setRent(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
   
  const handlePhonenumberChange = (e) =>{
    setPhonenumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
   
     if (Username === '') {
      alert('Enter Username');
    }else if (Phonenumber === '')
      alert('Enter Phonenumber');
    else {
      try {
        const data = {
          carname: Carname,
          rent: Rent,
          username: Username,
          phonenumber: Phonenumber
        };
        const res = await axios.post("http://localhost:8080/carrental/post", data);
        alert(res.data);
        navigate('/Navbar');
        alert("Booked successfully")

      } catch (error) {
        console.error('Error Signing up:', error);
      }
    }
  };

 

  return (
    <div className="signup">
      <div id="bookingtable">
      <h2>Booking Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="Carname">Carname:</label>
           <select id="car" >
            <option value="Mahindra Thar" onChange={handleCarnameChange}>Mahindra Thar</option>
            <option value="Maruti Ertiga" onChange={handleCarnameChange}>Maruthi Ertiga</option>
            <option value="Innova Crysta" onChange={handleCarnameChange}>Innova Crysta</option>
            <option value="Hyndai Creta" onChange={handleCarnameChange}>Hyndai Creta</option>
            <option value="Honda Civic" onChange={handleCarnameChange}>Honda Civic</option>
            <option value="Renault Kwid" onChange={handleCarnameChange}>Mahindra Thar</option>
          </select> 
          
        </div>
        <div className="form">
          <label htmlFor="Rent">Rent:</label>
          <select id="amount" >
            <option onChange={handleRentChange } >2000</option>
            <option onChange={handleRentChange }>3000</option>
            <option onChange={handleRentChange }>3500</option>
            <option onChange={handleRentChange }>5000</option>
            </select>
          
        </div>
        <div className="form">
          <label htmlFor="Username">Username:</label>
          <input
            type="Username"
            id="Username"
            value={Username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form">
          <label htmlFor="Phonenumbar">Phonenumber:</label>
          <input
            type="Phonenumber"
            id="Phonenumber"
            value={Phonenumber}
            onChange={handlePhonenumberChange}
          />
        </div>
        <button type="submit" >Book</button>
      </form>
      </div>
    </div>
  );
};

export default Book;