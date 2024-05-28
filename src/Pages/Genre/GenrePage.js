import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { animedata } from '../Anime/AnimeData';
import { moviedata } from '../Movie/moviedata';
import '../../assets/main.css';

const GenrePage = () => {
  const { category } = useParams();
  const [categoryAnime, setCategoryAnime] = useState([]);
  const [categoryMovies, setCategoryMovies] = useState([]);

  useEffect(() => {
    // Filter anime based on category
    const filteredAnime = animedata.filter(anime => anime.category === category);
    setCategoryAnime(filteredAnime);

    // Filter movies based on category
    const filteredMovies = moviedata.filter(movie => movie.category === category);
    setCategoryMovies(filteredMovies);
  }, [category]);

  return (
    <div className="container mt-5 mb-5">
      <h2 className="my-4 text-white text-center mt-5 mb-4">{category} Anime</h2>
      <div className="row">
        {categoryAnime.map(anime => (
          <div className="col-md-4 mb-4" key={anime.id}>
            <Link to={`/anime/${anime.id}`} className="card-link">
              <div className="card text-white">
                <img src={anime.image} className="card-img-top" alt={anime.title} />
                <div className="card-body">
                  <h5 className="card-title">{anime.title}</h5>
                  <p className="card-text">Category: {anime.category}</p>
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <h2 className="my-4 text-white text-center mt-5 mb-4">{category} Movies</h2>
      <div className="row">
        {categoryMovies.map(movie => (
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

export default GenrePage;
