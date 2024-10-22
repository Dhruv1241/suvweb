import React from 'react'
import { NavLink } from 'react-router-dom'
import './FeatureProduct.css'
export default function FeatureProduct(curr) {
  const { id, name, image, price, category } = curr
  // console.log('curr is', curr)
  return (

      <NavLink to={`/singleproduct/${id}`} className='feature-navlink'>
        <div className='feature-image-container'>
          <div className='feature-image'>
          <img src={image} alt="name" className='feature-product-img' />
          
          </div>
        </div>
      </NavLink>



  )
}
