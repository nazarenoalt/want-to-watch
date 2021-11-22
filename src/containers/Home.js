import React, { useState, useEffect } from 'react'
import HeroImage from '../components/HeroImage'
//components
import Grid from '../components/Grid'
import Thumb from '../components/Thumb'
import Spinner from '../components/Spinner'
import SearchBar from '../components/SearchBar'
import Button from '../components/Button'
//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'
//hooks
import useHomeFetch from '../hooks/useHomeFetch'
//images
import NoImage from '../images/no_image.jpg'

const Home = () => {
  const { 
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    isLoadingMore,
    setIsLoadingMore,
  } = useHomeFetch()

  if (error) return <div>Something went wrong...</div>

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
            {state.page < state.total_pages && !loading && !isLoadingMore && (
              <Button text='Load More' callback={() => setIsLoadingMore(true)} />
            )}
            {/* state.page < state.total_pages && isLoadingMore && (
              <Spinner / >
            ) */}
    </>
  )
}

export default Home