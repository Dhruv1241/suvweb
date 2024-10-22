import React from 'react'
import { useParams } from 'react-router-dom'
import { getallsingleproduct } from '../store/Slices/SingleProductSlice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
export default function () {
  const {id} = useParams()
  // console.log('params id',id)
  const API = 'https://api.pujakaitem.com/api/products'

  const {fetchsingleproduct} = useSelector(state=> state.singleProducts)
  console.log("single product data is",fetchsingleproduct)
  useEffect(()=>{
    getallsingleproduct(`${API}?id=${id}`)
  },[])
  return (
    <div>single product page</div>
  )
}
