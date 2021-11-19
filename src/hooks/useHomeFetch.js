import { useState, useEffect } from 'react'
//API
import API from '../API'

const useHomeFetch = () => {
  const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  }

  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchMovies = async(page, searchTerm = "") => {
    try {
      setError(false)
      setLoading(true)
      console.log(page)
      const movies = await API.fetchMovies(searchTerm, page)
      
      setState(prev => ({
        ...movies,
        results:
          page > 1 
          ? [...prev.results, movies.results]
          : [...movies.results]
      }))
        
      console.log(movies)

    } catch(error) {
      setError(true)
    }
  }

  useEffect(() => {
    fetchMovies(1)
  }, [])

  return { state, loading, error }
}

export default useHomeFetch