import { useState, useEffect } from 'react'
// API
import API from '../API'

const useHomeFetch = () => {
  const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  }
  const [state, setState] = useState(initialState)
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const fetchMovies = async(page, searchTerm = "") => {
    try {
      setError(false)
      setLoading(true)
      const movies = await API.fetchMovies(searchTerm, page)
      
      setState(prev => ({
        ...movies,
        results:
          page > 1 
          ? [...prev.results, ...movies.results]
          : [...movies.results]
      }))
        
      setLoading(false);
    } catch(error) {
      setError(true)
    }
  }

  // initial and search
  useEffect(() => {
    setState(initialState)
    fetchMovies(1, searchTerm)
  }, [searchTerm])

  // load more
  useEffect(() => {
    if(!isLoadingMore) return

    fetchMovies(state.page + 1, searchTerm)
    setIsLoadingMore(false)
  }, [isLoadingMore, searchTerm, state.page])

  return {
    state,
    error,
    loading,
    searchTerm,
    setSearchTerm,
    isLoadingMore,
    setIsLoadingMore
  }
}

export default useHomeFetch