import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import './App.scss';
import {HomePage} from './features/HomePage';
import {ProductPage} from './features/ProductPage';
import {CartPage} from './features/CartPage';
import {Header} from './components/Header';
import { useState, useRef, useEffect } from 'react';

function App() {
  // const shouldUseEffect=useRef(true);
  // useEffect(()=>{
  //   if (shouldUseEffect.current){
  //     shouldUseEffect.current=false;
  //     getCurrencies()
  //     console.log("data", data.data);

  //   }
  // }, [])


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
