import { useDispatch } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { addJobs } from './redux/actions';
import { getSampleJdJSON } from './utils/allJobs';
import JobsContainer from './Components/JobsContainer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addJobs(getSampleJdJSON()))  
  }, [dispatch])

  return (
    <div className="App">
        <JobsContainer />
    </div>
  );
}

export default App;
