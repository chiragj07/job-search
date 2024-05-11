import { COMPANY, JOB_EXP, JOB_LOCATION, JOB_SALARY } from "./constants";

export const capitalize  = (str) => {
  let splitted = str?.split(" ");
  splitted = splitted?.map((item) => {
    const f = item[0].toUpperCase();
    return f + item.substring(1) ;
  })
  return splitted?.join(" ")
}

 export const  getSalary = (job) => {
  const {maxJdSalary, minJdSalary, salaryCurrencyCode} = job;
  if (maxJdSalary && minJdSalary) {
    return `${minJdSalary} - ${maxJdSalary} ${salaryCurrencyCode}`
  }
  if (maxJdSalary) {
    return `${maxJdSalary} ${salaryCurrencyCode}`
  }
  if (minJdSalary){
    return `${minJdSalary} ${salaryCurrencyCode}`
  }

  return "NA";
}

export const getMinExp= (job) => {
  const {minExp, maxExp} = job;
  if (minExp ) {
    return `${minExp} Years`
  }
  if (maxExp) {
    return `${maxExp} Years`
  }

  return "NA";
}

export const getFilteredJobs = (jobs, key, filterValues) => {
  console.log(filterValues)
  if (filterValues.length === 0) return jobs;
  let  filteredJobs = [];

  if (key === JOB_EXP) filteredJobs =  jobs.filter((item) => filterValues.some((val) => item[key] && item[key] <= val.value)) 
  else if (key === JOB_SALARY) filteredJobs =  jobs.filter((item) => filterValues.some((val) => item[key] && item[key] >= val.value)) 
  
  else if (key === JOB_LOCATION) {
    console.log(filterValues);
    if (filterValues.length === 2) filteredJobs = jobs;
    else filteredJobs = jobs.filter((job) => filterValues[0].value === "remote" ? job[key] === "remote" : job[key] !== "remote")
  }
  
  else if (key === COMPANY) {
    const res = filterValues[0];
    filteredJobs =  jobs.filter((item) => item[key].toLowerCase().includes(res.toLowerCase()));
  }
  else filteredJobs =  jobs.filter((item) => filterValues.some((val) => item[key] && item[key] === val.value)) 
  
  return filteredJobs;
}


export const debounce = (func, delay) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  }
}

