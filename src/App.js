import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Games from './Pages/Games';
import About from './Pages/About';
import Contact from './Pages/Contact';

import "./App.css";

const App = () => {
  return (
    <Router>
      <h1>Welcome to my website!</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/*" element={<Games />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Other content */}
    </Router>
  );
}

export default App;