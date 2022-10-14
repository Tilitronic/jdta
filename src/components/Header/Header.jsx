import React from 'react';
import { Bag } from '../Bag/Bag';
import styles from './Header.scss';
import {ReactComponent as MainLogo} from '../../resources/icons/MainLogo.svg'
import {ReactComponent as Cart} from '../../resources/icons/EmptyCart.svg'
import {ReactComponent as Arow} from '../../resources/icons/arrow.svg'
import { useState } from 'react';
import { CurrencySelector } from '../../features/components/CurrencySelector/CurrencySelector';


export function Header() {
  return (
    <div className='header'>
      <div className='headerElementsWrapper'>
      <div className='navigation'>
        <button className='navButton'><span>WOMEN</span></button>
        <button className='navButton'>MAN</button>
        <button className='navButton selected'>KIDS</button>
      </div>

      <div className='mainLogoWrapper'>
        <MainLogo/>
      </div>

      <div className='currencyAndCartWrapper'>
        <div className='currencyWrapper'>
          <CurrencySelector/>
        </div>
        <div className='cartWrapper'>
          <Cart/>
        </div>

      </div>
      </div>
      

    </div>
  )
}
