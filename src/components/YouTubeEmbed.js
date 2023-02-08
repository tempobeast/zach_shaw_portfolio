import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function YouTubeEmbed({video}) {
    return (
        <div>
            <div className="ratio ratio-16x9">
                <iframe src={video} title="Library of Toys Video" allowFullScreen></iframe>
            </div>
        </div>
    )
}
export default YouTubeEmbed

