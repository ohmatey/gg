import React from 'react'
import styled from 'styled-components'

import bgImage from '../images/bg.jpg'

const FullScreenHeroImage = styled.div`
  background: url(${bgImage})center center;
  background-size:cover;
`

const Hero = (props) => {
  return(
    <FullScreenHeroImage className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Chanakan Budrak
          </h1>
          <h2 className="subtitle">
            Multilingual Illustrator, Writer and Cat Lover.
          </h2>
        </div>
      </div>
    </FullScreenHeroImage>

  )
}
export default Hero
