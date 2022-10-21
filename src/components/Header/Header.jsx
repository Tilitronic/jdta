import React from 'react';
import styles from './Header.scss';
import {ReactComponent as MainLogo} from '../../resources/icons/MainLogo.svg'
import { CurrencySelectorAndCart } from '../../components/CurrencySelectorAndCart';
import { useLocation } from 'react-router-dom';

import { NavigaionButons } from './NavigaionButons';


export function Header() {

  const location=useLocation();


  return (
    <div className='header'>
      <div className='headerElementsWrapper'>

        <div className='navigation'>
          <NavigaionButons/>
        </div>

        <div className='mainLogoWrapper'>
          <MainLogo/>
        </div>

        <div className='currencyAndCartWrapper'>
            <CurrencySelectorAndCart/>
        </div>

      </div>   
    </div>
  )
}
