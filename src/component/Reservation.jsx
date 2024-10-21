import React, { useState } from 'react'
import './Reservation.css'

function Reservation() {
  const [seats, setSeats] = useState([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0],
  ]);
  const [seatMap, setSeatMap] = useState([7,7,7,7,7,7,7,7,7,7,7,3]);

  const [bookedSeats, setBookedSeats] = useState([]);
  const [numberOfSeats, setNumberOfSeats] = useState(1);
  const [clicked, setClicked] = useState(false);
  const [showCoach,setShowCoach] = useState(false)
  const [buttonText, setButtonText] = useState("Show Train Coach");
  
  const handleNumberOfSeat = (e) =>{
    const value = e.target.value;
    setNumberOfSeats(value)
  };

  const Validate=() =>{
    //console.log(numberOfSeats)
    if(numberOfSeats>7) {
     alert(`You can only reserve upto 7 seats, ${numberOfSeats} is invalid `)
    } else {
      bookSeats(numberOfSeats)
      setClicked(true);
    }
  }

  const getSeatNumber=(r,c)=>{
    if(r==11){
      if(c>2) {
        return "Not possible"
      }
      return (7*(11)) + (c+1);
    }
    if(c>6) {
      return "Invalid"
    } 
    return ((r)*7)+(c+1);
  }
  const bookSeats = (numberOfSeat) =>{
    let newSeatMap = [...seatMap];
    let AvailableRow = -1;
         for(let i = 0;i<12;i++){
              if(seatMap[i]>=numberOfSeat){
                AvailableRow = i;
                break;
              }   
         }

         if (AvailableRow === -1) {
          alert("No available seats to book.");
          return;
        }
    let AvailableCol = -1;
      for(let j = 0; j<7;j++){
        if(seats[AvailableRow][j]===0){
          AvailableCol = j;
          break;
        }
      }
      let newSeats = [...seats];
      const SeatNumber = [];
      let i = 0;
    while(numberOfSeat){
      if(newSeats[AvailableRow][AvailableCol+i]===1){
        return "Invalid"
      }
        newSeats[AvailableRow][AvailableCol+i] = 1;
        newSeatMap[AvailableRow]--;
        let sn = getSeatNumber(AvailableRow,AvailableCol+i);
        SeatNumber.push(sn);
        i++;
        numberOfSeat--;
    }
    
    setSeats(newSeats);
    setBookedSeats(SeatNumber);   
    setSeatMap(newSeatMap);
    console.log(seatMap);
  }
 
 const toggle = () =>{
     setShowCoach(prevState => !prevState);
    buttonText==="Show Train Coach"? setButtonText("Hide Train Coach") : setButtonText("Show Train Coach");
 }
  return (
    <div>
      <h1>Reserve Your Seats</h1>
      <h3>Enter Number of seats to reserve upto 7 Seats</h3>
      <input type="number" id="numberOfSeat" 
       min={1} max={7}
       value={numberOfSeats}
       onChange={handleNumberOfSeat}
       />  <button onClick={Validate }>Reserve</button>

       {clicked && <div><h3>Your Reserved Seat Numbers are: </h3>
      <ul>
        {bookedSeats.map((number,index)=>(
           <li key={index}>{number}</li>
        ))}
      </ul> </div>}
      
      <button onClick={toggle}>{buttonText}</button>
      {showCoach && <div >
        <table style={{ borderCollapse: 'collapse'}} >
            <tbody>
              {seats.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((item, colIndex) => (
                    <td key={colIndex} style={{ height:'20px',width:'20px',  border: '1px solid black', padding: '10px'}} className={item==1 ? "bg-red" : "bg-green"}>
                      {((rowIndex)*7)+(colIndex+1)}
                      
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>}
    </div>
  )
}

export default Reservation
