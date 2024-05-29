import React from 'react';
import { useParams } from 'react-router-dom';
import { animedata } from './AnimeData';

const AnimeDetail = () => {
  const { id } = useParams();
  const anime = animedata.find((anime) => anime.id === parseInt(id));
  if (!anime) {
    return <div>Anime not found</div>;
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5 text-white ">
          <div>
            <img src={anime.image} className="img-fluid" alt={anime.title} />
            <h2 className="mt-3">{anime.title}</h2>
            <p><strong>Category:</strong> {anime.category}</p>
            <p><strong>Genre:</strong> {anime.genre}</p>
            <p><strong>Description:</strong> {anime.description}</p>
            <p><strong>Rating:</strong> {anime.rating}</p>
            <p><strong>Release Year:</strong> {anime.releaseYear}</p>
            <p><strong>Episodes:</strong> {anime.episodes}</p>
            <p><strong>Status:</strong> {anime.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;


