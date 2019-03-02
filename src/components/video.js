import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './css/style.css';
 
class VideoPlayer extends Component {

  render () {

        return ( 
            <div className="main">
                <div className="content">
                <ReactPlayer
                url="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
                
                 />
          
                </div>

            </div>
        )
  }
}

export default VideoPlayer;