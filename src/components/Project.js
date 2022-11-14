import React from "react"
import YouTubeEmbed from './YouTubeEmbed'

function Project ({clickedProject}) {
    const {name, description, video, gitHub, image} = clickedProject

    return (
        <div className="project">
            <h3>{name}</h3>
            <YouTubeEmbed name={name} video={video}></YouTubeEmbed>
            <p>{description}</p>
        </div>
    )
}
export default Project