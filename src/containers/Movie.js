import React from 'react'
import { useParams } from 'react-router-dom'
// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'
// components
import Spinner from '../components/Spinner'
// hooks
import { useMovieFetch } from '../hooks/useMovieFetch'
// image
import NoImage from '../images/no_image.jpg'
import BreadCrumb from '../components/BreadCrumb'
import MovieInfo from '../components/MovieInfo'

const Movie = () => {
  const { movieId  } = useParams()
  const { state: movie, loading, error } = useMovieFetch(movieId)
  console.log(movie.original_title)
  if(loading) return <Spinner />
    
  if(error) return <div>Something went wrong. Try again</div>
  
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title}/>
      <MovieInfo movie={movie} />
    </>
  )
}

export default Movie;