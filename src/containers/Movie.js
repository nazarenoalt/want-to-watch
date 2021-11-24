import React from 'react'
import { useParams } from 'react-router-dom'
// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'
// components
import Spinner from '../components/Spinner'
import BreadCrumb from '../components/BreadCrumb'
import MovieInfo from '../components/MovieInfo'
import MovieInfoBar from '../components/MovieInfoBar'
import Actor from '../components/Actor'
import Grid from '../components/Grid'
// hooks
import { useMovieFetch } from '../hooks/useMovieFetch'
// image
import NoImage from '../images/no_image.jpg'

const Movie = () => {
  const { movieId  } = useParams()
  const { state: movie, loading, error } = useMovieFetch(movieId)

  if(loading) return <Spinner />
  if(error) return <div>Something went wrong. Try again</div>
  
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title}/>
      <MovieInfo movie={movie} />
      <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
      <Grid header='Actors'>
        {movie.actors.map(actor =>(
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
              : NoImage 
            }
          />
        ))}
      </Grid>
    </>
  )
}

export default Movie;