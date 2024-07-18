import React from 'react'
import '../css/Product.css';
import { CiHeart } from "react-icons/ci";
import Star from '../components/Star'
import { useNavigate } from 'react-router-dom';

function Product({product}) {

    const navigate = useNavigate();
    const {id, price, image, title, description} = product;
  return (
 <div>
  <div className='productMain' onClick={()=> navigate('/productDetails/' + id )}>
        <CiHeart className='product-icons'/>
        <img src={image} alt=""  className='productImage'/>
        <div>
            <p className='title'>{title}</p>
            <div className='star'>
            <Star/>
            </div>
            <h3 className='price'>{price}$</h3>
        </div>
    </div>
 </div>
    
    
  )
}

export default Product 

