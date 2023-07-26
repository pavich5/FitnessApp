import React from 'react';
import ExcerciseCart from '../ExcerciseCart/ExcerciseCart';
import './Excercises.css';

const Excercises = ({ excercises, isSearched, searchedExcercises, currentPage, itemsPerPage, onNextPage, onPrevPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <>
     <div className="excercises">
      {isSearched
        ? searchedExcercises.slice(startIndex, endIndex).map((exercise) => (
            <ExcerciseCart key={exercise.id} excercise={exercise} />
          ))
        : excercises.slice(startIndex, endIndex).map((exercise) => (
            <ExcerciseCart key={exercise.id} excercise={exercise} />
          ))}
    </div>
          <div className="arrows">
          <button onClick={onPrevPage} disabled={currentPage === 1}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC6SURBVHgB7dPNDYJAEAXgtxsK2QMDHC3BjsQKxAoswRbsAErwbEzcDrQAYBxXD3iR064hmS8hGX6S9xJ2AKXUEnCerxGJnfuAi2IHa1ouyxoR2NlwcCPjA+PYIaVXOBfEct2ZaIWUNDxluJmGfw6cPLVbDMMZMfW9N977UED2vJZVOyAp3pvLtcnCnGUnjMNGJvd+xx2iM/7rlqvKyb+/hTNAdMQ/aAkt8bNESYnXdFqC8padc1BKqQiegiJ4Qs4BrPgAAAAASUVORK5CYII=" alt="" />
          </button>
          <button onClick={onNextPage} disabled={currentPage >= Math.ceil((isSearched ? searchedExcercises.length : excercises.length) / itemsPerPage)}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACvSURBVHgB7ZLBCQIxEEX/iAVsCTkkskftQDuzA7EDO1ntwOPCXtKBe1Z0nETQaw6brLrzYBICgfcgARRF+Ue4rg07t0y5O8PABDke9waEJiVi8ABqWy/bSaZKjcgCL9xBhmUuGvHVERQvWLtGboh2YgvyHowNdd35EyB1KEuP621F3vt5PDIfkRsiI6t5HXgf5ChFePf4/vEf2C1KovIJyo2pRpO/I0Q8mlxRlJ/jCRjDdrUo31+wAAAAAElFTkSuQmCC" alt="" />
          </button>
        </div>
    </>
   
  );
};

export default Excercises;
