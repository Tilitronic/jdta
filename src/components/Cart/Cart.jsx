import React, { Component } from 'react';
import { useState, useRef } from 'react';
import { ReactComponent as CartIcon } from '../../resources/icons/EmptyCart.svg'
import { Dropdown } from '../Dropdown';
import { useOutsideClickDetector } from '../hooks/useOutsideClickDetector';
import styles from './Cart.scss';
import CartMenuProduct from './CartMenuProduct';
import parse from 'html-react-parser';


export class Cart extends Component {
  state = {
    isShow: false,
    itemsInCart: 0,
  };
  dropdownRef = React.createRef();
  iconRef = React.createRef();
  handleClickOutside = this.handleClickOutside.bind(this);


  handleCartClick = () => {
    this.setState({ isShow: !this.state.isShow })
  }
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

  componentDidUpdate() {
    if (this.state.itemsInCart !== this.props.productsList.length) {
      this.setState({ itemsInCart: this.props.productsList.length })
    }
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
              <div className='cartItemNumber' style={{ display: this.state.itemsInCart>0? 'flex': 'none'}}>{this.state.itemsInCart}</div>
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
                <button className='cMviewBagButton'>VIEW BAG</button>
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

// export function Cart() {
//   const [isShow, setIsShow] = useState(false)
//   function handleCartClick() {
//     setIsShow(!isShow)
//   }

//   const iconRef = useRef(null)
//   const dropdownRef = useRef(null);
//   useOutsideClickDetector(iconRef, isShow, handleCartClick, dropdownRef)

//   return (
//     <div>
//       <Dropdown
//         isShow={isShow}
//         head={
//           <div onClick={handleCartClick} ref={iconRef} className='cartIcon1Wrapper'>
//             <CartIcon className='cartIcon1' />
//           </div>}
//         childrenClassName='cartDropdown'
//         className='cartWrapper'
//       >
//         <div className='cartMenu' ref={dropdownRef}>
//           cucucucucucucumber
//         </div>

//       </Dropdown>
//       <div className={isShow ? 'cartDirtyWindow' : ''}></div>
//     </div>
//   )
// }
