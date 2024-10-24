import React from 'react'
import { NavLink } from 'react-router-dom'
import './PageNavigation.css'
export default function PageNavigation({title}  ) {
  return (
    
    <div className='page-title'>
        <NavLink to='/' className='title-navlink'>Home</NavLink>/{title}
    </div>
  )
}
