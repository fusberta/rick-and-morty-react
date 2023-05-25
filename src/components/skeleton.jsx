import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={1}
    width={500}
    height={240}
    viewBox="0 0 525 270"
    backgroundColor="#b0b0b0"
    foregroundColor="#c7c7c7"
    {...props}
  >
    <rect x="10" y="0" rx="15" ry="15" width="500" height="240" />
  </ContentLoader>
)

export default Skeleton