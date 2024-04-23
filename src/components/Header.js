import React from "react"

function Header () {
    return (
        <div className="header">
            <div className="header-descriptors">
                <h1 className="name header-item">Zach Shaw</h1>
                <h2 className="header-item">|</h2>
                <h4 className="title header-item">Full Stack Software Engineer</h4>
            </div>
            <div className="social-links">
                <a href="https://github.com/tempobeast/" className="social_link">GitHub</a>
                <a href="https://www.linkedin.com/in/shaw-zach/" className="social_link">LinkedIn</a>
            </div>
        </div>
    )
}
export default Header