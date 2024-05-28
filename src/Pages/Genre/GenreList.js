import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animedata } from "../Anime/AnimeData";
import { moviedata } from "../Movie/moviedata";
import '../../assets/main.css'; // Import CSS file for styling

const GenreList = () => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    // Extract unique categories from both anime and movie data
    const uniqueCategories = [...new Set([...animedata.map(anime => anime.category), ...moviedata.map(movie => movie.category)])];
    setAllCategories(uniqueCategories);
  }, []);

  return (
    <>
      <div className="container category-container mt-5 ">
        <h2 className="my-4 title text-center">All Categories</h2>
        <div className="row">
          {allCategories.map(category => (
            <div className="col-md-3" key={category}>
              <div className="category-item">
                <Link to={`/category/${category}`}>{category}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GenreList;
