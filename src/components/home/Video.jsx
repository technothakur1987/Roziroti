import React from 'react'
import './Video.css'

const Video = () => {
  return (
    <div className="video-container">
      <video autoPlay muted loop className="video-background" poster="https://24carrots.com/wp-content/uploads/2023/08/chef.png">
        <source src="https://24carrots.com/wp-content/video/24carrtos-home-banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-content">
        <h2>Simply The Finest</h2>
        <div className="arrow-down"></div>
      </div>
    </div>
  )
}

export default Video
