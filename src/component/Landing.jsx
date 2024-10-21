import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Landing() {
  const navigate = useNavigate();
  // const [Clicked,setClicked] = useState(false);
  const handleNavigate = () =>{
    navigate('/reserve');
  }
  return (
    <div>
      <h1>Book Your Tickets Now!</h1>
      <button onClick={handleNavigate}>Click To Book</button>

    </div>
  )
}

export default Landing
