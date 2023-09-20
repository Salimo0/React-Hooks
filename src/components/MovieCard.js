// MovieCard.js
import React, { useState } from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`movie-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      {isHovered && <p className="description">{movie.description}</p>}
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
