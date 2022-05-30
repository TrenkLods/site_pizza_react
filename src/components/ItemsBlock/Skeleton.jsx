import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={523}
    viewBox="0 0 280 523"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="6" y="473" rx="3" ry="3" width="75" height="34" /> 
    <rect x="0" y="318" rx="3" ry="3" width="280" height="34" /> 
    <rect x="0" y="375" rx="15" ry="15" width="280" height="75" /> 
    <circle cx="140" cy="140" r="140" /> 
    <rect x="136" y="473" rx="15" ry="15" width="142" height="45" />
  </ContentLoader>
)

export default Skeleton