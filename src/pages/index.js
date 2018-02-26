import React from 'react'
import Link from 'gatsby-link'
import Mailto from 'react-mailto'
import heroImg1 from '../images/bench-accounting-49027-unsplash.jpg' // relative path to image 
import relco from '../images/relco.jpg'
import funfood from '../images/funfood.jpg'
import unoi from '../images/unoi.jpg'

// import Intro from '../components/Intro';
// import Work from '../components/Work';
// import Education from '../components/Education';
// import Reel from '../components/Reel';
// import About from '../components/About';

const IndexPage = ({data}) => (
  <div className="container">
    <Intro />
    <Work />
    <Education />
    <Reel />
    <About />
  </div>
)

const Intro = () => (
  <div
    id = "intro"
    className="main"
  >
    <img src={heroImg1} alt={"hero1"}/>
    <h2>Designer & developer from Helsinki, Finland.</h2>
    <p>I work with solopreneurs, startups and businesses to create great experiences on the web and elsewhere.</p>
    <div>
    <p>
    <button>
      <Mailto email="pekarijoel@gmail.com" /* obfuscate={true} */>
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
    <a href="https://relco.fi"><img src={relco} alt={"relco.fi"}/><h3>Relco</h3></a>
    <a href="http://funfood.fi"><img src={funfood} alt={"funfood.fi"}/><h3>FunFood</h3></a>
    <a href="http://unoi.co"><img src={unoi} alt={"unoi.fi"}/><h3>unoi</h3></a>
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
    <p>I enjoy hiking, running good food and (almost...) all kinds of music.</p>
  </div>
)

export default IndexPage