import React from 'react';
import ProjectBox from './ProjectBox';
import QR from '../images/QR.png';
import SQL from '../images/Database.jpg';
import toDO from '../images/todo.jpg';
import sudoku from '../images/Sudoku.jpg';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={QR} projectName="Scansaga" />
        <ProjectBox projectPhoto={toDO} projectName="Taskly" />
        <ProjectBox projectPhoto={sudoku} projectName="SudokuSolver" />
        <ProjectBox projectPhoto={SQL} projectName="DatabaseMeasure" />
      </div>

    </div>
  )
}

export default Projects