import React from 'react';
import { useState, useRef } from 'react';
import { useOutsideClickDetector } from '../hooks/useOutsideClickDetector';

import { useSelector } from 'react-redux';


import { ReactComponent as Arow } from '../../resources/icons/arrow.svg'
import { Cart } from '../Cart/Cart';
import { Dropdown } from '../Dropdown';
import { Currencies } from './Currencies';

import styles from './CurrencySelectorAndCart.scss';


export function CurrencySelectorAndCart() {
  const currentCurrency = useSelector(state => state.currency.currentCurrency)
  const [isShow, setIsShow] = useState(false)
  
  function handleCurrencyClick() {
    setIsShow(!isShow)
  }

  const dropdownRef = useRef(null)
  const headRef = useRef(null)
  useOutsideClickDetector(dropdownRef, isShow, handleCurrencyClick, headRef)

  return (
    <div className='currencySelectorAndCart'>

      <Dropdown
        className='currencySelector'
        isShow={isShow}
        // handleCurrencyClick={handleCurrencyClick}
        childrenClassName='dropdownCurrencies'
        head={
          <div className='currencyLogoAndCartElementWrapper'>
            <div style={{ paddingRight: '5px' }} className='currentCurrency' onClick={handleCurrencyClick} ref={headRef}>
              {currentCurrency} <Arow className={isShow ? 'rotateArrow arrow' : 'arrow'} />
            </div>
            
          </div>
        }
      >
        <Currencies handleCurrencyClick={handleCurrencyClick} ref={dropdownRef} />
      </Dropdown>
      <Cart />


    </div>
  )
}
