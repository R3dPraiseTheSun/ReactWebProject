import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Games from './Pages/Games';
import About from './Pages/About';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <Router>
    <div>
      <Navbar />
      <h1>Welcome to my website!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/*" element={<Games />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Other content */}
    </div>
    </Router>
  );
}

export default App;