import { useParams } from 'react-router-dom'
import { getallsingleproduct } from '../store/Slices/SingleProductSlice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
export default function SingleProduct() {
  const {id} = useParams();
  // console.log('params id',id)
  const API = 'https://api.pujakaitem.com/api/products';

  const {fetchsingleproduct} = useSelector(state=> state.singleproduct);
  // yahan pe state.singleproduct change kiya h maine.
  // variables ke naam thk se use kiya kr.
  // variables ke naamo ki maa chudi pdi h.
  // state.singleproduct h vo, pta ni kya use krra tha chutiya.

  
  
  // const fetchsingleproduct = useSelector(state=> console.log("state is ", state));
  console.log("single product data is",fetchsingleproduct);
  useEffect(()=>{
    getallsingleproduct(`${API}?id=${id}`);
  },[]);

  return (
    <div>single product page</div>
  )
}
