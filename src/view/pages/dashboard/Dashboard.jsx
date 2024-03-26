import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './dashboard.scss'
import Navbar from '../../components/navbar/Navbar'

function Dashboard() {

    //const sidebarStatus = localStorage.getItem('sidebarStatus')
  return (
    <div className='dashboard-container'>
        
        {/* <Sidebar sidebarStatus={sidebarStatus} /> */}
        <Sidebar />
        <Navbar section={'Dashboard'} />

        {/* <div className="dashboard-wrapper">
        
         

        </div> */}
    </div>
  )
}

export default Dashboard