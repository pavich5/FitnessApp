import React, { useState } from 'react';
import './SimularEquipment.css';
import ExcerciseCart from '../ExcerciseCart/ExcerciseCart';
import { Link } from 'react-router-dom';

const SimularEquipment = ({ allExcercises, excerciseEquipment , handleeEcercisesScroll}) => {
  const simularExcercises = allExcercises.filter((exercise) => exercise.equipment === excerciseEquipment);
  const itemsPerPage = 3;
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, simularExcercises.length - itemsPerPage));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  return (
    <div className="SimularEquipment" onClick={handleeEcercisesScroll}>
      <h1>Similar {excerciseEquipment} exercises</h1>
      <div className="exercise-list">
        {simularExcercises.slice(startIndex, startIndex + itemsPerPage).map((exercise) => (
          <Link key={exercise.id} to={`/${exercise.id}`}>
            <ExcerciseCart excercise={exercise} />
          </Link>
        ))}
      </div>
      <div className="arrows"  style={{marginTop: '50px'}}>
        <button onClick={handlePrev} disabled={startIndex === 0}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC6SURBVHgB7dPNDYJAEAXgtxsK2QMDHC3BjsQKxAoswRbsAErwbEzcDrQAYBxXD3iR064hmS8hGX6S9xJ2AKXUEnCerxGJnfuAi2IHa1ouyxoR2NlwcCPjA+PYIaVXOBfEct2ZaIWUNDxluJmGfw6cPLVbDMMZMfW9N977UED2vJZVOyAp3pvLtcnCnGUnjMNGJvd+xx2iM/7rlqvKyb+/hTNAdMQ/aAkt8bNESYnXdFqC8padc1BKqQiegiJ4Qs4BrPgAAAAASUVORK5CYII=" alt="" />
        </button>
        <button onClick={handleNext} disabled={startIndex >= simularExcercises.length - itemsPerPage}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACvSURBVHgB7ZLBCQIxEEX/iAVsCTkkskftQDuzA7EDO1ntwOPCXtKBe1Z0nETQaw6brLrzYBICgfcgARRF+Ue4rg07t0y5O8PABDke9waEJiVi8ABqWy/bSaZKjcgCL9xBhmUuGvHVERQvWLtGboh2YgvyHowNdd35EyB1KEuP621F3vt5PDIfkRsiI6t5HXgf5ChFePf4/vEf2C1KovIJyo2pRpO/I0Q8mlxRlJ/jCRjDdrUo31+wAAAAAElFTkSuQmCC" alt="" />
        </button>
      </div>
    </div>
  );
};

export default SimularEquipment;
