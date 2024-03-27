import React from 'react'
import './navbar.scss';
import panda from '../../../assets/img/panda.png'
import * as RiIcons from 'react-icons/ri';

function Navbar({section}) {
  return (

    <div className="navbar-container">
      <div className="left">
        <div className="section-name">
          {section}
        </div>
      </div>
      <div className="right">
        <div className="notification">
            <RiIcons.RiNotification2Line style={{width: '21px',height: '25px'}} />
            <div className="count"></div>
        </div>
        <div className="user-info">
          <div className="avatar-pic">
            <img src={panda}/>
          </div>
          <div className="details">
            <div className="fullname">Obinna Okere</div>
            <div className="role">Doctor</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar