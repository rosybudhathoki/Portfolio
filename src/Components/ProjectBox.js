import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    MemoAIDesc : "A full-stack AI-powered note-taking web application featuring a rich-text editor with AI autocomplete, real-time autosave, secure authentication, and cloud-backed persistence for seamless writing and productivity.",
    MemoAILanguages : "OpenAI API, TypeScript, JavaScript, React, Next.js, Tailwind CSS, TipTap, Clerk Authentication, TanStack Query",
    MemoAIGithub : "https://github.com/rosybudhathoki/memoAI",
    MemoAIWebsite : "https://memosai.netlify.app/",

    ScansagaDesc : "This is a firebase-powered Android app for event management with QR code check-ins, real-time attendance tracking, multimedia support, and geolocation sharing.",
    ScansagaLanguages : "Java, XML, Firebase, AndrioStudio, JUnit",
    ScansagaGithub : "https://github.com/rosybudhathoki/ScanSaga",
    ScansagaWebsite : "https://github.com/rosybudhathoki/ScanSaga/blob/main/Important%20files/MockUp_final.png",

    TasklyDesc : "This project is a web-based to-do list application with cute aesthetics that helps you stay organized. User can add, delete, modify and flter tasks. It also has a stopwatch, and a timer feature.",
    TasklyLanguages : "HTML, CSS, JavaScript",
    TasklyGithub : "https://github.com/rosybudhathoki/Taskly",
    TasklyWebsite : "https://rosybudhathoki.github.io/Taskly/",

    SudokuSolverDesc: "A Python-based Sudoku solver that can solve any Suduko within seconds. Testsed on 95 complex suduko problems using two diffent algorithms to evaluate which one is efficient.",
    SudokuSolverLanguages : "Python with libraries: Numpy, Matplotlib",
    SudokuSolverGithub:"https://github.com/rosybudhathoki/SudukoSolver",
    SudokuSolverWebsite:"https://github.com/rosybudhathoki/SudokuSolver/blob/main/finalResult.md",

    DatabaseMeasureDesc:"This project is a Python-based database benchmarking tool that measures MongoDB performance by analyzing query efficiency across databases of different sizes, with and without indexing.",
    DatabaseMeasureLanguages : "Python, MongoDb",
    DatabaseMeasureGithub:"https://github.com/rosybudhathoki/DatabasePerformanceMeasure",
    DatabaseMeasureWebsite:"https://github.com/rosybudhathoki/DatabasePerformanceMeasure/blob/main/README.txt",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img 
          src={projectPhoto} 
          alt="Project display" 
          style={{
            width: '100%',
            height: '350px',        // same height for all images
            objectFit: 'cover',     // preserves aspect ratio
            borderRadius: '12px',
            marginBottom: '1rem'
          }}
        />
        <div>
            <br />
            <h2 className='semibold'>{projectName}</h2>
            <br />
              <span style=
              {{
                fontSize: '20px',       
                fontWeight: '500',     
                lineHeight: '1.5',    
                fontFamily: 'Arial, sans-serif',
                color: '#ffffffff',              
              }}>
                {desc[projectName + 'Desc']}
              </span>
            <br />

            <br />
              <span
                style={{
                  fontSize: '18px',
                  fontWeight: '500',
                  lineHeight: '1.5',
                  fontFamily: 'Arial, sans-serif',
                  color: '#ffffff',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                  padding: '4px 8px',              
                  borderRadius: '4px',                  
                }}
              >
                {desc[projectName + 'Languages']}
              </span>
              <br />

            <div className="projectButtons">
              <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
                <button className='projectbtn'><FaGithub/> Github</button>
              </a>

              <a href={desc[projectName + 'Website']} target='_blank'>
                <button className='projectbtn'><CgFileDocument/> Demo</button>
              </a>
          </div>
        </div>
    </div>
  )
}

export default  ProjectBox