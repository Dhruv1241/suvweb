import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { getAllProducts } from "../store/Slices/Fetchdata";
import { addToCart } from '../store/Slices/cartSlice';
import  './Product.css'

export default function Product() {

  const {cart} = useSelector(state=>state.cart)
  const dispatch = useDispatch();

  const addToTheCart = (itemId) => {
    dispatch(addToCart(itemId));
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const { product, isLoading, error } = useSelector(state => state.Fetchdata);

  console.log("cart is ", cart);
  // console.log('fetch data is',Fetchdata)
  

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='product-container'>
      <div className="div-container">
      {product && product.map(item => (
        <div className="card" key={item.id}>
          <div className="img-div">
          <img src={item.image} alt={item.name}/>
          <button onClick={() => addToTheCart(item.id)} className='addtocardproduct'>Add to Cart</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
