import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './pharmacy.scss'
import Navbar from '../../components/navbar/Navbar'

function Pharmacy() {
  return (
    <div className='pharmacy-container'>
        
        <Sidebar />
        <Navbar section={'Pharmacy'} />

        {/* <div className="pharmacy-wrapper">
          

        </div> */}
    </div>
  )
}

export default Pharmacy