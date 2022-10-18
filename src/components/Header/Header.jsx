import React from 'react';
import styles from './Header.scss';
import {ReactComponent as MainLogo} from '../../resources/icons/MainLogo.svg'
import {ReactComponent as Arow} from '../../resources/icons/arrow.svg'
import { useState } from 'react';
import { CurrencySelectorAndCart } from '../../components/CurrencySelectorAndCart';
import { useNavigate, useLocation } from 'react-router-dom';

const locations = [
  {
    pathname: '/',
    name: 'all'
  },
  {
    pathname: '/tech',
    name: 'tech'
  },
  {
    pathname: '/clothes',
    name: 'clothes'
  },
]

function NavigaionButons(){
  const [activeButton, setActiveButton] = useState('all')
  const navigate = useNavigate();
  function navigateTo(location, ){
    navigate(location)
  }
  function handleClick(pathname, name){
    navigateTo(pathname)
    setActiveButton(name)
  }
  const elementsAr = locations.map((obj)=>{
    return(
      <button key={obj.name+'NavButon'} className={obj.name===activeButton ? 'active navButton' : 'navButton'} onClick={()=>handleClick(obj.pathname, obj.name)}>
        <span>{obj.name.toUpperCase()}</span>
      </button>
    )
  })
  return elementsAr
}

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
