import React from 'react'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../Components/MovieCard';

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import './PagesGrid.css'

const Search = () => {

  const searchParams = useSearchParams();
  
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
  }

  useEffect(() => {
    const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}`;

    getSearchMovies(searchWithQueryUrl);
  }, [query]);

  return (
    <div className='container-home'>
      <h2 className='title'>
        Resultado para: <span className='query-text'>{query}</span> 
      </h2>
      <p id='list-movie'>
        {topMovies === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && 
            topMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
        ))}
      </p>
    </div> 
  )
}

export default Search;