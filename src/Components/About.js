import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/WomenCoder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            <span style=
              {{
                fontSize: '25px',       // Bigger text
                fontWeight: '500',      // Medium-bold for clarity
                lineHeight: '1.5',      // Better spacing between lines
                color: '#ffffffff',               // Text color
              }}>
              Hi, my name is <b>Rosy Budhathoki</b>. I'm an aspiring <b>Software Developer</b> and a final-year student pursuing a <b>Bachelor of Science in Computer Science – Specialization</b> at <b>the University of Alberta</b>.<br/><br/>
              I recently completed a 16-month internship as a <b>Software Developer Intern</b> at Pason Systems in Calgary. This role was extended for an additional 4 months for, and I am now working as a <b>Software Developer in Test</b> until the end of 2025. I am <b>open</b> to new experiences where I can contribute and continue growing as a developer.<br/><br/>
              Outside of coding, I enjoy scenic hikes, biking, trivia, and music.
              </span>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skills</h1>
      <div className='skills'>
        
        <Skills skill='Python' />
        <Skills skill='Java' />
        <Skills skill='C' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='GraphQl' />
        <Skills skill='MongoDb' />
        <Skills skill='React' />
        <Skills skill='Julia' />
        <Skills skill='Selenium' />
        <Skills skill='Javascript' />
        <Skills skill='SQL' />
        <Skills skill='XML' />
        <Skills skill='Jenkins' />
        <Skills skill='Groovy' />

      </div>
    </>
  )
}

export default About