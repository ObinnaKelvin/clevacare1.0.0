import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './inventory.scss'
import Navbar from '../../components/navbar/Navbar'

function Inventory() {
  return (
    <div className='inventory-container'>
        
        <Sidebar />
        <Navbar section={'Inventory'} />

        {/* <div className="inventory-wrapper">
            Inventory

        </div> */}
    </div>
  )
}

export default Inventory