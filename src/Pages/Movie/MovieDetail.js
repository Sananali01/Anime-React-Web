import React from 'react';
import { useParams } from 'react-router-dom';
import { moviedata } from '../Movie/moviedata';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = moviedata.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          <div className='text-white'>
            <img src={movie.image} className="img-fluid" alt={movie.title} />
            <h2 className="mt-3">{movie.title}</h2>
            <p><strong>Category:</strong> {movie.category}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Description:</strong> {movie.description}</p>
            <p><strong>Rating:</strong> {movie.rating}</p>
            <p><strong>Release Year:</strong> {movie.releaseYear}</p>
            <p><strong>Duration:</strong> {movie.duration}</p>
            <p><strong>Status:</strong> {movie.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
