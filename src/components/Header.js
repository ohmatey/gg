import React from 'react'
import styled from 'styled-components'

const Navbar = styled.nav`
  
`

const Header = props => {
  return(
    <Navbar className="navbar" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </a>

        <a role="button" className="navbar-burger is-visible" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </Navbar>
  )
}
export default Header
