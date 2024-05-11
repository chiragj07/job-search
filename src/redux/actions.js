import { ADD_JOBS, INC_PAGE } from "./types";

export const addJobs = (jobs) => ({
 type: ADD_JOBS,
 payload: jobs
}) 

export const nextBtn = () => ({
  type: INC_PAGE
})