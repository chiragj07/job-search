import React, { useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card';
import NoJobs from './NoJobs';

import "./styles.css"
import { nextBtn } from '../../redux/actions';

const JobsContainer = () => {
  const {jobs, page} = useSelector(state => state);
  const observer = useRef();
  
  const dispatch = useDispatch();

  const lastNodeRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting && jobs.length / 6 < 11){
        dispatch(nextBtn())
      }
    });

    if (node) observer.current.observe(node);
  }, []);

  return (
    <>
    {jobs.length === 0 && <NoJobs />}
    {jobs.length > 0 && (<div id='jobs-contianer'>
      {jobs.slice(0, + page * 6 + 6).map((item, ind) => {
      if (ind !== page * 6 + 5) return <Card key={item.jdUid} job={item}/>
      else return <Card ref={lastNodeRef} key={item.jdUid} job={item}/>
      })}
    </div>)}
    </>
  )
}

export default JobsContainer