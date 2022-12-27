import React, { useState } from 'react';
import Project from './Project';
import ProjectList from './ProjectList';

function ProjectContainer ({ projectData }) {
    const [clickedProject, setClickedProject] = useState({})

    return (
        <div className='project-container-border'>
            <div className="project-container">
                <Project clickedProject={clickedProject}/>
                <ProjectList projectData={projectData} setClickedProject={setClickedProject}/>
            </div>
        </div>
    )
}
export default ProjectContainer