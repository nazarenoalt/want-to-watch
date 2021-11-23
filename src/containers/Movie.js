import React from 'react'
import { useParams } from 'react-router-dom'
// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'
// components
import Grid from '../components/Grid'
import Spinner from '../components/Spinner'
// hooks
import { useMovieFetch } from '../hooks/useMovieFetch'
// image
import NoImage from '../images/no_image.jpg'

const Movie = () => {
  const { movieId  } = useParams()
  const { state, loading, error } = useMovieFetch(movieId)

  console.log(state)
  return (
    <>
      <div>Movie</div>
    </>
  )
}

export default Movie;