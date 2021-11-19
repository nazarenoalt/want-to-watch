import React from 'react'
//assets
import TMDBLogo from '../../images/tmdb_logo.svg';
import RMDBLogo from '../../images/react-movie-logo.svg'
//styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles'

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <LogoImg src={RMDBLogo} alt="Want To Watch logo" />
        <TMDBLogoImg src={TMDBLogo} alt="TMDB Logo" />
      </Content>
    </Wrapper>
  )
}

export default Header