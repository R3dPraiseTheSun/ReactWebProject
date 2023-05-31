import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = {
    marginRight: '10px'
  };

  return (
    <nav className="navbar">
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <li style={{ display: 'inline-block', marginRight: '10px' }}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={{ display: 'inline-block', marginRight: '10px' }}>
          <Link to="/games" style={linkStyle}>Games</Link>
        </li>
        <li style={{ display: 'inline-block', marginRight: '10px' }}>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                <li style={{ display: 'inline-block', marginRight: '10px' }}><Link to="/games/bonol">BonoL</Link></li>
                <li style={{ display: 'inline-block', marginRight: '10px' }}><Link to="/games/tictactoe">TicTacToe</Link></li>
                <li style={{ display: 'inline-block', marginRight: '10px' }}><Link to="/games/crossword">Crossword</Link></li>
            </ul>
        </li>
        <li style={{ display: 'inline-block', marginRight: '10px' }}>
          <Link to="/about" style={linkStyle}>About</Link>
        </li>
        <li style={{ display: 'inline-block', marginRight: '10px' }}>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;