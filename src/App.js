import React from 'react';
import wineData from './wineData';
import Scatter from './components/Scatter';
import Bars from './components/Bars';
import Home from './components/Home';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';

function App() {



  return (
    <div>
      <nav>
        <h1 ><Link className='header' to="/">DATA VISUALIZATION</Link></h1>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/scatter' element={<Scatter wineData={wineData} />} />
        <Route path='/bars' element={<Bars wineData={wineData} />} />
      </Routes>
    </div>
  )
}

export default App