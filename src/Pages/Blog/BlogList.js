import React, { useState } from 'react';
import BlogData from './BlogData';
import { Link } from 'react-router-dom';
import '../../assets/Blog.css'; // Import custom CSS for BlogList component

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = BlogData.slice(indexOfFirstBlog, indexOfLastBlog);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(BlogData.length / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="blog-container">
      <h1 className="blog-title ">Anime Blog</h1>

      <nav className="blog-pagination">
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="blog-grid mb-5">
        {currentBlogs.map(blog => (
          <div className="blog-card mt-4" key={blog.id}>
            <div className="blog-content text-white">
              <h2 className="blog-heading">{blog.title}</h2>
              <p className="blog-intro">{blog.intro}</p>
              <Link to={`/blog/${blog.id}`} className="btn btn-primary btn-read-more">Read More</Link>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default BlogList;
