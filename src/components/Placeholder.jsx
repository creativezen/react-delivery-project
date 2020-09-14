import React from 'react'
import ContentLoader from 'react-content-loader'

const Placeholder = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="130" cy="140" r="120" />
      <rect x="0" y="295" rx="3" ry="3" width="280" height="30" />
      <rect x="-1" y="339" rx="6" ry="6" width="280" height="65" />
      <rect x="0" y="421" rx="3" ry="3" width="80" height="30" />
      <rect x="149" y="417" rx="24" ry="24" width="127" height="41" />
    </ContentLoader>
  )
}

export default Placeholder
