import React from 'react'
// routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// components
import Header from './components/Header'
import Home from './containers/Home'
import Movie from './containers/Movie'
import NotFound from './containers/NotFound'
// styles
import { GlobalStyle } from './GlobalStyle'

const App = () => (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieId" element={<Movie />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <GlobalStyle />
      </Router>
  );

export default App;
