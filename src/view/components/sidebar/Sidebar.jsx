import React, { useState } from 'react'
import './sidebar.scss';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';
import * as FaIcons6 from 'react-icons/fa6';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons5 from 'react-icons/io5';
import * as RiIcons from 'react-icons/ri';
import * as TbIcons from 'react-icons/tb';
import * as GiIcons from 'react-icons/gi';
import * as ImIcons from 'react-icons/im';
import * as BsIcons from 'react-icons/bs';

function Sidebar() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar);
        // localStorage.setItem('sidebarStatus', JSON.stringify(!sidebar))
    }
//    const sidebar_Status = localStorage.getItem('sidebarStatus')
    // console.log(sidebarStatus)
    // console.log(sidebar_Status)
  return (
    <div className={`sidebar-container ${sidebar ? 'active' : 'inactive'}`}>

        <div className="sidebar-toggle" onClick={showSidebar}>
            { sidebar ?  <ChevronLeft /> : <ChevronRight />}
        </div>

        <div className="sidebar-menu-wrapper">
            {/* {
                SidebarData.map((item, index) => {
                    return <Link to={item.path}><div className="sidebar-menu-item" key={index}>{item.icon} {item.title}</div></Link>
                })
            } */}

                <div className="sidebar-menu-item">
                    <Link to={'/'} className='link'>
                        {/* <div className="left"><RiIcons.RiDashboardLine style={{width: '21px',height: '25px'}} /><div className={`item-name ${sidebar ? 'active' : 'inactive'}`}>Dashboard</div></div> */}
                        <div className="left"><RiIcons.RiBarChartGroupedLine style={{width: '21px',height: '25px'}} /><div className={`item-name ${sidebar ? 'active' : 'inactive'}`}>Dashboard</div></div>
                    </Link>
                    <div className="right"></div>
                </div>
                <div className="sidebar-menu-item">
                    <Link to={'/patientcare'} className='link'>
                        <div className="left"><AiIcons.AiOutlineUserAdd style={{width: '21px',height: '25px'}} /><div className={`item-name ${sidebar ? 'active' : 'inactive'}`}>Patient Care</div></div>
                    </Link>
                    <div className="right"></div>
                </div>
                <div className="sidebar-menu-item">
                    <Link to={'/appointment'} className='link'>
                        <div className="left"><TbIcons.TbCalendarPin style={{width: '21px',height: '25px'}} /><div className={`item-name ${sidebar ? 'active' : 'inactive'}`}>Appointment</div></div>
                    </Link>
                    <div className="right"></div>
                </div>
                <div className="sidebar-menu-item">
                    <Link to={'/billing'} className='link'>
                        <div className="left"><GiIcons.GiMoneyStack style={{width: '21px',height: '25px'}} /><div className={`item-name ${sidebar ? 'active' : 'inactive'}`}>Billing</div></div>
                    </Link>
                    <div className="right"></div>
                </div>
                <div className="sidebar-menu-item">
                    <Link to={'/emr'} className='link'>
                        <div className="left"><IoIcons5.IoLibraryOutline style={{width: '22px',height: '25px'}} /><div className={`item-name ${sidebar ? 'active' : 'inactive'}`}>EMR</div></div>
                    </Link>
                    <div className="right"></div>
                </div>
                <div className="sidebar-menu-item">
                    <Link to={'/pharmacy'} className='link'>
                        <div className="left"><GiIcons.GiMedicines style={{width: '21px',height: '25px'}} /><div className={`item-name ${sidebar ? 'active' : 'inactive'}`}>Pharmacy</div></div>
                    </Link>
                    <div className="right"></div>
                </div>
                <div className="sidebar-menu-item">
                    <Link to={'/laboratory'} className='link'>
                        <div className="left"><ImIcons.ImLab style={{width: '21px',height: '25px'}} /><div className={`item-name ${sidebar ? 'active' : 'inactive'}`}>Laboratory</div></div>
                    </Link>
                    <div className="right"></div>
                </div>
                <div className="sidebar-menu-item">
                    <Link to={'/radiology'} className='link'>
                        <div className="left"><BsIcons.BsRadioactive style={{width: '21px',height: '25px'}} /><div className={`item-name ${sidebar ? 'active' : 'inactive'}`}>Radiology</div></div>
                    </Link>
                    <div className="right"></div>
                </div>
                <div className="sidebar-menu-item">
                    <Link to={'/ward-management'} className='link'>
                        <div className="left"><GiIcons.GiBed style={{width: '21px',height: '25px'}} /><div className={`item-name ${sidebar ? 'active' : 'inactive'}`}>Wards</div></div>
                    </Link>
                    <div className="right"></div>
                </div>
                <div className="sidebar-menu-item">
                    <Link to={'/inventory'} className='link'>
                        <div className="left"><FaIcons6.FaWarehouse style={{width: '21px',height: '25px'}} /><div className={`item-name ${sidebar ? 'active' : 'inactive'}`}>Inventory</div></div>
                    </Link>
                    <div className="right"></div>
                </div>
                <div className="sidebar-menu-item">
                    <Link to={'/administration'} className='link'>
                        <div className="left"><RiIcons.RiAdminLine style={{width: '21px',height: '25px'}} /><div className={`item-name ${sidebar ? 'active' : 'inactive'}`}>Administration</div></div>
                    </Link>
                    <div className="right"></div>
                </div>
        </div>
        
    </div>
  )
}

export default Sidebar