import React, { Component } from 'react';
import   './Header.scss';
import { ReactComponent as MainLogo } from '../../resources/icons/MainLogo.svg';
import CurrencySelectorAndCart from '../../components/CurrencySelectorAndCart';

import NavigationButtons from './NavigationButtons';

export class Header extends Component{

  render(){
    return(
      <div className='header'>
        <div className='headerElementsWrapper'>

          <div className='navigation'>
            <NavigationButtons/>
          </div>

          <div className='mainLogoWrapper'>
            <MainLogo/>
          </div>

          <div className='currencyAndCartWrapper'>
            <CurrencySelectorAndCart/>
          </div>

        </div>
      </div>
    );
  }
}

