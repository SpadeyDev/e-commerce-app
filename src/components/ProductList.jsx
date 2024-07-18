import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice';
import Product from './Product';
import '../css/Product.css';

function ProductList() {

    const dispatch = useDispatch();
    const {products} = useSelector((store) => store.product)
    const limitedProducts = products ? products.slice(0,4) : []

    useEffect(()=>{
        dispatch(getAllProducts())
    }, [])

  return (
    <div className='flex-row'>
        { 
            limitedProducts && limitedProducts.map((product)=>(
                <Product key={product.id} product={product}/>
            ))
        }
    </div>
  )
}

export default ProductList