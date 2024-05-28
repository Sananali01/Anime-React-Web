import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { animedata } from './AnimeData';

const AnimeDetail = () => {
  const { id } = useParams();
  const anime = animedata.find((anime) => anime.id === parseInt(id));

  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [userName, setUserName] = useState('');

  const displayRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="star">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="star">&#9734;</span>);
      }
    }
    return stars;
  };

  const addReview = () => {
    if (review.trim() === '') {
      alert('Please fill out the review field.');
      return;
    }
    if (rating === 0) {
      alert('Please select a rating.');
      return;
    }
    if (userName.trim() === '') {
      alert('Please enter your name.');
      return;
    }

    const newReview = { text: review, rating, userName };
    setReviews([...reviews, newReview]);
    setReview('');
    setRating(0);
    setUserName('');
  };

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
          
<div className="user-reviews">
<h3 className="review-head">Leave a Review</h3>
<textarea
  rows="4"
  cols="50"
  placeholder="Write your review..."
  value={review}
  onChange={(e) => setReview(e.target.value)}
></textarea>
<input
  className='review-input mt-3'
  type="text"
  placeholder="Your Name"
  value={userName}
  onChange={(e) => setUserName(e.target.value)}
/>
<div className="mt-2">
  <label htmlFor="rating" className="review-rating">
    Rating: &nbsp;
  </label>
  <select
    id="rating"
    value={rating}
    onChange={(e) => setRating(parseInt(e.target.value))}
  >
    <option value="0">Select rating...</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select>
  &nbsp;&nbsp;&nbsp;
  <div className=" ml-5 rating-stars">
    {displayRatingStars(rating)}
  </div>
</div>

<button className="btn btn-primary mt-2 float-right" onClick={addReview}>
  Submit Review
</button>
{reviews.length > 0 ? (
  <div className="reviews-list">
    <h3 className="review-head">User Reviews</h3>
    {reviews.map((review, index) => (
      <div key={index} className="review-card">
        <div className="review-header">
          <span className="user">{review.userName}</span>
          <span className="rating">Rating: {displayRatingStars(review.rating)}</span>
        </div>
        <div className="review-text">{review.text}</div>
      </div>
    ))}
  </div>
) : (
  <p className="no-reviews mt-5">No reviews yet.</p>
)}
</div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;


