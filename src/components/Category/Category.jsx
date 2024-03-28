import React from 'react'

export default function Category({item}) {
  const {availability,logo,category_name}=item
  return (
    <div className='my-8'>
      <img className='p-5' src={logo} alt="" />
      <h2 className="text-2xl text-[#A3A3A3] mt-4">{category_name}</h2>
      <p className="my-2  text-[#474747]">{availability}</p>
    </div>
  )
}



{/* 
<div className="">
    
    
</div>

<div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
        <h2 className="card-title">{job_title}</h2><hr />
        <p className='text-[#474747]'>Salary : <span className="text-[#757575]">{salary}</span></p>
        <p className='text-[#474747]'>Job Title  : <span className="text-[#757575]">{job_title}</span></p>
        <h2 className='text-xl text-black font-semibold'>Contact Information</h2><hr />
        <p className='text-[#474747]'>Phone : <span className="text-[#757575]">{contact_information.phone}</span></p>
        <p className='text-[#474747]'>Email : <span className="text-[#757575]">{contact_information.email}</span></p>
        <p className='text-[#474747]'>address : <span className="text-[#757575]">{contact_information}</span></p>
        <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
        </div>
    </div>
</div>
</div> */}