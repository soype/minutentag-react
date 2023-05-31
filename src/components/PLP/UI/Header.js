import React from 'react'
import profilePic from '../../../icons/Sin-titulo-1.jpg'

export default function Header() {
  return (
    <div className="header">
        <div className="menu-toggle">
          <div className="span-container">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="profile-pic">
          <img src={profilePic} alt="" />
        </div>
      </div>
  )
}
