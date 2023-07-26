// import React, { createContext, useEffect, useState } from 'react';
// import { fetchData,exerciseOptions } from '../utils/FetchData';
// const ExerciseContext = createContext();

// // Step 3: Define the custom provider component
// const ExerciseProvider = ({ children }) => {
//   const [allExcercises, setAllExcercises] = useState([]);


//   useEffect(() => {
//     const fetchAllExercise = async () => {
//       try {
//         const data = await fetchData(
//           'https://exercisedb.p.rapidapi.com/exercises',
//           exerciseOptions
//         );
//         setAllExcercises(data);
//         console.log('this is from the contex',data);
//       } catch (error) {
//         console.error('Error fetching body parts:', error);
//       }
//     };    fetchAllExercise();
//   }, []);


//   const contextValue = {
//     allExcercises,
//   };

//   return (
//     <ExerciseContext.Provider value={contextValue}>{children}</ExerciseContext.Provider>
//   );
// };

// export { ExerciseContext, ExerciseProvider };
