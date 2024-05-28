import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { animedata } from "../Anime/AnimeData";
import { moviedata } from '../Movie/moviedata';
import '../../assets/search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Search in anime data
    const animeResults = animedata.filter(anime => {
      return anime.title.toLowerCase().includes(query.toLowerCase()) || anime.genre.toLowerCase().includes(query.toLowerCase());
    });

    // Search in movie data
    const movieResults = moviedata.filter(movie => {
      return movie.title.toLowerCase().includes(query.toLowerCase()) || movie.category.toLowerCase().includes(query.toLowerCase());
    });

    // Combine results from anime and movie searches
    const combinedResults = [...animeResults, ...movieResults];
    
    // Remove duplicates (if any)
    const uniqueResults = combinedResults.filter((result, index, self) =>
      index === self.findIndex(r => (
        r.id === result.id && r.type === result.type
      ))
    );

    setResults(uniqueResults);
  };

  return (
    <div className='search-container mt-5'>
      <div className="search-wrapper">
        <h2 className="search-title text-white">Search</h2>
        <form onSubmit={handleSubmit} className="search-form">
          <div className="input-group">
            <input type="text" className="search-input" placeholder="Search for anime or movies..." value={query} onChange={handleChange} />
            <div className="input-group-append">
              <button className="search-btn mb-2" type="submit">Search</button>
            </div>
          </div>
        </form>
        <div className="results">
          {results.length > 0 ? (
            <ul className="anime-list">
              {results.map(result => (
                <li className="anime-item" key={result.id}>
                  {result.type === 'anime' ? (
                    <Link to={`/anime/${result.id}`} className="anime-link">
                      <img src={result.image} alt={result.title} className="anime-image" />
                      <span className="anime-title text-white">{result.title}</span>
                    </Link>
                  ) : (
                    <Link to={`/movie/${result.id}`} className="anime-link">
                      <img src={result.image} alt={result.title} className="anime-image" />
                      <span className="anime-title text-white">{result.title}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-results">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
