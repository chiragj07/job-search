import React, { useState } from 'react'
import  MultiSelect from '../Common/MultiSelect'
import "./styles.css"
import { useDispatch } from 'react-redux'
import { filterJobs } from '../../redux/actions'
import { JOB_EXP, COMPANY, JOB_LOCATION, JOB_ROLE, JOB_SALARY } from '../../utils/constants'
import { debounce } from '../../utils/commonLib'
import InputBox from '../Common/InputBox'
const roles = [
  { label: "Backend", value: "backend" },
  { label: "Frontend", value: "frontend" },
  { label: "FullStack", value: "fullstack" },
  { label: "IOS", value: "ios" },
  { label: "React Native", value: "reactnative" },
  {label: "Flutter", value: "flutter"}
]

const locations = [
  {label: "Remote", value: "remote"},
  {label: "In-Office", value: "inoffice"}
]

const exp = [
  {label: "1", value: 1},
  {label: "2", value: 2},
  {label: "3", value: 3},
  {label: "4", value: 4},
  {label: "5", value: 5},
  {label: "6", value: 6},
  {label: "7", value: 7},
  {label: "8", value: 8},
  {label: "9", value: 9},
  {label: "10", value: 10}
]

const minSalary = [
  {label: "0", value: 0},
  {label: "10", value: 10},
  {label: "20", value: 20},
  {label: "30", value: 30},
  {label: "40", value: 40},
  {label: "50", value: 50},
  {label: "60", value: 60},
  {label: "70", value: 70}
]

const Index = () => {
  const dispatch = useDispatch();
  const [role, setRole] = useState([]);
  const [experience, setExperience] = useState("")
  const [location, setLocation] = useState([]);
  const [minPay, setMinPay] = useState("");
  

  const handleCompanyNameChange = (e) => {

    dispatch(filterJobs(COMPANY, [e.target.value]))
  }

  const handleRoleChange = (o) => {
    setRole(o)
    dispatch(filterJobs(JOB_ROLE, o)) 
  }

  const handleLocation = (o) => {
    setLocation(o)
    dispatch(filterJobs(JOB_LOCATION, o)) 
  }

  const handleExperience = (o) => {
    setExperience(o);
    const values = o === "" ? [] : [o]
    dispatch(filterJobs(JOB_EXP, values)) 
  }

  const handleMinPay = (o) => {
    setMinPay(o);
    const values = o === "" ? [] : [o]
    dispatch(filterJobs(JOB_SALARY, values)) 
  }

  const debouncedHandleCompanyChange = debounce(handleCompanyNameChange, 1000);

  return (
    <div className='filter-container'>
      <MultiSelect multiple={true} value={role} onChange={(o) => handleRoleChange(o) }  placeholder={"Role"} options={roles} />
      <MultiSelect multiple={false} value={experience} onChange={(o) => handleExperience(o)}  placeholder={"Experience"} options={exp} />
      <MultiSelect multiple={true} value={location} onChange={(o) => handleLocation(o)}  placeholder={"Location"} options={locations} />
      <MultiSelect multiple={false} value={minPay} onChange={(o) => handleMinPay(o)}  placeholder={"Minimum Base Pay"} options={minSalary} />
      <InputBox onChange={debouncedHandleCompanyChange} placeholder={"Search Company"} />
    
    </div>
  )
}
export default Index;