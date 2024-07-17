import { useEffect, useState } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipCard from './components/StarshipCard';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    getAllStarships().then(setStarships);
  }, []);

  return (
    <div>
      {starships.map(starship => (
        <StarshipCard key={starship.name} starship={starship} />
      ))}
    </div>
  );
}

export default App;
