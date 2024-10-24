import React from 'react'
import './SingleProductimage.css'
import { useState } from 'react'
export default function SingleProductsimages({ images=[{url: ''}] }) {
    console.log(images)
    const [mainimage, setmainimage] = useState(images[0])
    return (
        <>
            <div className='single-product-images'>
                {images && images.map((curr, index) => {
                    return (
                        <img src={curr.url} alt={curr.filename} key={index} onClick={()=> setmainimage(curr)}/>
                    )
                })}
                <div className="product-screen2">
                    <div>
                        <img src={mainimage && mainimage.url} alt={mainimage && mainimage.filename} className='image2' />
                    </div>
                </div>
            </div>
        </>
    )
}
