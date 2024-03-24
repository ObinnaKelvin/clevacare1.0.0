import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './dashboard.scss'

function Dashboard() {
  return (
    <div className='dashboard-container'>
        
        <Sidebar />

        <div className="dashboard-wrapper">
         Dashboard

        </div>
    </div>
  )
}

export default Dashboard