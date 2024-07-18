import React from 'react'
import '../css/FlashSale.css'
import FlashSales from '../assets/FlashSales.png'

function Flash() {
  return (
    <div className='flash-main'>
        <div className='flash-today'>
        <div className='square'>
        </div>
        <h3>Today's</h3>
        </div>

        <div>
            <div className='flash-hours'>
            <h1>Flash Sales</h1> 
            <img src={FlashSales} alt="" width={250} /> 
            </div>
        </div>
    </div>
  )
}

export default Flash