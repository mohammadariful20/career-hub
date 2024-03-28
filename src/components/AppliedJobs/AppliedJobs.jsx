import { useLoaderData } from "react-router-dom"
import { getLsJob } from "../utility/utility"
import { useEffect, useState } from "react"
import Applyed from "../Applyed/Applyed";

export default function AppliedJobs() {
  const [applyjobs,setApplyJobs]=useState([])
  
    const loaderData = useLoaderData();
  const jobs = loaderData || [];

  useEffect(() => {
    const applyid=getLsJob('applyed')
    const apply=[]
    
    for(let item of applyid) {
        const applyJob=jobs.filter(job=>job.id===item)
        apply.push(applyJob)
      }
      setApplyJobs(apply)
    }, [])
  return (
    <div>
      <h2 className="text-center my-20 text-2xl font-bold">Applied Jobs : {applyjobs.length}</h2>
      <div className="">
     {
      applyjobs.flat().map(job=><Applyed key={job.id} job={job}></Applyed>)
     }
      </div>
    </div>
  )
}
