import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(() => {
    const initialBoard = [];
        for (let i = 0; i < 3; i++) {
          initialBoard.push(Array(3).fill(null));
        }
        return initialBoard;
  });
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const  checkWin = () => {
    const winCombinations = [
      // Rows
      [0,0, 0,1, 0,2],
      [1,0, 1,1, 1,2],
      [2,0, 2,1, 2,2],
      // Columns
      [0,0, 1,0, 2,0],
      [0,1, 1,1, 2,1],
      [0,2, 1,2, 2,2],
      // Diagonals
      [0,0, 1,1, 2,2],
      [0,2, 1,1, 2,0]
    ];
  
    for (const combination of winCombinations) {
      const [ai,aj, bi,bj, ci,cj] = combination;
      if (board[ai][aj] && board[ai][aj] === board[bi][bj] && board[ai][aj] === board[ci][cj]) {
        return true; // Return the winning mark (X or O)
      }
    }
  
    return false; // No winner
  }

  const handleCellClick = (row, col) => {
    if (board[row][col] === null && winner === null) {
      const newBoard = [...board];
      newBoard[row][col] = currentPlayer;
      setBoard(newBoard);
      if(checkWin()){
        setWinner(currentPlayer);
      }
      else{
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    }
  };
  let index=0;
  const renderCell = (rowIdx, colIdx) => {
    return (
      <div key={index++} className="cell" onClick={() => handleCellClick(rowIdx, colIdx)}>
        {board[rowIdx][colIdx]}
      </div>
    );
  };

  return (
    <div>
      <h2>Tic Tac Toe Game</h2>
      <div className="matrix">
        {board.map((row, rowIdx) =>(
          <div className="row">
            {row.map((column, colIdx) =>(
              renderCell(rowIdx, colIdx)
            ))}
          </div>
        ))}
      </div>
      <p>Current Player: {currentPlayer}</p>
      {winner ? <p>Winner is: {winner}</p> : <></>}
    </div>
  );
}

export default TicTacToe;