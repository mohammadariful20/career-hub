import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { BsCurrencyDollar } from "react-icons/bs";

export default function Applyed({ job }) {
    console.log(job)
    return (
        <div className='flex shadow-2xl gap-10 my-32'>
            <img className='w-60 h-60 m-8' src={job.logo} alt="" />
            <div className="flex items-end w-11/12 justify-between">
                <div className="">
                    <h2 className="text-2xl text-[#A3A3A3] mt-4">{job.job_title}</h2>
                    <p className="my-2  text-[#474747]">{job.company_name}</p>
                    <div className="my-6">
                        <span className='border border-[#7E90FE] py-2 px-4 rounded'>{job.remote_or_onsite}</span>
                        <span className='border border-[#7E90FE] py-2 px-4 rounded mx-5'>{job.job_type}</span>
                    </div>
                    <div className="flex my-7 items-center">
                        <CiLocationOn />
                        <p className="mx-2 mr-10">{job.contact_information.address}</p>
                        <BsCurrencyDollar />
                        <p className="mx-2">{job.salary}</p>
                    </div>
                </div>
                <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] w-32 text-white my-4 mr-10">View Details</button>

            </div>


        </div>
    )
}
