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
                    <img src ={assets.message_icon} alt=" "/>
                    <p>what is react...</p>
                </div>
            </div>

        </div>
      <div className="bottom">
        <div className="bottom-ite recent-entry">
            <img src={assets.question_icon} alt="" />
            <p>Help</p>
        </div>
        <div className="bottom-ite recent-entry">
            <img src={assets.history_icon} alt="" />
            <p>Activity</p>
        </div>
        <div className="bottom-ite recent-entry">
            <img src={assets.setting_icon} alt="" />
            <p>Settings</p>
        </div>

      </div>
    </div>
  )
}

export default sidebar