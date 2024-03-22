import React, { useState } from 'react'
import './sidebar.scss';

function Sidebar() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

  return (
    <div className='sidebar-container'>
        
    </div>
  )
}

export default Sidebar