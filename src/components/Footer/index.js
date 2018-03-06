import React from 'react'
import Link from 'gatsby-link'
import GhIcon from 'react-icons/lib/fa/github'
import LiIcon from 'react-icons/lib/fa/linkedin'
import CpIcon from 'react-icons/lib/fa/codepen'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"

const Footer = () => (
  <div id='footer'>
    {/* <ScrollAnimation animateIn="fadeIn" duration="2"> */}
      <a href='http://www.github.com/joelpek'><GhIcon color="black"width="40" height="40" /></a>
      <a href='http://www.linkedin.com/in/joelpekari'><LiIcon color="black" width="40" height="40" /></a>
      <a href='https://codepen.io/stewdee'><CpIcon color="black" width="40" height="40" /></a>
      <a href='http://www.freecodecamp.com/joelpek'><img href='http://www.freecodecamp.com/joelpek'src="https://goo.gl/oQrQYo" width="50" height="50"/></a>
    {/* </ScrollAnimation> */}
  </div>
)
  
export default Footer