import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './emr.scss'
import Navbar from '../../components/navbar/Navbar'

const Emr = () => {
  return (
    <div className='emr-container'>
        
        <Sidebar />
        <Navbar section={'EMR'} />

        {/* <div className="emr-wrapper">
         

        </div> */}
    </div>
  )
}

export default Emr