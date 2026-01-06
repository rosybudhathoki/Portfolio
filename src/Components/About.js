import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/WomenCoder.json';
import ArrowDown from '../LottieFiles/ArrowDown.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' > <h3> Get to <b>know me! </b></h3></h1>
          <p>
            <span style=
              {{
                fontSize: '25px',      
                fontWeight: '500',      
                lineHeight: '1.5',     
                color: '#ffffffff',           
              }}>
                <p>
                  Hi, my name is <b>Rosy Budhathoki</b>. I'm an aspiring <b>Software Developer</b> and a final-year student pursuing a <b>Bachelor of Science in Computer Science – Specialization </b> with primary focus on Machine Learning and AI at <b>the University of Alberta</b>.<br/><br/>

                  I recently completed a 20-month work term as a <b>Software Developer Intern</b> at Pason Systems in Calgary. I am <b>open</b> to new experiences where I can contribute and continue growing as a developer.<br/><br/>

                  I enjoy working on <b>complex problems</b> and thrive in collaborative environments. I am a <b>team player</b>, excellent communicator, and pay close attention to <b>details</b>.<br/><br/>

                  Besides coding, I also enjoy scenic hikes, biking, trivia, and music.
                </p>
              </span>
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          {/* Coder animation */}
          <Tilt>
            <Lottie 
              animationData={Coder} 
              loop={true} 
              style={{ width: '400px', height: 'auto' }} 
            />
          </Tilt>
          {/* Thin arrow below */}
          <Tilt>
            <Lottie 
              animationData={ArrowDown} 
              loop={true} 
              style={{ width: '50px', height: 'auto' }}
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