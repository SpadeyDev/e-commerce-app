import React from 'react'
import Banner from '../components/Banner'
import '../css/MainMenu.css'
import { IoIosArrowForward } from "react-icons/io";


function MainMenu() {
  return (
    <div className='main'>
        <div className='list'>
        <ul>
            <li>Woman's Fashion <IoIosArrowForward style={{fontSize: '13'}}/> </li>
            <li>Men's Fashion <IoIosArrowForward style={{fontSize: '13'}}/> </li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby's & Toys</li>
        </ul>
        </div>

        <div className='vertical-line'></div>

        <div className='banner'>
            <Banner/>
        </div>
    </div>
  )
}

export default MainMenu