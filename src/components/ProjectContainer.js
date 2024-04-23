import React, { useState } from 'react';
import AgeGuesser from './AgeGuesser';
import Project from './Project';
import ProjectList from './ProjectList';

function ProjectContainer ({ projectData, top100, setTop100 }) {
    const [clickedProject, setClickedProject] = useState({})

    return (
        <div className='project-container-border'>
            <div className="project-container absolute">
                {clickedProject.name === "What's My Age Again?" ? <AgeGuesser className="project-container__details"top100={top100} setTop100={setTop100}/> : <Project className="project-container__details" clickedProject={clickedProject}/>}
                <ProjectList className="project-container__list" projectData={projectData} setClickedProject={setClickedProject}/>
            </div>
        </div>
    )
}
export default ProjectContainer