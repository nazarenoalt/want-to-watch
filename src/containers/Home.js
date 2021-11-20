import React, { useState, useEffect } from 'react'
import HeroImage from '../components/HeroImage'
//components
import Grid from '../components/Grid'
import Thumb from '../components/Thumb'
import Spinner from '../components/Spinner'
import SearchBar from '../components/SearchBar'
//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'
//hooks
import useHomeFetch from '../hooks/useHomeFetch'
//images
import NoImage from '../images/no_image.jpg'

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm } = useHomeFetch()

  console.log(state)
  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage 
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
        ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      {loading ? <h1>Loading...</h1> : 
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {state.results.map(movie => (
          <Thumb 
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          /> 
        ))}
      </Grid>}
      <Spinner />
    </>
  )
}

export default Home