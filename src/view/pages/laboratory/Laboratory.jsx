import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './laboratory.scss'
import Navbar from '../../components/navbar/Navbar'

function Laboratory() {
  return (
    <div className='laboratory-container'>
        
        <Sidebar />
        <Navbar section={'Laboratory'} />

        {/* <div className="laboratory-wrapper">
            

        </div> */}
    </div>
  )
}

export default Laboratory