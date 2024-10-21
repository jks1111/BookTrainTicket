import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './component/Landing'
import Reservation from './component/Reservation';


function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/reserve' element={<Reservation/>}></Route>
        </Routes>
      </Router>
      <footer >
      😃
    </footer>
    </>
  )
}

export default App
