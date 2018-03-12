import React from 'react'
import Link from 'gatsby-link'
import Mailto from 'react-mailto'
import heroImg1 from '../images/bench-accounting-49027-unsplash_grad.jpg' // relative path to image 
import relco from '../images/relco.jpg'
import funfood from '../images/funfood.jpg'
import FaCoffee from 'react-icons/lib/fa/coffee'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"

const IndexPage = ({data}) => (
  <div className="container">
    <ScrollAnimation animateIn="fadeIn" duration="2">
    <Intro />
    <hr/>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn" duration="2">
    <Work />
    <hr/>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn" duration="2">
    <Reel />
    <hr/>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn" duration="2">
    <Education />
    </ScrollAnimation>
    <hr/>
    <ScrollAnimation animateIn="fadeIn" duration="2">
    <About />
    </ScrollAnimation>
  </div>
)

const Intro = () => (
  <div
    id = "intro"
    className="main"
  >
    <img src={heroImg1} alt={"hero1"}/>
    <h2>Designer & developer from Helsinki, Finland.</h2>
    <p>I work with students, solopreneurs, startups and businesses 
      <br/>to create great experiences on the web and elsewhere.</p>
    <div>
    <p>
    <button>
      <Mailto email="pekarijoel@gmail.com">
        Email me!
      </Mailto>
    </button>
      </p>
    </div>
  </div>
)

const Work = () => (
  <div id="work">
    <h2>Work</h2>
    <ul>
      <li><b>Independent Consultant</b> | Freelancer | Dec '14 - (ongoing)</li>
      <li><b>Finnish Elections / City of Espoo</b> | Committee Member | '11 - '17</li>
      <li><b>3Digital</b> | 3D Generalist | Sep - Dec '14</li>
      <li><b>Forum Virium</b> | Project Assistant | May - Aug '13</li>
      <li><b>HOK-Elanto</b> | Customer Service and Sales Rep | May '07 - Feb '15</li>
    </ul>
  </div>
)

const Reel = () => (
  <div id="reel">
    <h3>Featured Works</h3>
    <a href="https://relco.fi"><img src={relco} alt={"relco.fi"}/></a>
    <a href="http://funfood.fi"><img src={funfood} alt={"funfood.fi"}/></a>
  </div>
)

const Education = () => (
  <div id="education">
    <h2>Education</h2>
    <ul>
      <li><b>freeCodeCamp</b> | Full Stack Web Development Certification | '16 - (ongoing)</li>
      <li><b>Metropolia UAS</b> | Bachelor of Engineering (B.E.) | '12 - '16</li>
      <li><b>Tapiola Upper Secondary School</b> | Matriculation Exam | '06 - '09</li>
    </ul>
  </div>
)

const About = () => (
  <div id="about">
    <h2>About</h2>
    <p>I enjoy hiking, running, good food and (almost...) all kinds of music.
      <br/>If you'd like to know more or possibly even work with me, well then:
      </p>
    <p>Let's grab a <FaCoffee /></p>
  </div>
)

export default IndexPage