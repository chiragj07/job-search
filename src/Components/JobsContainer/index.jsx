import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';
import "./styles.css"
const JobsContainer = () => {
  const {jobs} = useSelector(state => state.jobs);

  return (
    <div id='jobs-contianer'>
      {jobs.map((item) => <Card key={item.jdUid} job={item}/>)}
    </div>
  )
}

export default JobsContainer