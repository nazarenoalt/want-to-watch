import { useState, useEffect } from 'react'
// API
import API from '../API'
// Helpers
import { isPersistedState } from '../helpers'

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
    if(!searchTerm) {
      const sessionState = isPersistedState('homeState')
      console.log(sessionState)
      if(sessionState) {
        setState(sessionState);
        return;
      }
    }
    setState(initialState)
    fetchMovies(1, searchTerm)
  }, [searchTerm])

  // write to sessionStorage
  useEffect(() => {
    if(!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state))
  }, [searchTerm, state])
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