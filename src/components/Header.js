import React from "react"

function Header () {
    return (
        <div className="header">
            <h1 className="name">Zach Shaw</h1>
            <h4 className="title">Full Stack Engineer</h4>
            <a href="https://github.com/tempobeast/" className="social_links header-item">GitHub</a>
            <a href="https://www.linkedin.com/in/shaw-zach/" className="social_links header-item">LinkedIn</a>
        </div>
    )
}
export default Header