import React, { useState, useEffect } from 'react';
import './BonoL.css';

const BonoL = () => {
    const [matrix, setMatrix] = useState(() => {
        const initialMatrix = [];
        for (let i = 0; i < 4; i++) {
            initialMatrix.push(Array(4).fill(false));
        }
        return initialMatrix;
    });
    const [painting, setPainting] = useState(false);
    const [paintedCells, setPaintedCells] = useState([]);

    const [player, setPlayer] = useState(0);

    useEffect(() => {
        const getSubmatrix = () => {
            const submatrix = [];
            for (const [rowIndex, row] of matrix.entries()) {
                for (const [columnIndex, cell] of row.entries()) {
                    if (cell) {
                        submatrix.push([rowIndex, columnIndex]);
                    }
                }
            }
            setPaintedCells(submatrix);
        };

        const handleMouseUp = () => {
            setPainting(false);
            getSubmatrix();
            setPlayer(player === 0 ? 1 : 0);
        };

        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [player, matrix]);

    const handlePaint = (row, column) => {
        setMatrix((prevMatrix) => {
            const updatedMatrix = prevMatrix.map((rowArr, rowIndex) => {
                if (rowIndex === row) {
                    return rowArr.map((cell, columnIndex) => {
                        if (columnIndex === column) {
                            return !cell;
                        }
                        return cell;
                    });
                }
                return rowArr;
            });
            return updatedMatrix;
        });
    };

    return (
        <div className="matrix">
            {matrix.map((row, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {row.map((cell, columnIndex) => (
                        <div
                            className={`cell ${cell ? player === 0 ? 'red' : 'blue' : ''}`}
                            key={columnIndex}
                            onMouseDown={() => {
                                setPainting(true);
                                handlePaint(rowIndex, columnIndex);
                            }}
                            onMouseEnter={() => {
                                if (painting) {
                                    handlePaint(rowIndex, columnIndex);
                                }
                            }}
                        ></div>
                    ))}
                </div>
            ))}
            <div className="submatrix">
                <h2>Painted Cells:</h2>
                <ul>
                    {paintedCells.map(([row, column], index) => (
                        <li key={index}>
                            Row: {row}, Column: {column}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BonoL;