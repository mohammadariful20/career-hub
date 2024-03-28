import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function Jobs({ jobs }) {
    const { logo, job_title, company_name, job_type, remote_or_onsite, location, salary, id } = jobs
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-8">
                <figure><img src={logo} alt="job" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {job_title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className=''>{company_name}</p>
                    <div className="flex my-2">
                        <button className="badge badge-outline mr-2">{job_type}</button>
                        <button className="badge badge-outline">{remote_or_onsite}</button>
                    </div>
                    <div className="flex">
                        <IoLocationOutline />
                        <p className="ml-2">{location}</p>
                        <AiOutlineDollarCircle />
                        <p className="ml-2">{salary}</p>
                    </div>
                    <div className="card-actions  my-4">
                        <NavLink to={`details/${id}`}><button className="btn badge-outline">View Details</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
