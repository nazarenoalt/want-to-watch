import React from 'react'
import { Link } from 'react-router-dom';
//assets
import TMDBLogo from '../../images/tmdb_logo.svg';
import RMDBLogo from '../../images/react-movie-logo.svg'
//styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles'

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to ="/">
          <LogoImg src={RMDBLogo} alt="Want To Watch logo" />
        </Link>
        <TMDBLogoImg src={TMDBLogo} alt="TMDB Logo" />
      </Content>
    </Wrapper>
  )
}

export default Header