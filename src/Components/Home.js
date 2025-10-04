import React from 'react';
import Lottie from  "lottie-react";
import WomenCoder from "../LottieFiles/Female Avatar.json";
import Typed from "./Typed.js";
import Avatar from "../LottieFiles/CodingWithCoffile.json";
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

        <Lottie 
          className="illustration" 
          animationData={WomenCoder} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
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
          
            Fun fact: I'm a big <b>coffee</b> enthusiast.{" "}
            <CiCoffeeCup style={{ transform: "scale(1.5) rotate(15deg)" }} />
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