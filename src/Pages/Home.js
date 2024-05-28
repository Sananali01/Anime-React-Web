import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animedata } from "./Anime/AnimeData";
import "../assets/main.css";
import home from '../images/home (1).jpg';
import home2 from '../images/home (2).jpg';

// Import your own images for the carousel
import carouselImage1 from '../images/wall1.jpg';
import carouselImage2 from '../images/wall2.jpg';
import carouselImage3 from '../images/wall3.jpg';
import carouselImage4 from '../images/wall4.jpg';
import carouselImage5 from '../images/wall5.jpg';
import carouselImage6 from '../images/wall6.jpg';
import carouselImage7 from '../images/wall7.jpg';
import carouselImage8 from '../images/wall8.jpg';
import carouselImage9 from '../images/wall9.jpg';
import carouselImage10 from '../images/wall10.jpg';
import carouselImage11 from '../images/wall11.jpg';

const HomePage = () => {
  const [featuredAnime, setFeaturedAnime] = useState([]);

  useEffect(() => {
    // Selecting a random subset of animeData to feature on the homepage
    const shuffledAnime = animedata.sort(() => 0.5 - Math.random());
    const selectedAnime = shuffledAnime.slice(0, 6); // Selecting 6 random anime
    setFeaturedAnime(selectedAnime);
  }, []);

  return (
    <>
      <div className="jumbotron custom-jumbotron">
        <div className="overlay">
          <h1 className='text-white'>Welcome to AnimeWebsite!</h1>
          <p className="lead">Explore your favorite anime here.</p>
          <Link to="/anime" className="btn btn-primary btn-lg">Explore Now</Link>
        </div>
      </div>
      <div className="container mt-5 mb-5 fade-left-img">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={home} alt="Anime Theme" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="animated-text fade-right">Discover More Anime</h2>
            <p className='text-white animated-text fade-right'>Explore a vast collection of anime series and movies, ranging from timeless classics to the latest releases. Whether you're into action-packed adventures, heartwarming romances, or mind-bending mysteries, our curated selection has something for every anime enthusiast. Immerse yourself in captivating stories and vibrant animations that will transport you to fascinating worlds and unforgettable journeys. Discover your next favorite anime today</p>
            <Link to="/anime" className="btn btn-primary animated-text fade-right">Discover More</Link>
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-5 fade-left">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <img src={home2} alt="Anime Fans" className="img-fluid" />
          </div>
          <div className="col-md-6 order-md-1">
            <h2 className="animated-text fade-left">Join Our Community</h2>
            <p className='text-white animated-text fade-left'>Welcome to AnimeWebsite, where your favorite anime comes to life! Dive into our extensive collection of top-rated series, find hidden gems, and connect with a community of passionate anime fans. Stay updated with the latest news, upcoming releases, and exclusive content that you won't find anywhere else. Whether you're a long-time otaku or a newcomer to the anime world, there's something here for everyone. Join us and experience the magic of anime like never before!</p>
            <Link to="/login" className="btn btn-primary animated-text fade-left">Join Now</Link>
          </div>
        </div>
      </div>
    
      <div id="animeCarousel" className="carousel slide mb-5" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#animeCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#animeCarousel" data-slide-to="1"></li>
          <li data-target="#animeCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carouselImage1} className="d-block w-100" alt="First slide"/>

          </div>
          <div className="carousel-item">
            <img src={carouselImage2} className="d-block w-100" alt="Second slide"  />

          </div>
          <div className="carousel-item">
            <img src={carouselImage3} className="d-block w-100" alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img src={carouselImage4} className="d-block w-100" alt="Third slide"  />
          </div>
          <div className="carousel-item">
            <img src={carouselImage5} className="d-block w-100" alt="Fifth slide"  />
          </div>
          <div className="carousel-item">
            <img src={carouselImage6} className="d-block w-100" alt="Sixth slide" />
          </div>
          <div className="carousel-item">
            <img src={carouselImage7} className="d-block w-100" alt="Seventh slide"  />
          </div>
          <div className="carousel-item">
            <img src={carouselImage8} className="d-block w-100" alt="Eighth slide"  />
          </div>
          <div className="carousel-item">
            <img src={carouselImage9} className="d-block w-100" alt="Ninth slide"  />
          </div>
          <div className="carousel-item">
            <img src={carouselImage10} className="d-block w-100" alt="Tenth slide"/>
          </div>
          <div className="carousel-item">
            <img src={carouselImage11} className="d-block w-100" alt="Eleventh slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#animeCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#animeCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>



      <div className="container mt-5 mb-5">
        <h2 className="title text-center">Featured Anime</h2>
        <div className="row mt-5">
          {featuredAnime.map(anime => (
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
      </div>

    </>
  );
}

export default HomePage;
