import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { moviedata } from '../Movie/moviedata';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(9);

  useEffect(() => {
    // Set the movie data from JSON file
    setMovies(moviedata);
  }, []);

  // Logic for pagination
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5 mb-5">
      <h2 className="my-4 title text-center">Anime Movies</h2>
      <div className="pagination justify-content-center mt-4 mb-5">
        {[...Array(Math.ceil(movies.length / moviesPerPage)).keys()].map(number => (
          <button key={number} onClick={() => paginate(number + 1)} className={`btn ${currentPage === number + 1 ? "btn-primary" : "btn-outline-primary"} mx-1`}>
            {number + 1}
          </button>
        ))}
      </div>
      {/* Movie cards */}
      <div className="row">
        {currentMovies.map(movie => (
          <div className="col-md-4 mb-4" key={movie.id}>
            <Link to={`/movie/${movie.id}`} className="card-link">
              <div className="card text-white">
                <img src={movie.image} className="card-img-top" alt={movie.title} />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">Category: {movie.category}</p>
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
