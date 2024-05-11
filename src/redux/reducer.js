import { getFilteredJobs } from "../utils/commonLib";
import { ADD_JOBS, FILTER_JOBS, INC_PAGE } from "./types";

const initialState = {
  allJobs: [],
  jobs: [],
  page: 0
}


const reducer = (state= initialState, action) => {
  switch(action.type){
    case ADD_JOBS:
      return {
        ...state,
        allJobs: [...action.payload],
        jobs: [...action.payload]
      }
    case INC_PAGE:
      return{
        ...state,
        page: state.page + 1
      }
    case FILTER_JOBS:
      return {
        ...state,
        jobs: getFilteredJobs(state.allJobs, action.key, action.payload)

      }
    default: return state;
  }
}

export default reducer