import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={1}
    width={500}
    height={270}
    viewBox="0 0 575 310"
    backgroundColor="#b0b0b0"
    foregroundColor="#c7c7c7"
    {...props}
  >
    <rect x="25" y="0" rx="15" ry="15" width="550" height="270" />
  </ContentLoader>
)

export default Skeleton