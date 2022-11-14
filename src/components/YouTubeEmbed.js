import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'

function YouTubeEmbed() {
    return (
        <div>
            <div className="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/0d6rHnPyPCo" title="Library of Toys Video" allowFullScreen></iframe>
            </div>
        </div>
    )
}
export default YouTubeEmbed

