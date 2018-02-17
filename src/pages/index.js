import React from 'react'
import Link from 'gatsby-link'
import Mailto from 'react-mailto'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to Joel Pekari's portfolio site (still in renovation).</p>
    <p>Let's go build something great.</p>
<<<<<<< Updated upstream
    <Mailto email="joel.pekari@gmail.com" obfuscate={true}>
      Email me!
    </Mailto>
=======
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
>>>>>>> Stashed changes
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </div>
)

<<<<<<< Updated upstream
=======
export const pageQuery = graphql `
  query IndexQuery {
    allMarkdownRemark(
      limit:10
      sort: { fields: [frontmatter___date], order: DESC }
      filter:{ frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

>>>>>>> Stashed changes
export default IndexPage
