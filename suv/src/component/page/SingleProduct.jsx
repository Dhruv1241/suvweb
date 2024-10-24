import { useParams } from 'react-router-dom'
<<<<<<< Updated upstream
import { getallsingleproduct } from '../store/Slices/SingleProductPage';
=======
import { getallsingleproducts } from '../store/Slices/SingleProductSlice'
>>>>>>> Stashed changes
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PageNavigation from './PageNavigation';
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import './singleProduct.css'
import SingleProductsimages from './SingleProductsimages';

export default function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getallsingleproduct(id))
  }, [id, dispatch]);

  const { singleproduct, isLoading, isError } = useSelector((state) => state.singledata);
  console.log('single data',singleproduct)

  const { id: alise, company, price, category, stock, stars, reviews, name, description, image } = singleproduct
console.log('images is  ',image)
  if (isLoading) {
    return <div>Hold on</div>
  }

<<<<<<< Updated upstream
=======
  const fetchsingleproduct = useSelector(state=> state.singleProducts)
  console.log("single product data is",fetchsingleproduct)
  useEffect(()=>{
    getallsingleproducts(`${API}?id=${id}`)
  },[])
>>>>>>> Stashed changes
  return (
    <>
      <div><PageNavigation title={name} /></div>

      <div className='single-product-container'>
        <div className="single-product-manager">
          <div className="images">
            <SingleProductsimages images={image}/>
          </div>

          <div className="product-data">
            <h2>{name}</h2>
            <p>{stars}</p>
            <p>{reviews} Reviews</p>
            <p>Deal of the day MRP: <span>{price}</span></p>
            <p>{description}</p>

            <div className="product-waranty">
              <div className="product-waranty-data">
                <TbTruckDelivery className="ser-icn" />
                <p>Free delivery</p>
              </div>

              <div className="product-waranty-data">
                <MdSecurity className="ser-icn" />
                <p>SHOP NOW delivery</p>
              </div>

              <div className="product-waranty-data">
                <GiReceiveMoney className="ser-icn" />
                <p>30 days replacement</p>
              </div>

              <div className="product-waranty-data">
                <RiSecurePaymentLine className="ser-icn" />
                <p>1 year waranty</p>
              </div>
            </div>

            <div className="product-info">
              <p>Available <span>{stock > 0 ? 'In Stock' : 'Not Available'}</span></p>
              <p>ID: <span>{id}</span></p>
              <p>Brand: <span>{company}</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
