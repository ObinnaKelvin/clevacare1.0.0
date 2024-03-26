import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './radiology.scss'
import Navbar from '../../components/navbar/Navbar'


function Radiology() {
  return (
    <div className='radiology-container'>
        
        <Sidebar />
        <Navbar section={'Radiology'} />

        {/* <div className="radiology-wrapper">
          

        </div> */}
    </div>
  )
}

export default Radiology