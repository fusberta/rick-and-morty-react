import React from "react"
import './video.css'

const Video = () => {
    return (
        <section className="video">
            <h1 className="video-label">Еще не знакомы с сериалом?</h1>
            <div className="video-container">
                <iframe src="https://www.youtube.com/embed/m4P1MuSNFqU" title="YouTube video player" frameBorder="5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            
        </section>
    )
};

export default Video;
