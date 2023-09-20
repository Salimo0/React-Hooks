import React from 'react';
import './Movie.css';

function Movie(props) {
    const { title, description, posterURL, rating } = props;

    return (
        <div className="movie-card">
            <img src={posterURL} alt={title} />
            <h2>{title}</h2>
            <p className='description'>{description}</p>
            <p>Rating: {rating}</p>
        </div>
    );
}

export default Movie;
