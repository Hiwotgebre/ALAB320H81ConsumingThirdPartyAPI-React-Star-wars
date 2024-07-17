import React, { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipCard from './components/StarshipCard';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    getAllStarships().then(data => {
      console.log("API data:", data); // Check the structure of fetched data
      setStarships(data.results);
    }).catch(error => {
      console.error('Error fetching starships:', error); // Catch and log any fetch errors
    });
  }, []);

  return (
    <div>
      {starships.length > 0 ? (
        starships.map((starship, index) => (
          <StarshipCard key={index} starship={starship} />
        ))
      ) : (
        <p>No starships found or still loading...</p>  // This helps verify if the condition is empty
      )}
    </div>
  );
}

export default App;
