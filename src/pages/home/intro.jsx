import React from "react"
import './intro.css'

const Intro = () => {
  return (
    <section className="intro">
      <div className="overlay" />
      <div className="container">
        <h2 className="label">
            Добро пожаловать на <span className="highlight">Rick & Morty WiKi</span>
        </h2>
        <p className="text">
            Здесь вы cможете познакомититься со вселенной мультсериала созданного Дэном Хармоном и Джастином Ройландом Рик и Морти (англ. Rick and Morty).
        </p>
      </div>
    </section>
  )
};

export default Intro;
