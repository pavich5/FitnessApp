import React, { useState } from 'react';
import ExcerciseCart from '../ExcerciseCart/ExcerciseCart';
import { Link } from 'react-router-dom';
import './SimularExcercise.css'

const SimularExcercise = ({ allExcercises, excerciseTarget,name,handleeEcercisesScroll}) => {
  const ITEMS_PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const simularExcercises = allExcercises.filter((exercise) => exercise.target === excerciseTarget);

  const totalPages = Math.ceil(simularExcercises.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentExcercises = simularExcercises.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="SimularExcercise">
      <h1>Similar { excerciseTarget} exercises</h1>
      <div className="exercise-list" onClick={handleeEcercisesScroll}>
        {currentExcercises.map((exercise) => (
          <Link to={`/${exercise.id}`} key={exercise.id}
          style={{ textDecoration: 'none', color: 'black' }} 
          >
            <ExcerciseCart excercise={exercise}  />
          </Link>
        ))}
      </div>
      <div className="arrows" style={{marginTop: '50px'}}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC6SURBVHgB7dPNDYJAEAXgtxsK2QMDHC3BjsQKxAoswRbsAErwbEzcDrQAYBxXD3iR064hmS8hGX6S9xJ2AKXUEnCerxGJnfuAi2IHa1ouyxoR2NlwcCPjA+PYIaVXOBfEct2ZaIWUNDxluJmGfw6cPLVbDMMZMfW9N977UED2vJZVOyAp3pvLtcnCnGUnjMNGJvd+xx2iM/7rlqvKyb+/hTNAdMQ/aAkt8bNESYnXdFqC8padc1BKqQiegiJ4Qs4BrPgAAAAASUVORK5CYII=" alt="" />
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACvSURBVHgB7ZLBCQIxEEX/iAVsCTkkskftQDuzA7EDO1ntwOPCXtKBe1Z0nETQaw6brLrzYBICgfcgARRF+Ue4rg07t0y5O8PABDke9waEJiVi8ABqWy/bSaZKjcgCL9xBhmUuGvHVERQvWLtGboh2YgvyHowNdd35EyB1KEuP621F3vt5PDIfkRsiI6t5HXgf5ChFePf4/vEf2C1KovIJyo2pRpO/I0Q8mlxRlJ/jCRjDdrUo31+wAAAAAElFTkSuQmCC" alt="" />
        </button>
      </div>
    </div>
  );
};

export default SimularExcercise;
