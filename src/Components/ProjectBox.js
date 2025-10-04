import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    ScansagaDesc : "This is a firebase-powered Android app for event management with QR code check-ins, real-time attendance tracking, multimedia support, and geolocation sharing.",
    ScansagaGithub : "https://github.com/rosybudhathoki/ScanSaga",
    ScansagaWebsite : "https://github.com/rosybudhathoki/ScanSaga",

    TasklyDesc : "This project is a web-based to-do list application with cute aesthetics that helps you stay organized. User can add, delete, and modify tasks. It also has a stopwatch, and a timer feature.",
    TasklyGithub : "https://github.com/rosybudhathoki/Taskly",
    TasklyWebsite : "https://rosybudhathoki.github.io/Taskly/",

    SudokuSolverDesc: "A Python-based Sudoku solver that can solve any Suduko under a second. Testsed on 95 complex suduko problems using two diffent algorithms to evaluate which one is efficient.",
    SudokuSolverGithub:"https://github.com/rosybudhathoki/SudukoSolver",
    SudokuSolverWebsite:"https://github.com/rosybudhathoki/SudukoSolver/blob/main/Output.txt",

    DatabaseMeasureDesc:"This project is a Python-based database benchmarking tool that measures MongoDB performance by analyzing query efficiency across databases of different sizes, with and without indexing.",
    DatabaseMeasureGithub:"https://github.com/rosybudhathoki/DatabasePerformanceMeasure",
    DatabaseMeasureWebsite:"https://github.com/rosybudhathoki/DatabasePerformanceMeasure",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
              <span style=
              {{
                fontSize: '20px',       // Bigger text
                fontWeight: '500',      // Medium-bold for clarity
                lineHeight: '1.5',      // Better spacing between lines
                fontFamily: 'Arial, sans-serif',  // Clean, readable font
                color: '#ffffffff',               // Text color
              }}>
                {desc[projectName + 'Desc']}
              </span>
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox