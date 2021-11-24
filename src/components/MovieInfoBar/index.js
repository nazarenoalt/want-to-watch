import React from 'react'
//helpers
import { calcTime, convertMoney } from '../../helpers'
// styles
import { Wrapper, Content } from './MovieInfoBar.style'

const MovieInfoBar = ({ time, budget, revenue}) => {
  return (
    <Wrapper>
      <Content>
        <div className="column">
          <p>Running time: {calcTime(time)}</p>
        </div>
        <div className="column">
          <p>Budget: {convertMoney(budget)}</p>
        </div>
        <div className="column">
          <p>Revenue: {convertMoney(revenue)}</p>
        </div>
      </Content>
    </Wrapper>
  )
}

export default MovieInfoBar
