import React from "react"

function ProjectList ({ projectData, setClickedProject }) {

    return (
        <div className="project-list">
            <hr></hr>
            {projectData.map((project) => <h4 className="project-list-name" key={project.name} onClick={(e) => setClickedProject(project)}>{project.name}</h4>)}
        </div>
    )
}
export default ProjectList