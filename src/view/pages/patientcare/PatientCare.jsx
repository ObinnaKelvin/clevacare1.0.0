import React, { useState, useEffect, useRef} from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './patientcare.scss'
import Navbar from '../../components/navbar/Navbar'
import * as TbIcons from 'react-icons/tb';
import * as RxIcons from 'react-icons/rx';
import * as PiIcons from 'react-icons/pi';
import * as SlIcons from 'react-icons/sl';
import * as LuIcons from 'react-icons/lu';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa6';
import CountUp from 'react-countup'
import { useNavigate } from "react-router-dom";

const PatientCare = () => {
  const [title, setTitle] = useState('');
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  // const[date, setDate] = useState()
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('')
  const [religion, setReligion] = useState('')
  const [openDate, setOpenDate] = useState(false)
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('');
  const [cityDataList, setCityDataList] = useState([]);
  const [maritalStatus, setMaritalStatus] = useState('');
  const [state, setState] = useState('');
  const [stateData, setStateData] = useState([]);
  const [country, setCountry] = useState('');
  const [countryData, setCountryData] = useState([]);
  const [countryDataAbbrv, setCountryDataAbbrv] = useState('');
  const [encodedBy, setEncodedBy] = useState('');
  const [encodedDate, setEncodedDate] = useState(new Date());
  const [activeStep, setActiveStep] = useState(1);
  const [kinName, setKinName] = useState('');
  const [kinPhone, setKinPhone] = useState('');
  const [kinAddress, setKinAddress] = useState('');
  const [kinRelationship, setKinRelationship] = useState('');
  const [emName, setEmName] = useState('');
  const [emPhone, setEmPhone] = useState('');
  const [emAddress, setEmAddress] = useState('');
  const [emRelationship, setEmRelationship] = useState('');
  const [isRequired, setIsRequired] = useState(false);
  const currentCountry = JSON.parse(localStorage.getItem('currentCountry'));
  const currentState = JSON.parse(localStorage.getItem('currentState'));
  const [loading, setLoading] = useState(null);
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const currentStaff = JSON.parse(localStorage.getItem('staff'));
  const [patientList, setPatientList] = useState([]);
  const [filterToggle, setFilterToggle] = useState(1);
  
  const navigate = useNavigate();

  const loadCountryData = async () => {
    try {
        const ctry = Country.getAllCountries()
        setCountryData(ctry)
        //console.log("countryData", countryData)
    } catch (error) {
        console.log(error)
    }
}

const getCountryValue = (e) => {
    const countryChosen = e.target.children[e.target.selectedIndex].getAttribute('item-abbrv')
    setCountryDataAbbrv(countryChosen)
    setCountry(e.target.value);
    //console.log("countryChosen", countryChosen)
}

const loadStateData = async() => {
    if(countryDataAbbrv) {//This runs when country is selected. 
        try {
            const stateRec = await State.getStatesOfCountry(`${countryDataAbbrv}`)
            setStateData(stateRec)
            console.log(stateRec)
        } catch (error) {
            console.log(error)
        }
    } 
    else { //This runs when country is not selected. Loads up from saved country
        try {
            const currentCountry = JSON.parse(localStorage.getItem('currentCountry'));
            const countryCode = await currentCountry.isoCode //currentCountry is from local storage
            const stateRec = await State.getStatesOfCountry(`${countryCode}`)
            setStateData(stateRec)
            console.log("stateRec", stateRec)
        } catch (error) {
            console.log(error)
        }
    }
}


const handleSubmit = async(e) => {
  e.preventDefault();
  if (title && firstname && middlename && lastname && phone && email && gender && 
      dob && maritalStatus && religion && country && state && address && kinName &&
      kinPhone && kinRelationship && kinAddress && emName && emPhone && emRelationship &&
      emAddress) {
          //await axios.post('http://localhost:9000/api/patients/', { //LOCAL
          await axios.post('https://sapphire-api.onrender.com/api/patients/', {  //PRODUCTION
          title:title,
          firstName: firstname,
          middleName: middlename,
          lastName: lastname,
          mobile: phone,
          email: email,
          gender:gender,
          dateOfBirth: dob,
          maritalStatus: maritalStatus,
          religion:religion,
          address: address,
          city:city,
          state: state,
          country: country,
          kinName: kinName,
          kinPhone: kinPhone,
          kinRelationship: kinRelationship,
          kinAddress: kinAddress,
          emergencyName:emName,
          emergencyPhone:emPhone,
          emergencyRelationship:emRelationship,
          emergencyAddress:emAddress,
          encodedBy: currentStaff.id,
          encodedDate: encodedDate,
          lastUpdatedBy: currentStaff.user_id,
          lastUpdatedDate: encodedDate
      })
      .then(response => console.log(response))
      navigate("/staff-portal/patient")
      setIsRequired(false)
      setPatientToggle(2)

  }  else {
      setIsRequired(true)
  }
}

  return (
    <div className='patientcare-container'>
        
        <Sidebar />
        <Navbar section={'Patient Care'} />

        <div className="patientcare-wrapper">

          <div className="filter-group">
            <div className="left">
                <div className={`item ${filterToggle === 1 ? "active" : "inactive"}`} onClick={() => setFilterToggle(1)}>
                  <PiIcons.PiUserPlus style={{width: '18px',height: '25px'}} />
                  <span>New Patient</span>
                </div>
                <div className={`item ${filterToggle === 2 ? "active" : "inactive"}`} onClick={() => setFilterToggle(2)}>
                  <LuIcons.LuUsers2 style={{width: '18px',height: '25px'}} />
                  <span>Patient List (<CountUp end={100} />)</span>
                </div>
            </div>
            <div className="right">
              {
                filterToggle === 2 &&
                <div className="item">
                  <LuIcons.LuSearch style={{width: '21px',height: '25px'}} className='searchIcon'/>
                  <input 
                    type="text" 
                    placeholder='Name, Phone, Email...'
                    // name='email'
                    // value={email}
                    // onChange={handleInputChange}
                    onChange = {(e)=>setQuery(e.target.value)}
                    className="formInput"
                  />
                  {/* <RxIcons.RxCaretDown style={{width: '21px',height: '25px'}} /> */}
                </div>
              }
            </div>
          </div>

          <div className="patientcare-body-body">

              {
                filterToggle === 1 &&
                <div className="patient-create-wrapper">
                    <div className="left-items">
                        <div className="body-item">
                            { isRequired && <div className="error_msg">
                            <FiIcons.FiAlertCircle style={{width: '18px',height: '25px'}} /> Mandatory fields are required!
                            </div>}
                            <div className='header-section'>
                                <div className="icon-holder">
                                <BsIcons.BsClipboardPlus style={{width: '18px',height: '25px'}} />
                                </div>
                                <div className="section-title">
                                    Basic Information
                                </div>
                            </div>
                            <div className='body-body'>
                                <form action="">
                                    <section>
                                        <label>Title</label>
                                        <select className = {`formSelect sm ${isRequired && "required"}`} name="user_sex" onChange={(e)=>setTitle(e.target.value)} value={title}>
                                            <option>- Select Title -</option>
                                            <option value={'Master'}>Master</option>
                                            <option value={'Mr'}>Mr</option>
                                            <option value={'Miss'}>Miss</option>
                                            <option value={'Mrs'}>Mrs</option>
                                            <option value={'Ms'}>Ms</option>
                                            <option value={'Dr.'}>Dr.</option>
                                            <option value={'Prof.'}>Prof.</option>
                                            <option value={'Revd.'}>Revd.</option>
                                        </select>
                                    </section>
                                    
                                    <section>
                                        <label>First Name</label>
                                        <input 
                                            type="text" 
                                            placeholder='First name'
                                            name='firstname'
                                            value={firstname}
                                            onChange = {(e)=>setFirstname(e.target.value)}
                                            className={`formInput sm ${isRequired && "required"}`}
                                        />
                                    </section>

                                    <section>
                                        <label>Middle Name</label>
                                        <input 
                                            type="text" 
                                            placeholder='Middle name'
                                            name='middlename'
                                            value={middlename}
                                            onChange = {(e)=>setMiddlename(e.target.value)}
                                            className={`formInput sm ${isRequired && "required"}`}
                                        />
                                    </section>

                                    <section>
                                        <label>Last Name</label>
                                        <input 
                                            type="text" 
                                            placeholder='Last name'
                                            name='lastname'
                                            value={lastname}
                                            onChange = {(e)=>setLastname(e.target.value)}
                                            className={`formInput sm ${isRequired && "required"}`}
                                        />
                                    </section>

                                    <section>
                                        <label>Email</label>
                                        <input 
                                            type="text" 
                                            placeholder='Email'
                                            name='email'
                                            value={email}
                                            onChange = {(e)=>setEmail(e.target.value)}
                                            className={`formInput sm ${isRequired && "required"}`}
                                        />
                                    </section>

                                    <section>
                                        <label>Gender</label>
                                        <select className = {`formSelect sm ${isRequired && "required"}`} name="user_sex" onChange={(e)=>setGender(e.target.value)} value={gender}>
                                            <option>- Select Gender -</option>
                                            <option value={'Male'}>Male</option>
                                            <option value={'Female'}>Female</option>
                                        </select>
                                    </section>

                                    <section>
                                        <label>Phone</label>       
                                        <input 
                                            type="text" 
                                            placeholder='Phone'
                                            name='phone'
                                            value={phone}
                                            onChange = {(e)=>setPhone(e.target.value)}
                                            className={`formInput sm ${isRequired && "required"}`}
                                        />
                                    </section>

                                    <section>
                                        <label>Date Of Birth</label>
                                        <input 
                                        type="date" 
                                        placeholder='Date Of Birth'
                                        name='dob'
                                        value={dob}
                                        onChange = {(e)=>setDob(e.target.value)}
                                        className={`formInput sm ${isRequired && "required"}`}
                                        />
                                    </section>
                                    
                                    <section>
                                        <label>Marital Status</label>
                                        <select className = {`formSelect sm ${isRequired && "required"}`} name="user_sex" onChange={(e)=>setMaritalStatus(e.target.value)} value={maritalStatus}>
                                            <option>-  Select Marital Status  -</option>
                                            <option value={'Single'}>Single</option>
                                            <option value={'Married'}>Married</option>
                                            <option value={'Widowed'}>Widowed</option>
                                            <option value={'Divorced'}>Divorced</option>
                                            <option value={'Separated'}>Separated</option>
                                        </select>
                                    </section>
                                    
                                    <section>
                                        <label>Country</label>
                                        <select className = {`formSelect sm ${isRequired && "required"}`} name="user_sex" onChange={getCountryValue} value={country}>
                                            <option>- Select Country -</option>
                                            {
                                                countryData.map(item=>{
                                                    return (
                                                            <option value={item.name} item-abbrv={item.isoCode}>{item.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </section>
                                    
                                    <section>
                                        <label>State</label>
                                        <select className = {`formSelect sm ${isRequired && "required"}`} name="user_sex" onChange={(e)=>setState(e.target.value)} value={state}>
                                            <option>- Select State -</option>
                                            {/* <option value={'Lagos'}>Lagos</option> */}
                                            {
                                                stateData.map(item => {
                                                    return (
                                                        <option value={item.name}>{item.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </section>

                                    <section>
                                        <label>City</label>
                                        <select className = "formSelect sm" name="user_sex" onChange={(e)=>setCity(e.target.value)} value={city}>
                                            <option>- Select City -</option>
                                            <option value={'Ogba'}>Ogba</option>
                                            <option value={'Alimosho'}>Alimosho</option>
                                            <option value={'Alimosho'}>Ikeja</option>
                                            {/* {
                                                cityDataFull.map((item, index) => {
                                                    return (
                                                        <option value={item.name}>{item.name}</option>
                                                    )
                                                })
                                            } */}
                                        </select>
                                    </section>

                                    <section>
                                        <label>Religion</label>
                                        <select className = {`formSelect sm ${isRequired && "required"}`} name="user_religion" onChange={(e)=>setReligion(e.target.value)} value={religion}>
                                            <option>-  Select Religion  -</option>
                                            <option value={'Christianity'}>Christianity</option>
                                            <option value={'Islam'}>Islam</option>
                                            <option value={'Traditional'}>Traditional</option>
                                            <option value={'Unknown'}>Unknown</option>
                                        </select>
                                    </section>
                                    
                                    <section>
                                        <label>Address</label>
                                        <textarea className= {`formTextArea sm ${isRequired && "required"}`}  type="text"name="user_additional_info" placeholder="Address here..."
                                        value={address} onChange={(e)=> setAddress(e.target.value)}
                                        />
                                    </section>

                                </form>
                            </div>
                        </div>
                        
                        <div className="body-item">
                            <div className='header-section'>
                                <div className="icon-holder">
                                  <PiIcons.PiSiren style={{width: '18px',height: '25px'}} />
                                </div>
                                <div className="section-title">
                                    Emergency Contact
                                </div>
                            </div>
                            <div className='body-body'>
                                <form action="">
                                    
                                    <section>
                                        <label>Name</label>
                                        <input 
                                            type="text" 
                                            placeholder='Name'
                                            name='name'
                                            value={emName}
                                            onChange = {(e)=>setEmName(e.target.value)}
                                            className={`formInput sm ${isRequired && "required"}`}
                                        />
                                    </section>

                                    <section>
                                        <label>Phone</label>       
                                        <input 
                                            type="text" 
                                            placeholder='Phone'
                                            name='phone'
                                            value={emPhone}
                                            onChange = {(e)=>setEmPhone(e.target.value)}
                                            className={`formInput sm ${isRequired && "required"}`}
                                        />
                                    </section>

                                    <section>
                                        <label>Relationship</label>
                                            <select className = {`formSelect lg ${isRequired && "required"}`} name="user_sex" onChange={(e)=>setEmRelationship(e.target.value)} value={emRelationship}>
                                                <option>- Select Relationship -</option>
                                                <option value={'Father'}>Father</option>
                                                <option value={'Mother'}>Mother</option>
                                                <option value={'Husband'}>Husband</option>
                                                <option value={'Wife'}>Wife</option>
                                                <option value={'Uncle'}>Uncle</option>
                                                <option value={'Aunt'}>Aunt</option>
                                                <option value={'Brother'}>Brother</option>
                                                <option value={'Sister'}>Sister</option>
                                                <option value={'Friend'}>Friend</option>
                                                <option value={'Unknown'}>Unknown</option>
                                            </select>
                                    </section>
                                    
                                    <section>
                                        <label>Address</label>
                                        <textarea className= {`formTextArea sm ${isRequired && "required"}`} type="text"name="user_additional_info" placeholder="Address here..."
                                        value={emAddress} onChange={(e)=> setEmAddress(e.target.value)}
                                        />
                                    </section>

                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="right-items">
                        <div className="body-item">
                            <div className='header-section'>
                                <div className="icon-holder">
                                  <FaIcons.FaPersonWalkingArrowLoopLeft style={{width: '18px',height: '25px'}} />
                                </div>
                                <div className="section-title">
                                    Kin Details
                                </div>
                            </div>
                            <div className='body-body'>
                                <form action="">
                                    <section>
                                        <label>Kin Name</label>
                                            <input 
                                                type="text" 
                                                placeholder='Kin Name'
                                                name='kinName'
                                                value={kinName}
                                                onChange = {(e)=>setKinName(e.target.value)}
                                                className= {`formInput sm ${isRequired && "required"}`}
                                            />
                                    </section>
                                    <section>
                                        <label>Kin Phone</label>
                                            <input 
                                            type="text" 
                                            placeholder='Phone'
                                            name='phone'
                                            value={kinPhone}
                                            onChange = {(e)=>setKinPhone(e.target.value)}
                                            className= {`formInput sm ${isRequired && "required"}`}
                                            />
                                    </section>
                                    <section>
                                        <label>Relationship</label>
                                            <select className = {`formSelect sm ${isRequired && "required"}`} name="user_sex" onChange={(e)=>setKinRelationship(e.target.value)} value={kinRelationship}>
                                                <option>- Select Relationship -</option>
                                                <option value={'Father'}>Father</option>
                                                <option value={'Mother'}>Mother</option>
                                                <option value={'Husband'}>Husband</option>
                                                <option value={'Wife'}>Wife</option>
                                                <option value={'Uncle'}>Uncle</option>
                                                <option value={'Aunt'}>Aunt</option>
                                                <option value={'Brother'}>Brother</option>
                                                <option value={'Sister'}>Sister</option>
                                                <option value={'Friend'}>Friend</option>
                                                <option value={'Unknown'}>Unknown</option>
                                            </select>
                                    </section>
                                    <section>
                                        <label>Kin Address</label>
                                            <textarea className= {`formTextArea sm ${isRequired && "required"}`} type="text"name="user_additional_info" placeholder="Address here..."
                                            value={kinAddress} onChange={(e)=> setKinAddress(e.target.value)}
                                            />
                                    </section>

                                </form>
                                
                            </div>
                        </div>
                        <div className="body-item">
                            <div className='header-section'>
                                <div className="icon-holder">
                                  <PiIcons.PiWalletBold style={{width: '18px',height: '25px'}} />
                                </div>
                                <div className="section-title">
                                    Payer Information
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className="patient-button-holder">
                        <button onClick={handleSubmit}>Save</button>
                    </div>
                </div>

              }


          </div>

        </div>
    </div>
  )
}

export default PatientCare