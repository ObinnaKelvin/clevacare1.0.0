import React from 'react'
import './navbar.scss';
import panda from '../../../assets/img/panda.png'
import * as FaIcons6 from 'react-icons/fa6';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons5 from 'react-icons/io5';
import * as RiIcons from 'react-icons/ri';
import * as TbIcons from 'react-icons/tb';
import * as GiIcons from 'react-icons/gi';
import * as ImIcons from 'react-icons/im';
import * as BsIcons from 'react-icons/bs';

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