import React, { useEffect, useRef } from "react"
import './modal-episode.css'

const ModalEpisode = ({ openModal, setOpenModal, episodeCount, episodes, setId }) => {

    const episodeNames = episodes.map((episode) => episode.name);

    return (
        <>
        <div className={openModal ? "episode-overlay active" : "episode-overlay"} onClick={() => setOpenModal(false)}>
            <div className={openModal ? "episode-modal active" : "episode-modal"} 
                 onClick={e => e.stopPropagation()}>
                <div className="modal-scroll-container">
                    <div className="modal-options">
                        {[...Array(episodeCount).keys()].map((key) => {
                            return (
                                <button key={key} onClick={() => {
                                    setId(key + 1)
                                    setOpenModal(false)
                                }}> 
                                    {(key + 1) + ' - ' + episodeNames[key]}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default ModalEpisode;
