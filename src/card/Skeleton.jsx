import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (

  <ContentLoader 
  className="card"
    speed={2}
    width={320}
    height={485}
    viewBox="0 0 320 485"
    backgroundColor="#d2d0d0"
    foregroundColor="#f3f1f1"
    {...props}
  >
    <rect x="7" y="4" rx="0" ry="0" width="310" height="269" /> 
    <rect x="7" y="285" rx="0" ry="0" width="155" height="27" /> 
    <rect x="9" y="324" rx="0" ry="0" width="283" height="69" /> 
    <rect x="10" y="405" rx="0" ry="0" width="103" height="34" /> 
    <rect x="166" y="446" rx="0" ry="0" width="105" height="29" /> 
    <rect x="10" y="446" rx="0" ry="0" width="104" height="29" />
  </ContentLoader>
)

export default Skeleton

