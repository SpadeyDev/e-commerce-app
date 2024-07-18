import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Basket from './components/Basket';

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/productDetails/:id' element={<ProductDetails/>} />
          <Route path='/basket' element={<Basket/>} />
          
        </Routes>
    </div>
  );
}

export default App;
