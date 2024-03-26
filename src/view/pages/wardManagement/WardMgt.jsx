import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './wardmgt.scss'
import Navbar from '../../components/navbar/Navbar'

function WardMgt() {
  return (
    <div className='wardmgt-container'>
        
        <Sidebar />
        <Navbar section={'Wards'} />

        {/* <div className="wardmgt-wrapper">
          WardMgt

        </div> */}
    </div>
  )
}

export default WardMgt