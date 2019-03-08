import React from 'react';
import { Navbar } from 'react-bootstrap';
import VideoPlayer from './video';

import './css/style.css';

const Home = () => {

    return (
        <div>
        
            <Navbar bg="info" variant="dark" className="justify-content-center">
                    <Navbar.Brand href="#home" >
                         {'Video Player Tool'}
                    </Navbar.Brand>
                </Navbar>
      
               <VideoPlayer />
       
      
         
                   
        </div>
    )
}

export default Home;