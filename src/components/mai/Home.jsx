import React from 'react'
//import './main.css'
import userIcon from '../../assets/user_icon.png' // Adjust the path based on your folder structure

export const Home = () => {
  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src={userIcon} alt="user" />
      </div>
    </div>
  )
}