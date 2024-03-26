import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './billing.scss'
import Navbar from '../../components/navbar/Navbar'

const Billing = () => {
  return (
    <div className='billing-container'>
        
        <Sidebar />
        <Navbar section={'Billing'} />

        {/* <div className="billing-wrapper">
          

        </div> */}
    </div>
  )
}

export default Billing