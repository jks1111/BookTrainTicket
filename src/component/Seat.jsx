import React from 'react';
import './Seat.css';

const Seat = ({ seatNumber, isBooked, onClick }) => {
  return (
    <div
      className={`seat ${isBooked ? 'booked' : 'available'}`}
      onClick={() => !isBooked && onClick(seatNumber)}
    >
      {seatNumber}
    </div>
  );
};

export default Seat;
