import React, { useState, useEffect, useRef } from "react"
//images
import searchIcon from '../../images/search-icon.svg'
//styles
import { Wrapper, Content } from './SearchBar.style'


const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState('')
  const initial = true

  const handleChange = e => {
    setState(e.currentTarget.value)
  }

  useEffect(() => {
    if(initial.current) {
      initial.current = false;
    } else {
      const timer = setTimeout(() => {
        setSearchTerm(state)
      }, 500)
      
      return () => clearTimeout(timer)

    }

  }, [setSearchTerm, state])

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt='search icon' />
        <input
          type='text'
          placeholder='Search movie'
          onChange={handleChange}
          value={state}
        />
      </Content>
    </Wrapper>
  )
}

export default SearchBar