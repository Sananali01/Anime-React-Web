// src/BlogPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import BlogData from './BlogData';
import '../../assets/Blog.css'; 

const BlogPage = () => {
  const { id } = useParams();
  const blog = BlogData.find(blog => blog.id === parseInt(id));

  return (
    <div className="blog-page-container">
      <h1 className="blog-page-title">{blog.title}</h1>
      <h4 className="blog-page-intro">{blog.intro}</h4>
      <div className="blog-page-meta">
        <p><strong>Author:</strong> {blog.author}</p>
        <p><strong>Date:</strong> {blog.date}</p>
      </div>
      <div className="blog-page-content">
        <p>{blog.content}</p>
      </div>
    </div>
  );
}

export default BlogPage;
