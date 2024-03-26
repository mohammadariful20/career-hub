import React, { useEffect, useState } from 'react'
import Jobs from '../Jobs/Jobs'

export default function FeaturedJobs() {
    const [jobs,setJobs]=useState([])
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])

  return (
    <div>
      <div className="mx-auto text-center my-8">
        <h2 className="text-3xl">Featured Jobs</h2>
        <p className="my-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className=" grid grid-cols-2">
        {
            jobs.map((jobs)=>{
                return <Jobs key={jobs.id} jobs={jobs}></Jobs>
            })
        }
      </div>
    </div>
  )
}
