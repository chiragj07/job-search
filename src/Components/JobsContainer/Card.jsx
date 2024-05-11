import React from 'react'
import { capitalize, getMinExp, getSalary } from '../../utils/commonLib'


const Card = React.forwardRef(({job} , ref) => (
    <div ref = {ref} className='job-card'>
        <div className='company-details'>
          <img src={job.logoUrl} className='logo-image'  alt="not available" />
          <div className='company-details-data'>
              <span className='company-name'>{capitalize(job.companyName) ?? "NA"}</span>
              <span> {capitalize(job.jobRole) ?? "NA" } </span>
              <span style={{fontWeight: "500"}}> {capitalize(job.location) ?? "NA" } </span>
          </div>
        </div>
        <div className='salary-text'>
            {"Estimated Salary: "} {getSalary(job)} 
        </div>
        <h3>{"About Company"}</h3>
        <div className='job-details-container'>
          <p>{job.jobDetailsFromCompany}</p>
          <div className='view-job-btn'>
            <p>{"View Job"}</p></div>
        </div>
        <div className='min-exp-container'> 
          <p>{"Minimum Experience"}</p>
          <p>{getMinExp(job)}</p>
        </div>

        <div className='button-container'>
            <button className='easy-apply-btn btn'>
              {"⚡️  Easy Apply"}
            </button>
            <button className='referral-btn btn'>
              {"Unlock referral asks"}
            </button>
        </div>
    </div>
  ))

export default Card