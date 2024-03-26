import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './appointment.scss'
import Navbar from '../../components/navbar/Navbar'
import * as TbIcons from 'react-icons/tb';
import * as RxIcons from 'react-icons/rx';
import * as BsIcons from 'react-icons/bs';
import * as GiIcons from 'react-icons/gi';
import * as SlIcons from 'react-icons/sl';
import * as IoIcons from 'react-icons/io5';
import * as LuIcons from 'react-icons/lu';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi2';
import * as FiIcons from 'react-icons/fi';

const Appointment = () => {
  return (
    <div className='appointment-container'>
        
        <Sidebar />
        <Navbar section={'Appointment'} />

        <div className="appointment-wrapper">
          {/* HIIII */}

          <div className="filter-group">
            <div className="left">
                <div className="item">
                  <BsIcons.BsGrid style={{width: '18px',height: '25px'}} />
                  <span>All</span>
                </div>
                <div className="item">
                  <IoIcons.IoTodayOutline style={{width: '18px',height: '25px'}} />
                  <span>Today</span>
                </div>
                <div className="item">
                  <TbIcons.TbCalendarTime style={{width: '18px',height: '25px'}} />
                  <span>Tomorrow</span>
                </div>
                <div className="item">
                  <GiIcons.GiSandsOfTime style={{width: '18px',height: '25px'}} />
                  <span>Pending</span>
                </div>
                <div className="item">
                  <LuIcons.LuCalendarX2 style={{width: '18px',height: '25px'}} />
                  <span>Cancelled</span>
                </div>
            </div>
            <div className="right">
                <div className="item">
                  <LuIcons.LuSearch style={{width: '21px',height: '25px'}} />
                  <span>Search Patient...</span>
                  {/* <RxIcons.RxCaretDown style={{width: '21px',height: '25px'}} /> */}
                </div>
                <div className="item">
                  <SlIcons.SlLocationPin style={{width: '21px',height: '25px'}} />
                  <span>Lagos</span>
                  <RxIcons.RxCaretDown style={{width: '21px',height: '25px'}} />
                </div>
                <div className="item">
                  <TbIcons.TbUsersGroup style={{width: '21px',height: '25px'}} />
                  <span>All Specializations</span>
                  <RxIcons.RxCaretDown style={{width: '21px',height: '25px'}} />
                </div>
            </div>
          </div>

          <div className="appointment-group">

            <div className="booking-item">
                <div className="booking-service">Consultation</div>
                <div className="booking-user"><span><AiIcons.AiOutlineUser style={{width: '18px',height: '18px'}} /></span>Nina Austin</div>
                <div className="booking-phone"><span><HiIcons.HiOutlineDevicePhoneMobile style={{width: '18px',height: '18px'}} /></span>07023113345</div>
                <div className="booking-date"><span><FiIcons.FiCalendar style={{width: '18px',height: '18px'}} /></span> Oct 31st 2023</div>
                <div className="booking-amount">₦30,000</div>
                <div className="booking-status success">Success</div>
            </div>
            <div className="booking-item">
                <div className="booking-service">Gastrointestinal Surgery</div>
                <div className="booking-user"><span><AiIcons.AiOutlineUser style={{width: '18px',height: '18px'}} /></span>Kabaye Perry</div>
                <div className="booking-phone"><span><HiIcons.HiOutlineDevicePhoneMobile style={{width: '18px',height: '18px'}} /></span>07023113345</div>
                <div className="booking-date"><span><FiIcons.FiCalendar style={{width: '18px',height: '18px'}} /></span> Oct 31st 2023</div>
                <div className="booking-amount">₦800,000</div>
                <div className="booking-status pending">Pending</div>
            </div>
            <div className="booking-item">
                <div className="booking-service">Surgical Oncology</div>
                <div className="booking-user"><span><AiIcons.AiOutlineUser style={{width: '18px',height: '18px'}} /></span>John Norton</div>
                <div className="booking-phone"><span><HiIcons.HiOutlineDevicePhoneMobile style={{width: '18px',height: '18px'}} /></span>07023113345</div>
                <div className="booking-date"><span><FiIcons.FiCalendar style={{width: '18px',height: '18px'}} /></span> Oct 31st 2023</div>
                <div className="booking-amount">₦1,000,000</div>
                <div className="booking-status success">Success</div>
            </div>
            <div className="booking-item">
                <div className="booking-service">Consultation</div>
                <div className="booking-user"><span><AiIcons.AiOutlineUser style={{width: '18px',height: '18px'}} /></span>Christopher Tyler</div>
                <div className="booking-phone"><span><HiIcons.HiOutlineDevicePhoneMobile style={{width: '18px',height: '18px'}} /></span>07023113345</div>
                <div className="booking-date"><span><FiIcons.FiCalendar style={{width: '18px',height: '18px'}} /></span> Oct 31st 2023</div>
                <div className="booking-amount">₦250,000</div>
                <div className="booking-status refund">Refund</div>
            </div>
            <div className="booking-item">
                <div className="booking-service">Thyroid Surgery</div>
                <div className="booking-user"><span><AiIcons.AiOutlineUser style={{width: '18px',height: '18px'}} /></span>Damian Ngure</div>
                <div className="booking-phone"><span><HiIcons.HiOutlineDevicePhoneMobile style={{width: '18px',height: '18px'}} /></span>07023113345</div>
                <div className="booking-date"><span><FiIcons.FiCalendar style={{width: '18px',height: '18px'}} /></span> Oct 31st 2023</div>
                <div className="booking-amount">₦500,000</div>
                <div className="booking-status cancel">Cancelled</div>
            </div>
            <div className="booking-item">
                <div className="booking-service">Breast Surgery</div>
                <div className="booking-user"><span><AiIcons.AiOutlineUser style={{width: '18px',height: '18px'}} /></span>Felicia Chuka</div>
                <div className="booking-phone"><span><HiIcons.HiOutlineDevicePhoneMobile style={{width: '18px',height: '18px'}} /></span>07023113345</div>
                <div className="booking-date"><span><FiIcons.FiCalendar style={{width: '18px',height: '18px'}} /></span> Oct 31st 2023</div>
                <div className="booking-amount">₦130,000</div>
                <div className="booking-status refund">Refund</div>
            </div>
            <div className="booking-item">
                <div className="booking-service">Minimal Access Surgery</div>
                <div className="booking-user"><span><AiIcons.AiOutlineUser style={{width: '18px',height: '18px'}} /></span>Angela George</div>
                <div className="booking-phone"><span><HiIcons.HiOutlineDevicePhoneMobile style={{width: '18px',height: '18px'}} /></span>07023113345</div>
                <div className="booking-date"><span><FiIcons.FiCalendar style={{width: '18px',height: '18px'}} /></span> Oct 31st 2023</div>
                <div className="booking-amount">₦30,000</div>
                <div className="booking-status pending">Pending</div>
            </div>
            <div className="booking-item">
                <div className="booking-service">Consultation</div>
                <div className="booking-user"><span><AiIcons.AiOutlineUser style={{width: '18px',height: '18px'}} /></span>Esther Zhen</div>
                <div className="booking-phone"><span><HiIcons.HiOutlineDevicePhoneMobile style={{width: '18px',height: '18px'}} /></span>07023113345</div>
                <div className="booking-date"><span><FiIcons.FiCalendar style={{width: '18px',height: '18px'}} /></span> Oct 31st 2023</div>
                <div className="booking-amount">₦30,000</div>
                <div className="booking-status pending">Pending</div>
            </div>
            <div className="booking-item">
                <div className="booking-service">Urological Surgery</div>
                <div className="booking-user"><span><AiIcons.AiOutlineUser style={{width: '18px',height: '18px'}} /></span>Tyler Perry</div>
                <div className="booking-phone"><span><HiIcons.HiOutlineDevicePhoneMobile style={{width: '18px',height: '18px'}} /></span>07023113345</div>
                <div className="booking-date"><span><FiIcons.FiCalendar style={{width: '18px',height: '18px'}} /></span> Oct 31st 2023</div>
                <div className="booking-amount">₦30,000</div>
                <div className="booking-status cancel">Cancelled</div>
            </div>
            <div className="booking-item">
                <div className="booking-service">Consultation</div>
                <div className="booking-user"><span><AiIcons.AiOutlineUser style={{width: '18px',height: '18px'}} /></span>Shullamite Jadon</div>
                <div className="booking-phone"><span><HiIcons.HiOutlineDevicePhoneMobile style={{width: '18px',height: '18px'}} /></span>07023113345</div>
                <div className="booking-date"><span><FiIcons.FiCalendar style={{width: '18px',height: '18px'}} /></span> Oct 31st 2023</div>
                <div className="booking-amount">₦30,000</div>
                <div className="booking-status cancel">Cancelled</div>
            </div>
            <div className="booking-item">
                <div className="booking-service">Diagnostic and Therapeutic Endoscopy</div>
                <div className="booking-user"><span><AiIcons.AiOutlineUser style={{width: '18px',height: '18px'}} /></span>Glen Johnson</div>
                <div className="booking-phone"><span><HiIcons.HiOutlineDevicePhoneMobile style={{width: '18px',height: '18px'}} /></span>07023113345</div>
                <div className="booking-date"><span><FiIcons.FiCalendar style={{width: '18px',height: '18px'}} /></span> Oct 31st 2023</div>
                <div className="booking-amount">₦30,000</div>
                <div className="booking-status refund">Refund</div>
            </div>
            <div className="booking-item">
                <div className="booking-service">Consultation</div>
                <div className="booking-user"><span><AiIcons.AiOutlineUser style={{width: '18px',height: '18px'}} /></span>Sean Kingston</div>
                <div className="booking-phone"><span><HiIcons.HiOutlineDevicePhoneMobile style={{width: '18px',height: '18px'}} /></span>07023113345</div>
                <div className="booking-date"><span><FiIcons.FiCalendar style={{width: '18px',height: '18px'}} /></span> Oct 31st 2023</div>
                <div className="booking-amount">₦650,000</div>
                <div className="booking-status success">Success</div>
            </div>

          </div>

        </div>


    </div>
  )
}

export default Appointment