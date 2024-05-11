import { ADD_JOBS, FILTER_JOBS, INC_PAGE } from "./types";

export const addJobs = (jobs) => ({
 type: ADD_JOBS,
 payload: jobs
}) 

export const nextBtn = () => ({
  type: INC_PAGE
})

export const filterJobs = (key, values) => ({
  type: FILTER_JOBS,
  key,
  payload: values
})