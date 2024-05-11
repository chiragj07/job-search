export const capitalize  = (str) => {
  let splitted = str.split(" ");
  splitted = splitted.map((item) => {
    const f = item[0].toUpperCase();
    return f + item.substring(1) ;
  })
  return splitted.join(" ")
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


