import React, { useState } from 'react';

const RentCar = () => {
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handlePickupDateChange = (e) => {
    setPickupDate(e.target.value);
  };

  const handleReturnDateChange = (e) => {
    setReturnDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the necessary actions with the selected pickupDate and returnDate
    console.log('Submitted:', pickupDate, returnDate);
  };

  return (
    <div>
      <h2>Rent a Car</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="pickupDate">Pickup Date:</label>
          <input
            type="date"
            id="pickupDate"
            value={pickupDate}
            onChange={handlePickupDateChange}
            required
          />
        </div>
        <div>
          <label htmlFor="returnDate">Return Date:</label>
          <input
            type="date"
            id="returnDate"
            value={returnDate}
            onChange={handleReturnDateChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RentCar;
