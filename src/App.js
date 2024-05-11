import { useDispatch } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { addJobs } from './redux/actions';
import { getSampleJdJSON } from './utils/allJobs';
import JobsContainer from './Components/JobsContainer';
import Filters from "./Components/Filters"
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addJobs(getSampleJdJSON()))  
  }, [dispatch])

  return (
    <div className="App">
        <Filters />
        <JobsContainer />
    </div>
  );
}

export default App;
