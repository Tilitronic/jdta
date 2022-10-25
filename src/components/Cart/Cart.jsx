import React, { Component } from 'react';
import { useState, useRef } from 'react';
import { ReactComponent as CartIcon } from '../../resources/icons/EmptyCart.svg'
import { Dropdown } from '../Dropdown';
import { useOutsideClickDetector } from '../hooks/useOutsideClickDetector';
import styles from './Cart.scss';


export class Cart extends Component {
  state = {isShow: false};
  dropdownRef = React.createRef();
  iconRef = React.createRef();
  handleClickOutside = this.handleClickOutside.bind(this);


  handleCartClick = ()=>{
    this.setState( {isShow: !this.state.isShow})
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.iconRef && !this.iconRef.current.contains(event.target) && !this.dropdownRef.current.contains(event.target) && this.state.isShow) {
      this.setState( {isShow: !this.state.isShow});
    }
  }



  render(){ return(
    <div>
      <Dropdown
        isShow={this.state.isShow}
        head={
          <div onClick={this.handleCartClick} ref={this.iconRef} className='cartIcon1Wrapper'>
            <CartIcon className='cartIcon1' />
          </div>}
        childrenClassName='cartDropdown'
        className='cartWrapper'
      >
        <div className='cartMenu' ref={this.dropdownRef}>
          cucucucucucucumber
        </div>

      </Dropdown>
      <div className={this.state.isShow ? 'cartDirtyWindow' : ''}></div>
    </div>
)}} 

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
