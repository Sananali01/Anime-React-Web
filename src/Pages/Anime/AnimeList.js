import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animedata } from "./AnimeData";
import "../../assets/main.css";

const AnimeList = () => {
  const [animes, setAnimes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [animesPerPage] = useState(9);

  useEffect(() => {
    // Set the anime data from JSON file
    setAnimes(animedata);
  }, []);

  // Logic for pagination
  const indexOfLastAnime = currentPage * animesPerPage;
  const indexOfFirstAnime = indexOfLastAnime - animesPerPage;
  const currentAnimes = animes.slice(indexOfFirstAnime, indexOfLastAnime);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);



  return (
    <div className="container mt-5 mb-5">
      <h2 className="my-4 title text-center">Anime List</h2>
      <div className="pagination justify-content-center mt-4 mb-5">
        {[...Array(Math.ceil(animes.length / animesPerPage)).keys()].map(number => (
          <button key={number} onClick={() => paginate(number + 1)} className={`btn ${currentPage === number + 1 ? "btn-primary" : "btn-outline-primary"} mx-1`}>
            {number + 1}
          </button>
        ))}
      </div>
      {/* Anime cards */}
      <div className="row">
        {currentAnimes.map(anime => (
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

      {/* Pagination */}

    </div>
  );
}

export default AnimeList;
