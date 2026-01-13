import React from 'react'
import './sidebar.css'
import {assets} from '../../assets/assets'

const sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <img className="manu" src={assets.menu_icon} alt="Menu Icon" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="Plus Icon" />
                <p>New Chat</p>
            </div>
            <div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    
                </div>
            </div>

        </div>
      <div className="bottom">

      </div>
    </div>
  )
}

export default sidebar