import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, selectCategories } from '../features/product/productSlice'
import { Link } from 'react-router-dom'

export default function Categories() {
  const categories = useSelector(selectCategories)
  const dispatch = useDispatch()

  useEffect(function(){
    dispatch(fetchCategories())
  },[dispatch])

  if(!categories) return 

  return (
    <div className='flex space-x-10'>
        {categories.map((category, index)=>{
            return <div key={index} className='font-bold hover:opacity-80'>
                <Link to={`products/category/${category}`}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </Link>
            </div>
        })}
    </div>
  )
}
