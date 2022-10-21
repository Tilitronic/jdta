import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client'
import { currencies as currenciesQuery } from '../../../api/gql.js'
import { setCurrentCurrency } from '../currencySlice';


import styles from './Currencies.scss'

export const Currencies =forwardRef(({ handleCurrencyClick }, ref)=> {
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