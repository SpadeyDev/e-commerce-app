import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Shopnow from './Shopnow';
import Header from './Header';
import '../css/Basket.css';
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";
import { removeFromBasket } from '../redux/slices/basketSlice';

function Basket() {
    const products = useSelector((store) => store.basket.products);
    const dispatch = useDispatch();


    const [counts, setCounts] = useState({});


    const initializeCounts = () => {
        const initialCounts = {};
        products.forEach(product => {
            initialCounts[product.id] = 1;
        });
        setCounts(initialCounts);
    };


    useEffect(() => {
        initializeCounts();
    }, [products]);

    const up = (productId) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [productId]: (prevCounts[productId] || 0) + 1
        }));
    }

    const down = (productId) => {
        if (counts[productId] > 1) {
            setCounts(prevCounts => ({
                ...prevCounts,
                [productId]: (prevCounts[productId] || 0) - 1
            }));
        }
    }

    const countPrice = (product, productId) => {
        const count = counts[productId] || 1; 
        const countSum = count * product.price;
        return countSum.toFixed(2);
    }

    const totalPrice = (product, productId) => {
        const count = counts[productId] || 1; 
        const total = parseFloat(countPrice(product, productId)) + parseFloat(saleTax(product, productId));
        return total.toFixed(2);
    }

    const saleTax = (product, productId) => {
        const count = counts[productId] || 1; 
        let tax = (count * product.price * 0.05);
        return tax.toFixed(2);
    }

    const handleRemoveFromBasket = (productId) => {
        dispatch(removeFromBasket(productId));
        const updatedBasket = products.filter((product) => product.id !== productId);
        localStorage.setItem("basket", JSON.stringify(updatedBasket));
    }

    return (
        <div>
            <Shopnow />
            <Header />
            <hr></hr>
            <div>
                {products && products.map((product) => (
                    <div key={product.id} className='basket-main'>
                        <img src={product.image} alt={product.title} width={150} />
                        <div className='basket-section'>
                            <h1>{product.title}<span className="stok">In Stock</span><LiaTimesSolid onClick={() => handleRemoveFromBasket(product.id)} style={{ marginLeft: '50px', cursor: 'pointer' }} /></h1>
                            <p style={{ width: '550px', marginTop: '15px', color: 'gray' }}>{product.description}</p>
                            <div className='updown'>
                                <button onClick={() => down(product.id)}><AiOutlineMinus style={{ fontSize: '20' }} /></button>
                                <div className='count'>{counts[product.id] || 1}</div> {}
                                <button onClick={() => up(product.id)}><GoPlus style={{ fontSize: '20' }} /></button>
                                <h1>{countPrice(product, product.id)}$</h1>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='sumPrice'>
                    <h1>ORDER SUMMARY</h1>
                    <div className='subtotal'>
                        <h3>Subtotal: {products && products.reduce((sum, product) => sum + parseFloat(countPrice(product, product.id)), 0).toFixed(2)}$</h3>
                        <h3>SaleTax(%5): {products && products.reduce((sum, product) => sum + parseFloat(saleTax(product, product.id)), 0).toFixed(2)}$</h3>
                        <hr style={{ marginTop: '25px' }} />
                        <h3>Grand Total: {products && products.reduce((sum, product) => sum + parseFloat(totalPrice(product, product.id)), 0).toFixed(2)}$</h3>
                        <button>Check out!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Basket;
