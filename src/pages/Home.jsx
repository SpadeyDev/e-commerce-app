import React from 'react'
import Shopnow from '../components/Shopnow'
import Header from '../components/Header'
import MainMenu from '../components/MainMenu'
import ProductList from '../components/ProductList'
import FlashSale from '../components/Flash'

function Home() {
  return (
    <div>
      <Shopnow/>
      <Header/>
      <hr />
      <MainMenu/>
      <FlashSale/>
      <ProductList/>
    </div>
  )
}

export default Home