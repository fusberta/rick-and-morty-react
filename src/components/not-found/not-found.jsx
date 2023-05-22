import React from "react"
import './not-found.css'

const NotFound = ({ bg, text }) => {
  return (
    <main className={ bg && 'not-found-bg' }>
      <div className="not-found-container">
        <img src="res/imgs/morty.png" />
        <h1>{text}</h1>
      </div>
    </main>
  )
};

export default NotFound;
