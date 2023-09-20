import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import Movie from './components/Movie';
import moviesData from './components/MoviesData';

function App() {
  const [movies, setMovies] = useState(moviesData);

  const [filter, setFilter] = useState({ title: '', rating: '' });

  // Define the handleFilterChange function
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
    );
  });

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter handleFilterChange={handleFilterChange} filter={filter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
