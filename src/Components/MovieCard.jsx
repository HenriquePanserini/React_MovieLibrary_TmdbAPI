import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

const imageUrl = import.meta.VITE_IMG;

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div>
        <img src={imageUrl + movie.poster_path} alt={movie.title}/>
        <h2 id='title'>{movie.title}</h2>
        <span>
            <FaStar />{movie.vote_average}
        </span> 
        {showLink && <Link className='detail' to={`/movie/${movie.id}`}>Detalhes</Link>}   
    </div>
  )
}

export default MovieCard