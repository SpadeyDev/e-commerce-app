import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../redux/slices/productSlice";
import Header from '../components/Header';
import Star from '../components/Star';
import Shopnow from "./Shopnow";
import '../css/ProductDetails.css';
import { CiHeart } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { addToBasket } from "../redux/slices/basketSlice";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);
  const basketProducts = useSelector((store) => store.basket.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const idProducts = products.filter(item => item.id.toString() === id);

  const addBasket = (product) => {
    const { price, image, title, description } = product;
    const payload = {
      id: product.id,
      price,
      image,
      title,
      description,
      count: 1, 
    };
    dispatch(addToBasket(payload));
  };



  return (
    <div className="">
      <Shopnow />
      <Header />
      <hr />
      {idProducts.length > 0 ? (
        idProducts.map((product) => (
          <div key={product.id} className="top-title">
            <h3 className="top-title">{product.category} | {product.title}</h3>

            <div className="main-product">
              <div>
                <img className="product-image" src={product.image} alt="" />
              </div>
              <div className="section-product">
                <h2>{product.title}</h2>
                <div className="rate">
                  <Star /> <span className="rate2"> {product.rating.rate}</span> <span className="stok">In Stock</span>
                </div>
                <h1>{product.price}$</h1>
                <p>{product.description}</p>
                <div className="buy">
                  <button className="buy-button" onClick={() => addBasket(product)}>Buy Now!</button> <CiHeart className="icons" />
                </div>
                <div className="delivery">
                  <CiDeliveryTruck className="delivery-icon" /> <div className="delivery2"><h2>Free Delivery</h2> <span>Enter your post code for <span className="underline">Delivery Availability</span></span></div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Ürün bulunamadı</p>
      )}
    </div>
  );
}

export default ProductDetails;
