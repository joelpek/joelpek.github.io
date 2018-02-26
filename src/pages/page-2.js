import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to Joel Pekari's portfolio site (still in renovation).</p>
    <p>Let's go build something great.</p>
    <p>
      <Mailto email="joel.pekari@gmail.com" obfuscate={true}>
        Email me!
      </Mailto>
    </p>
    <h2>Page Index</h2>
    {data.allMarkdownRemark.edges.map(post => (
      <li>
        <Link 
          key={post.node.id}
          href={post.node.frontmatter.path}>
          {post.node.frontmatter.title}
        </Link>
      </li>
    ))}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </div>
)

export default SecondPage
