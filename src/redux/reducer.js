import { ADD_JOBS, INC_PAGE } from "./types";

const initialState = {
  jobs: [],
  page: 0
}


const reducer = (state= initialState, action) => {
  switch(action.type){
    case ADD_JOBS:
      return {
        ...state,
        jobs: [...action.payload]
      }
    case INC_PAGE:
      return{
        ...state,
        page: state.page + 1
      }
    default: return state;
  }
}

export default reducer