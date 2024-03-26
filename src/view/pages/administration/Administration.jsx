import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './administration.scss'
import Navbar from '../../components/navbar/Navbar'

function Administration() {
  return (
    <div className='administration-container'>
        
        <Sidebar />
        <Navbar section={'Administration'} />

        {/* <div className="administration-wrapper">
            Administration

        </div> */}
    </div>
  )
}

export default Administration