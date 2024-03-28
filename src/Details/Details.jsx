import React from 'react'
import { NavLink, useLoaderData, useParams } from 'react-router-dom'
import { getLsJob, setLsJob } from '../components/utility/utility'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


export default function Details() {
    
    const { id } = useParams()
    const jobs = useLoaderData()
    const job = jobs.find((jb) => jb.id == id)
    const { job_title, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information} = job;

    const handleApply = (id) => {
        const applyJobs=getLsJob('applyed')
        for(let idj of applyJobs) {
          if(idj===id){
            toast.error('You have already applied for this job !')    
            return
          }
        }
        toast.success('Applied Success')
        setLsJob(id,'applyed')
    }
    

    return (
        <div>
            <h2 className="text-3xl  font-bold text-center my-20">Job Details</h2>
            <div className="flex flex-col md:flex-row">
                <div className="">
                    <p>Job Description : <span className='text-[#757575]'>{job_description}</span></p>
                    <p className='my-6'>Job Responsibility: <span className='text-[#757575]'>{job_responsibility}</span></p>
                    <h4 className=" my-6">Educational Requirements: <br /><span className='text-[#757575]'>{educational_requirements}</span></h4>
                    <h4>Experiences: <br /><span className='text-[#757575]'>{experiences}</span></h4>
                </div>
                <div className="">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title mb-2">Job Details</h2><hr />
                            <p className='text-[#474747]'>Salary : <span className="text-[#757575]">{salary}</span></p>
                            <p className='text-[#474747]'>Job Title  : <span className="text-[#757575]">{job_title}</span></p>
                            <h2 className='text-xl font-semibold mt-7 mb-2'>Contact Information</h2><hr />
                            <p className='text-[#474747]'>Phone : <span className="text-[#757575]">{contact_information.phone}</span></p>
                            <p className='text-[#474747]'>Email : <span className="text-[#757575]">{contact_information.email}</span></p>
                            <p className='text-[#474747]'>address : <span className="text-[#757575]">{contact_information.address}</span></p>
                            <ToastContainer />
                            <div className="card-actions">
                                <button onClick={()=>handleApply(job.id)} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] w-full text-white my-4">Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
