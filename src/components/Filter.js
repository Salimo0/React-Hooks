// Filter.js
import React from 'react';

const Filter = ({ handleFilterChange, filter }) => {
    return (
        <div className="filter">
            <input
                type="text"
                placeholder="Filter by title"
                value={filter.title}
                onChange={(e) => handleFilterChange({ ...filter, title: e.target.value })}
            />
            <input
                type="number"
                placeholder="Filter by rating"
                value={filter.rating}
                onChange={(e) => handleFilterChange({ ...filter, rating: e.target.value })}
            />
        </div>
    );
};

export default Filter;
