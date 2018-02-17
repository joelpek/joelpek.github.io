import React from 'react'
import Link from 'gatsby-link'
import Mailto from 'react-mailto'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to Joel Pekari's portfolio site (still in renovation).</p>
    <p>Let's go build something great.</p>
    <Mailto email="joel.pekari@gmail.com" obfuscate={true}>
      Email me!
    </Mailto>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </div>
)

export default IndexPage
