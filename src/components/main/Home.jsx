import React from 'react'
//import './main.css'
import userIcon from '../../assets/user_icon.png' // Adjust the path based on your folder structure
import compassIcon from '../../assets/compass_icon.png' // Adjust the path based on your folder structure 
import bulbIcone from '../../assets/bulb_icon.png' // Adjust the path based on your folder structure
import messageIcon from '../../assets/message_icon.png' // Adjust the path based on your folder structure
import codeIcon from '../../assets/code_icon.png' // Adjust the path based on your folder structure
export const Home = () => {
  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src={userIcon} alt="user" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Prakash.</span></p>
          <p>How can i help you</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>suggest beautiful place to see </p>
            <img src={compassIcon} alt="compass" />
          </div>
           <div className="card">
            <p>Briefly Explain this concept </p>
            <img src={bulbIcone} alt="compass" />
          </div>
           <div className="card">
            <p>Strong team bonding activities </p>
            <img src={messageIcon} alt="compass" />
          </div>
           <div className="card">
            <p>Improve the readability of the code</p>
            <img src={codeIcon} alt="compass" />
          </div>
        </div>
        
        <dib className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder='Enter a prompt here...'/>
            <div>
              <img src={assets.gallery_icon} alt=""/>
              <img src={assets.mic_icon} alt=""/>
              <img src={assets.send_icon} alt=""/>
            </div>
          </div>
            <p className="bottom-info">
              Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
            </p>
        </dib>
      </div>
    </div>
  )
}