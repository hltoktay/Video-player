import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Banana from './overlay';
import classnames from 'classnames';

import './css/style.css';
 
class VideoPlayer extends Component {

  state = {
    url : null,
    playing: true,
    controls: false,
    volume: 0.8,
    played: 0,
    loaded: 0,
    duration: 0,
  }


  load = url => {
    this.setState({
      url,
      played: 1,
      loaded: 0,
    })
  }

  playPause = () => {
    this.setState({ playing: !this.state.playing })
  }
  stop = () => {
    this.setState({ url: null, playing: false })
  }

  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }

  onPlay = () => {
  
    this.setState({ playing: true })
  }

  onPause = () => {
  
    this.setState({ playing: false })
  }

  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  onProgress = state => {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state) 
    }
  }

  ref = player => {
    this.player = player
  }

  

  render () {
  
    const { playing, controls, light, volume, played } = this.state

        return ( 
            <div className="main">
                <div className="content">
                <ReactPlayer
                ref={this.ref}
                 url='https://www.youtube.com/embed/pWbMrx5rVBE'
                 playing={playing}
                 controls={controls}
                 light={light}
                 volume={volume}
                 onProgress={this.onProgress}
                 onPlay={this.onPlay}
                 onPause={this.onPause}
                 onSeek={e => console.log('onSeek', e)}
                 
                 />
                </div>
                
                <div className="control">
                <tr>
              <th>Controls</th>
              <td>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.playPause}>{playing ? 'Pause' : 'Play'}</button>
              </td>
            </tr>
                </div>
            

          <div className="seek">
          <tr>
              <th>Seek</th>
              
              <td>
   
                <input class="slider"
                  type='range' min={0} max={1} step='any'
                  value={played}
                  onMouseDown={this.onSeekMouseDown}
                  onChange={this.onSeekChange}
                  onMouseUp={this.onSeekMouseUp}
                    /> 
                   <Banana className="note">
                  
                  </Banana> 
              </td>   
            </tr>
          </div>

            {/* <tr>
              <th>Volume</th>
              <td>
                <input type='range' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
              </td>
            </tr>

        
              <tr>
                <th>Played</th>
                <td><progress max={1} value={played} /></td>
              </tr>

              <tr>
                <th>Loaded</th>
                <td><progress max={1} value={loaded} /></td>
              </tr> */}
          
              <div className="add" >
                <button  className="btn btn-sm btn-light">Add Bookmark</button>
                </div>
            </div>
        )
  }
}

export default VideoPlayer;