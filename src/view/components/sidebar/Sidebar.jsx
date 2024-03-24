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

    const [sidebar, setSidebar] = useState(true)

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

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
                    <div className="left"><RiIcons.RiDashboardLine style={{width: '25px',height: '25px'}} /><div className="item-name">Dashboard</div></div>
                    <div className="right"></div>
                </div>
                <div className="sidebar-menu-item">
                    <div className="left"><TbIcons.TbCalendarPin style={{width: '25px',height: '25px'}} /><div className="item-name">Appointment</div></div>
                    <div className="right"></div>
                </div>
                <div className="sidebar-menu-item">
                    <div className="left"><AiIcons.AiOutlineUserAdd style={{width: '25px',height: '25px'}} /><div className="item-name">Registration</div></div>
                    <div className="right"></div>
                </div>
                <div className="sidebar-menu-item">
                    <div className="left"><GiIcons.GiMoneyStack style={{width: '25px',height: '25px'}} /><div className="item-name">Billing</div></div>
                    <div className="right"></div>
                </div>
                <div className="sidebar-menu-item">
                    <div className="left"><IoIcons5.IoLibraryOutline style={{width: '25px',height: '25px'}} /><div className="item-name">EMR</div></div>
                    <div className="right"></div>
                </div>
                <div className="sidebar-menu-item">
                    <div className="left"><GiIcons.GiMedicines style={{width: '25px',height: '25px'}} /><div className="item-name">Pharmacy</div></div>
                    <div className="right"></div>
                </div>
                <div className="sidebar-menu-item">
                    <div className="left"><ImIcons.ImLab style={{width: '25px',height: '25px'}} /><div className="item-name">Laboratory</div></div>
                    <div className="right"></div>
                </div>
                <div className="sidebar-menu-item">
                    <div className="left"><BsIcons.BsRadioactive style={{width: '25px',height: '25px'}} /><div className="item-name">Radiology</div></div>
                    <div className="right"></div>
                </div>
                <div className="sidebar-menu-item">
                    <div className="left"><GiIcons.GiBed style={{width: '25px',height: '25px'}} /><div className="item-name">Wards</div></div>
                    <div className="right"></div>
                </div>
                <div className="sidebar-menu-item">
                    <div className="left"><FaIcons6.FaWarehouse style={{width: '25px',height: '25px'}} /><div className="item-name">Inventory</div></div>
                    <div className="right"></div>
                </div>
                <div className="sidebar-menu-item">
                    <div className="left"><RiIcons.RiAdminLine style={{width: '25px',height: '25px'}} /><div className="item-name">Administrator</div></div>
                    <div className="right"></div>
                </div>
        </div>
        
    </div>
  )
}

export default Sidebar