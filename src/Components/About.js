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
            Hi, my name is <b>Rosy Budhathoki</b>. I'm an aspiring <b>Software Developer</b>, and a final year student of <b>Bachelor in Science - Computer Science Specilization</b> at <b>the University of Alberta</b>. <br/><br/>
            I'm currently working as a <b>Software Developer Intern</b> at Pason Systems in Calgary.
            I am <b>open</b> to new experiences where I can contribute, and grow as a developer.<br/> <br/>
            Apart from coding I really enjoy going on scenic hikes, biking, trivia, and music. 
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