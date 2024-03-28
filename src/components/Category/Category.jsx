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
