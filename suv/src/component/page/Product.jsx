import React from 'react'
import { useEffect } from 'react'
import Fetchdata from '../store/Slices/Fetchdata'
import {useDispatch} from 'react-redux'

export default function Product() {
  useEffect(()=>{
    Fetchdata()
  },[])
  const dispatch = useDispatch()
  return (
    <div>
      <img src={(e)=> dispatch(Fetchdata())} alt="" />
    </div>
  )
}
