import React, {useEffect, useRef} from 'react';
import {Route, Routes} from 'react-router-dom';

import BonoL from '../Components/Games/BonoL';
import TicTacToe from '../Components/Games/TicTacToe';
import Crosswords from '../Components/Games/Crossword';

const Games = () => {
  return (
    <div>
      <h1>Games</h1>
      <Routes>
        <Route path="/" element={<h2>Please select a game</h2>} />
        <Route path="/bonol" element={<BonoL />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path='/crossword' element={<Crosswords/>} />
      </Routes>
      {/* Add content for the Games page */}
    </div>
  );
}

export default Games;