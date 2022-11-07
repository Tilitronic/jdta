import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import ShowcasePage from './features/ShowcasePage';
import ProductPage from './features/ProductPage';
import CartPage from './features/CartPage';
import { Header } from './components/Header';

class  App extends React.Component{
  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/' exact><ShowcasePage/></Route>
          <Route path='/cart' exact><CartPage/></Route>
          <Route path='/product/:id' exact><ProductPage/></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
