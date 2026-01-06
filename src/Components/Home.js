import React from 'react';
import Lottie from  "lottie-react";
import WomenCoder from "../LottieFiles/Female Avatar.json";
import Typed from "./Typed.js";
import Avatar from "../LottieFiles/CodingWithCoffile.json";
import ArrowDown from '../LottieFiles/ArrowDown.json';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>ROSY BUDHATHOKI</b></h1>
          <Typed/>   
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          {/* Women Coder animation */}
            <Lottie 
              animationData={WomenCoder} 
              loop={true} 
              style={{ width: '400px', height: 'auto' }} 
            />

          {/* Thin arrow below */}
            <Lottie 
              animationData={ArrowDown} 
              loop={true} 
              style={{ width: '50px', height: 'auto' }} 
            />
        </div>
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'><h3> Brief <b>introduction </b></h3></h1>
          <p>
            <span style=
              {{
                fontSize: '25px',       // Bigger text
                fontWeight: '500',      // Medium-bold for clarity
                lineHeight: '1.5',      // Better spacing between lines
                color: '#ffffffff',               // Text color
              }}>
              I’m an enthusiastic learner who loves exploring new concepts and tackling challenges.
              I’m eager to grow my skills in software development and contribute to exciting projects. <br /><br />
              With strong communication skills and a collaborative mindset, I enjoy working in teams and bringing ideas to life. <br /><br />
              </span>
          
            <p>
              <strong>Fun fact:</strong> I'm a big <b> coffee</b> enthusiast. 
            <CiCoffeeCup style={{ transform: "scale(1.5) rotate(15deg)" }} />
            </p>
          </p>
          
        </div>
        <Lottie 
          className="Avatar" 
          animationData={Avatar} 
          loop={true} 
        />
      </div>
    </div>
  )
}

export default Home