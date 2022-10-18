import React from 'react';
import { useState, useRef, useEffect, forwardRef } from 'react';
import { useOutsideClickDetector } from '../hooks/useOutsideClickDetector';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentCurrency } from './currencySlice';

import { currencies as currenciesQuery } from '../../api/gql.js'
import { useQuery } from '@apollo/client'

import { ReactComponent as Arow } from '../../resources/icons/arrow.svg'
import { Cart } from '../Cart/Cart';
import { Dropdown } from '../Dropdown';



import styles from './CurrencySelectorAndCart.scss';

const Currencies =forwardRef(({ handleCurrencyClick }, ref)=> {
  const dispatch = useDispatch()

  const handleClick = function (currency) {
    dispatch(setCurrentCurrency(currency))
    handleCurrencyClick()
  }

  const { loading, error, data } = useQuery(currenciesQuery)
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const currenciesElements = data.currencies.map((el, index) => {
    return (
      <div key={'currency' + index} className='currencyUnitWrapper'>
        <div className='currencyUnit' onClick={() => handleClick(el.symbol)}>
          <div>
            {el.symbol}
          </div>
          <div>
            {el.label}
          </div>
        </div>
      </div>
    )
  })
  return (
    <div ref={ref}>
      {currenciesElements}
    </div>
  )
})


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
            <Cart />
          </div>
        }
      >
        <Currencies handleCurrencyClick={handleCurrencyClick} ref={dropdownRef} />
      </Dropdown>



    </div>
  )
}
