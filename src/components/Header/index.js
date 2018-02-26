import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div className='nav'
    style={{
      background: 'black',
      marginBottom: '1.45rem',
    }}
  >
    <div
      id='scroll-links'
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Joel Pekari UX/WEB
        </Link>
      </h1>
      <h3>
        <a          
          data-scroll href="#work"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Work
        </a>
      </h3>

      <h3>
        <a
          data-scroll href="#education"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Education
        </a>
      </h3>


      <h3>
        <a
          data-scroll href="#about"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          About
        </a>
      </h3>
    </div>
  </div>
)

export default Header
