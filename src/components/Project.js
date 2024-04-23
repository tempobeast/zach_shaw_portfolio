import React from "react"
import YouTubeEmbed from './YouTubeEmbed'

function Project ({clickedProject}) {
    const {name, description, video, gitHub, url} = clickedProject

    return (
        <div className="project">
            <div className="project_titles_container">
                <h3 className="project-name">{name}</h3>
                {url ? <a href={url} className="social_link">App</a> : null}
                {gitHub ? <a href={gitHub} className="social_link">GitHub</a> : null}
            </div>
            { clickedProject ? <YouTubeEmbed name={name} video={video}></YouTubeEmbed> : null}
            <p>{description}</p>
        </div>
    )
}
export default Project