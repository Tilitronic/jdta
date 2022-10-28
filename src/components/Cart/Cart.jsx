import React, { Component } from 'react';
import { useState, useRef } from 'react';
import { ReactComponent as CartIcon } from '../../resources/icons/EmptyCart.svg'
import { Dropdown } from '../Dropdown';
import { useOutsideClickDetector } from '../hooks/useOutsideClickDetector';
import styles from './Cart.scss';
import CartMenuProduct from './CartMenuProduct';
import parse from 'html-react-parser';
import { withRouter } from 'react-router-dom';

class CartRoutless extends Component {
  state = {
    isShow: false
  };
  dropdownRef = React.createRef();
  iconRef = React.createRef();
  handleClickOutside = this.handleClickOutside.bind(this);

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.iconRef && !this.iconRef.current.contains(event.target) && !this.dropdownRef.current.contains(event.target) && this.state.isShow) {
      this.setState({ isShow: !this.state.isShow });
    }
  }

  handleCartClick = () => {
    this.setState({ isShow: !this.state.isShow })
  }

  handleViewBagClick = ()=>{
    this.props.history.push('/cart')
    this.setState({ isShow: !this.state.isShow })
  }

  roundNumber = function (number){
   return Math.round((number + Number.EPSILON) * 100) / 100
  }
  render() {
    const totalPrice=this.props.totalPrice.find(obj=>this.props.currentCurrency===obj.currency.symbol)
    return (
      <div>
        <Dropdown
          isShow={this.state.isShow}
          head={
            <div onClick={this.handleCartClick} ref={this.iconRef} className='cartIcon1Wrapper'>
              <CartIcon className='cartIcon1' />
              <div className='cartItemNumber' style={{ display: this.props.productsList.length>0? 'flex': 'none'}}>{this.props.productsList.length}</div>
            </div>}
          childrenClassName='cartDropdown'
          className='cartWrapper'
        >
          <div className='cartMenu' ref={this.dropdownRef}>
            <div className='cartMenuElementsWrapper'>

              <div className='cartMenuTitle'>
                {parse("<p className='cartMenuTitleBoldPart'>My bag,&nbsp</p>")}
                <p className='cartTitleItemcNumber'>{this.state.itemsInCart + ' items'}</p>
              </div>

              <div className='cartMenuProductsWrapper'>
                {
                  this.props.productsList.map((obj, index) => {
                    return <CartMenuProduct data={obj} key={'productInCart' + index} />
                  })
                }
              </div>

              <div className='totalCartMenuPriceWrapper'>
                <p>Total</p>
                <p>{totalPrice? totalPrice.currency.symbol+this.roundNumber(totalPrice.amount) : ''}</p>
              </div>

              <div className='cartMenuButtonsWrapper1'>
                <button className='cMviewBagButton' onClick={()=>this.handleViewBagClick()}>VIEW BAG</button>
                <button className='cMcheckOutButton'>CHECK OUT</button>
              </div>


            </div>
          </div>
        </Dropdown>
        <div className={this.state.isShow ? 'cartDirtyWindow' : ''}></div>
      </div>
    )
  }
}

export const Cart = withRouter(CartRoutless); 

