import React from 'react'
import { useState, useEffect } from 'react'

const movieUrl = import.meta.VITE_API || 'https://api.themoviedb.org/3/movie/';
const apiKey = import.meta.VITE_API_KEY || 'api_key=2f7e01095cf72db97a79a373d948db0f';

import MovieCard from '../Components/MovieCard';
import './PagesGrid.css'

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setTopMovies(data.results);
    }

    useEffect(() => {
        const topMovieUrl = `${movieUrl}top_rated?${apiKey}`;

        getTopRatedMovies(topMovieUrl);
    }, []);

    return (
       <div className='container-home'>
          <h2 className='title'>Melhores Filmes: </h2>
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

export default Home;