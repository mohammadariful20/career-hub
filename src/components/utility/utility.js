const getLsJob = (keyName) => {
    const storedJob=localStorage.getItem(keyName)
    if(storedJob){
        return JSON.parse(storedJob)
    }else{
        return []
    }
  
}


const setLsJob = (id,keyName) => {
    const storedJob=getLsJob(keyName)
    const exsits=storedJob.find(job=>job.id===id)
    if(!exsits){
        storedJob.push(id)
        localStorage.setItem(keyName,JSON.stringify(storedJob))
    }
  
}

export{setLsJob,getLsJob}