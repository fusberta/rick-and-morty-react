import React from "react"
import './home-page.css'
import Intro from "./intro";
import Preview from "../../components/preview/preview";
import Video from "../../components/video/video";

const HomePage = () => {
  return (
    <>
      <Intro />
      <Preview />
      <Video />
    </>
  )
};

export default HomePage;
