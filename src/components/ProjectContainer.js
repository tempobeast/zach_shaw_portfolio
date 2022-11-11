import Project from './Project';
import ProjectList from './ProjectList';

function ProjectContainer () {
    return (
        <div className='project-container-border'>
            <div className="project-container">
                <Project />
                <ProjectList />
            </div>
        </div>
    )
}
export default ProjectContainer