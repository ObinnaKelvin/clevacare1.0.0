import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './registration.scss'
import Navbar from '../../components/navbar/Navbar'

const Registration = () => {
  return (
    <div className='registration-container'>
        
        <Sidebar />
        <Navbar section={'Registration'} />

        {/* <div className="registration-wrapper">
        

        </div> */}
    </div>
  )
}

export default Registration