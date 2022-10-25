import React from 'react';
import { Routes, Switch, Route} from "react-router-dom"
import './App.scss';
import ShowcasePage from './features/ShowcasePage';
import ProductPage from './features/ProductPage';
import {CartPage} from './features/CartPage';
import {Header} from './components/Header';
import { useState, useRef, useEffect } from 'react';

function App() {

  return (
    // <BrowserRouter>
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/' exact><ShowcasePage/></Route>
        <Route path='/cart' exact><CartPage/></Route>
        <Route path='/product/:id' exact><ProductPage/></Route>
      </Switch>
    </div>
    // </BrowserRouter>
  );
}


  // const shouldUseEffect=useRef(true);
  // useEffect(()=>{
  //   if (shouldUseEffect.current){
  //     shouldUseEffect.current=false;
  //     getCurrencies()
  //     console.log("data", data.data);

  //   }
  // }, [])

// function App (){


//   return(
//     <div className="App">
//       <Routes>
//         <Route path='/' element={<ShowcasePage/>}/>
//         <Route path='/tech' element={<ShowcasePage/>}/>
//         <Route path='/clothes' element={<ShowcasePage/>}/>
//         <Route path='/cart' element={<CartPage/>}/>
//         <Route path='/product/:id' element={<ProductPage/>}/>
//       </Routes> 
//     </div>
//   )
// }

export default App;
