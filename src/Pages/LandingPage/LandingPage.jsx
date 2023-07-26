import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import { fetchData, exerciseOptions } from '../../utils/FetchData';
import HorizontalScroll from '../../Components/HorizonatalScroll.jsx/HorizontalScroll/HorizontalScroll';
import Excercises from '../../Components/Excercises/Excercises';

const LandingPage = () => {
  const [bodyParts, setBodyParts] = useState([]);
  const [allExcercises, setAllExcercises] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [isSearched, setIsSearched] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageExcercises, setCurrentPageExcercises] = useState(1);
  const itemsPerPageExcercises = 10;

  const itemsPerPageBodyParts = 5;
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageBodyParts);

  const filterExercisesByBodyPart = (bodyPart) => {
    if (!bodyPart) return allExcercises;
    const dataForBodyPart = filteredData.filter((exercise) => exercise.bodyPart === bodyPart).slice(0, itemsPerPageExcercises);
    return dataForBodyPart;
  };

  const filterExercisesBySearch = (searchValue) => {
    if (!searchValue) return allExcercises;
    const lowerCaseSearchValue = searchValue.toLowerCase();

    const searchedExcercises = allExcercises.filter((exercise) =>
      exercise.name.toLowerCase().includes(lowerCaseSearchValue)
    ).slice(0, itemsPerPageExcercises);

    return searchedExcercises;
  };

  const updateItemsPerPage = () => {
    if (window.innerWidth <= 390) {
      setItemsPerPage(1);
    } else {
      setItemsPerPage(itemsPerPageBodyParts);
    }
  };

  useEffect(() => {
    const fetchBodyParts = async () => {
      try {
        const data = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
          exerciseOptions
        );
        setBodyParts(data);
      } catch (error) {
        console.error('Error fetching body parts:', error);
      }
    };

    const fetchAllExercises = async () => {
      try {
        // Check if data is available in local storage
        const storedData = localStorage.getItem('allExercises');
        if (storedData) {
          // If data exists in local storage, use it directly
          setAllExcercises(JSON.parse(storedData));
          setFilteredData(JSON.parse(storedData));
        } else {
          // If data doesn't exist in local storage, fetch it from the API
          const data = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
          setAllExcercises(data);
          setFilteredData(data);

          // Save the fetched data to local storage for future use
          localStorage.setItem('allExercises', JSON.stringify(data));
        }
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };
    
    fetchBodyParts();
    fetchAllExercises();

    // Add event listener to update itemsPerPage on window resize
    window.addEventListener('resize', updateItemsPerPage);
    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  const totalPagesBodyParts = Math.ceil(bodyParts.length / itemsPerPage);
  const totalPagesExcercises = Math.ceil(
    isSearched
      ? filterExercisesBySearch(searchValue).length / itemsPerPageExcercises
      : filterExercisesByBodyPart(selectedBodyPart).length / itemsPerPageExcercises
  );

  const handleNextPageBodyParts = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPagesBodyParts));
  };

  const handlePrevPageBodyParts = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPageExcercises = () => {
    setCurrentPageExcercises((prevPage) => Math.min(prevPage + 1, totalPagesExcercises));
  };

  const handlePrevPageExcercises = () => {
    setCurrentPageExcercises((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <div className="LandingPage">
        <div className="informations">
          <h2>Fitness Club</h2>
          <h1>Sweat, Smile <br /> And Repeat</h1>
          <p>Check out the most effective exercises personalized to you</p>
          <button>Explore Exercise</button>
          <h1 className="background-heading">Exercise</h1>
        </div>
        <div className="image">
          <img src="https://jsm-gym.netlify.app/static/media/banner.5209b5e92a864ca0c615.png" alt="" />
        </div>
      </div>

      <div className="searchInput">
        <h1>Awesome Exercises You <br /> Should Know</h1>
        <div className="input">
          <input type="text" placeholder='Search Exercise' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          <button onClick={() => setIsSearched(true)}>Search</button>
        </div>
      </div>
      <div className="horizonatalScrollBar">
      <>
          {bodyParts
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((bodyPart) => (
              <HorizontalScroll
                key={bodyPart}
                body_part={bodyPart}
                setSelectedBodyPart={setSelectedBodyPart}
                setIsSearched={setIsSearched}
              />
            ))}
        </>
      </div>

      <div className="arrows">
      <button onClick={handlePrevPageBodyParts} disabled={currentPage === 1}>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC6SURBVHgB7dPNDYJAEAXgtxsK2QMDHC3BjsQKxAoswRbsAErwbEzcDrQAYBxXD3iR064hmS8hGX6S9xJ2AKXUEnCerxGJnfuAi2IHa1ouyxoR2NlwcCPjA+PYIaVXOBfEct2ZaIWUNDxluJmGfw6cPLVbDMMZMfW9N977UED2vJZVOyAp3pvLtcnCnGUnjMNGJvd+xx2iM/7rlqvKyb+/hTNAdMQ/aAkt8bNESYnXdFqC8padc1BKqQiegiJ4Qs4BrPgAAAAASUVORK5CYII=" alt="" />
            </button>
            <button onClick={handleNextPageBodyParts} disabled={currentPage >= totalPagesBodyParts}>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACvSURBVHgB7ZLBCQIxEEX/iAVsCTkkskftQDuzA7EDO1ntwOPCXtKBe1Z0nETQaw6brLrzYBICgfcgARRF+Ue4rg07t0y5O8PABDke9waEJiVi8ABqWy/bSaZKjcgCL9xBhmUuGvHVERQvWLtGboh2YgvyHowNdd35EyB1KEuP621F3vt5PDIfkRsiI6t5HXgf5ChFePf4/vEf2C1KovIJyo2pRpO/I0Q8mlxRlJ/jCRjDdrUo31+wAAAAAElFTkSuQmCC" alt="" />
            </button>
          </div>
      <div className="showingResults">
        <h1>Showing Results</h1>
        <Excercises
          excercises={filterExercisesByBodyPart(selectedBodyPart)}
          isSearched={isSearched}
          searchedExcercises={filterExercisesBySearch(searchValue)}
          currentPage={currentPageExcercises}
          itemsPerPage={itemsPerPageExcercises}
          onNextPage={handleNextPageExcercises}
          onPrevPage={handlePrevPageExcercises}
        />
      </div>

    </>
  );
};

export default LandingPage;
