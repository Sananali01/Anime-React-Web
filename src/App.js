import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './Pages/Home';
import Login from './Pages/Login'
import Error404 from './Pages/Error404'
import AnimeList from "./Pages/Anime/AnimeList"
import AnimeDetail from "./Pages/Anime/AnimeDetail"
import MovieList from "./Pages/Movie/MovieList"
import MovieDetail from './Pages/Movie/MovieDetail';
import GenreList from './Pages/Genre/GenreList'
import GenrePage from './Pages/Genre/GenrePage'
import Search from './Pages/Genre/Search'
import BlogList from './Pages/Blog/BlogList'
import BlogPage from './Pages/Blog/BlogPage'
import About from './Pages/More/About'
import ContactUs from './Pages/More/Contact'
import FAQ from './Pages/More/FAQ'





function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route 
            path="/" element={ <>
                <Navbar />
                <HomePage />
                <Footer />
              </> }  />
          <Route 
            path="/anime" 
            element={
              <>
                <Navbar />
                <AnimeList />
                <Footer />
              </>
            } 
          />
         
          <Route 
            path="/anime/:id" 
            element={
              <>
                <Navbar />
                <AnimeDetail />
                <Footer />
              </>
            } 
          />
           <Route 
            path="/movie" 
            element={
              <>
                <Navbar />
                <MovieList />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/movie/:id" 
            element={
              <>
                <Navbar />
                <MovieDetail />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/genres" 
            element={
              <>
                <Navbar />
                <GenreList />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/search" 
            element={
              <>
                <Navbar />
                <Search />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/login" 
            element={<Login />} 
          />


          
          <Route 
            path="/category/:category" 
            element={
              <>
                <Navbar />
                <GenrePage />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/blog" 
            element={
              <>
                <Navbar />
                <BlogList />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/blog/:id" 
            element={
              <>
                <Navbar />
                <BlogPage />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/about" 
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <>
                <Navbar />
                <ContactUs />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/faq" 
            element={
              <>
                <Navbar />
                <FAQ />
                <Footer />
              </>
            } 
          />
          <Route 
            path="*" 
            element={<Error404 />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
