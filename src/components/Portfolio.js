import React from 'react'
import styled from 'styled-components'

const PortfolioItem = styled.div`
  height: 300px;
  background: ${props => `url(${props.imageSrc})`};
  background-repeat: no-repeat;
  background-size: auto;
`

const Portfolio = (props) => {
  return(
    <section className="section" style={{ padding: 0 }}>
      <div className="container is-fluid">
        <h1 className="title">Portfolio</h1>

        <div className="columns">
          <PortfolioItem className="column is-half" imageSrc="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350">
            First column
          </PortfolioItem>
          <PortfolioItem className="column is-half" imageSrc="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350">
            Second column
          </PortfolioItem>
        </div>

        <div className="columns">
          <PortfolioItem className="column is-one-half" imageSrc="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350">
            First column
          </PortfolioItem>
          <PortfolioItem className="column is-one-half" imageSrc="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350">
            Fourth column
          </PortfolioItem>
          <PortfolioItem className="column is-one-third" imageSrc="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350">
            Third column
          </PortfolioItem>
        </div>
      </div>
    </section>
  )
}
export default Portfolio
