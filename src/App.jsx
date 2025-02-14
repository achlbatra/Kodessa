import { useState } from 'react';
import Homepage from './pages/Homepage';
import './App.css';
import './pages/styles/Homepage.css';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
    <div className='background'>
      <Navbar/>
      <Homepage className="home"/>
    </div>
    </div>
  )
}

export default App
