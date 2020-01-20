/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaGithub, FaLinkedin, FaCodepen, FaFreeCodeCamp } from "react-icons/fa"
import { IconContext } from "react-icons"

import Header from "./header"
import "./layout.css"
// import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          {/* <ScrollAnimation animateIn="fadeIn" duration="2"> */}
          <IconContext.Provider value={{ className: "faIcons" }}>
            <a href="http://www.linkedin.com/in/joelpekari">
              <FaLinkedin size={30} />
            </a>
            <a href="http://www.github.com/joelpek">
              <FaGithub size={30} />
            </a>
            <a href="https://codepen.io/stewdee">
              <FaCodepen size={30} />
            </a>
            <a href="http://www.freecodecamp.com/joelpek">
              <FaFreeCodeCamp size={35} />
            </a>
          </IconContext.Provider>
          <br />
          {/* </ScrollAnimation> */}
          <br />
          <p>
            © {new Date().getFullYear()}, Built with{" "}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
