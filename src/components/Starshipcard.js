import React from 'react';

function StarshipCard({ starship }) {
  return (
    <div className="starship-card">
      <h3>{starship.name}</h3>
      {/* Additional details can be added here */}
    </div>
  );
}

export default StarshipCard;
