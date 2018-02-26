import React from 'react'
import Link from 'gatsby-link'
import GhIcon from 'react-icons/lib/fa/github'
import LiIcon from 'react-icons/lib/fa/linkedin'
import CpIcon from 'react-icons/lib/fa/codepen'
import FaCoffee from 'react-icons/lib/fa/coffee'

const Footer = () => (
  <div>
    <p>Let's grab a <FaCoffee /></p>
    <a href='http://www.github.com/joelpek'><GhIcon color="black"width="40" height="40" /></a>
    <a href='http://www.linkedin.com/in/joelpekari'><LiIcon color="black" width="40" height="40" /></a>
    <a href='https://codepen.io/stewdee'><CpIcon color="black" width="40" height="40" /></a>
    {/* <a href='http://www.freecodecamp.com/joelpek'><img href='http://www.freecodecamp.com/joelpek'src="https://goo.gl/oQrQYo" width="40" height="40"/></a> */}
  </div>
)
  
export default Footer