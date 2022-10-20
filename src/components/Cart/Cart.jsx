import React from 'react';
import { useState, useRef } from 'react';
import { ReactComponent as CartIcon } from '../../resources/icons/EmptyCart.svg'
import { Dropdown } from '../Dropdown';
import { useOutsideClickDetector } from '../hooks/useOutsideClickDetector';
import styles from './Cart.scss';



export function Cart() {
  const [isShow, setIsShow] = useState(false)
  function handleCartClick() {
    setIsShow(!isShow)
  }

  const iconRef = useRef(null)
  const dropdownRef = useRef(null);
  useOutsideClickDetector(iconRef, isShow, handleCartClick, dropdownRef)

  return (
    <div>
      <Dropdown
        isShow={isShow}
        head={
          <div onClick={handleCartClick} ref={iconRef} className='cartIcon1Wrapper'>
            <CartIcon className='cartIcon1' />
          </div>}
        childrenClassName='cartDropdown'
        className='cartWrapper'
      >
        <div className='cartMenu' ref={dropdownRef}>
          cucucucucucucumber
        </div>

      </Dropdown>
      <div className={isShow ? 'cartDirtyWindow' : ''}></div>
    </div>
  )
}
