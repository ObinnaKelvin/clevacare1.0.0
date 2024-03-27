import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './view/pages/dashboard/Dashboard.jsx';
import Appointment from "./view/pages/appointment/Appointment.jsx";
import Billing from "./view/pages/billing/Billing.jsx";
import Emr from "./view/pages/emr/Emr.jsx";
import Pharmacy from "./view/pages/pharmacy/Pharmacy.jsx";
import Radiology from "./view/pages/radiology/Radiology.jsx";
import Laboratory from "./view/pages/laboratory/Laboratory.jsx";
import PatientCare from "./view/pages/patientcare/PatientCare.jsx";
import WardMgt from "./view/pages/wardManagement/WardMgt.jsx";
import Inventory from "./view/pages/inventory/Inventory.jsx";
import Administration from "./view/pages/administration/Administration.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/appointment' element={<Appointment />}/>
          <Route path='/billing' element={<Billing />}/>
          <Route path='/emr' element={<Emr />}/>
          <Route path='/pharmacy' element={<Pharmacy />}/>
          <Route path='/radiology' element={<Radiology />}/>
          <Route path='/laboratory' element={<Laboratory />}/>
          <Route path='/patientcare' element={<PatientCare />}/>
          <Route path='/ward-management' element={<WardMgt />}/>
          <Route path='/inventory' element={<Inventory />}/>
          <Route path='/administration' element={<Administration />}/>
      </Routes>
    </Router>
  )
}

export default App
