import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Category from '../Category/Category'

export default function CategoryList() {
  const [categores, setCategory] = useState([]);
  useEffect(() => {
    fetch('categories.json')
     .then(res => res.json())
     .then(data => setCategory(data));
  }, []);

  return (
    <div>
      <div className="mx-auto text-center my-8">
        <h2 className="text-3xl">Job Category List</h2>
        <p className='my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className="flex gap-20 my-8 justify-center">
        {
          categores.map((category) => {
            return <Category key={category.id} item={category}></Category>
          })
        }
      </div>
    </div>
  )
}
