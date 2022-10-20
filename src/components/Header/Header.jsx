import React from 'react';
import styles from './Header.scss';
import {ReactComponent as MainLogo} from '../../resources/icons/MainLogo.svg'
import { useState, useRef, useEffect } from 'react';
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
  const shouldUseEffect=useRef(true);
  const [activeButton, setActiveButton] = useState('all')
  const navigate = useNavigate();

  function handleClick(pathname, name){
    navigate(pathname)
    setActiveButton(name)
  }

  const location=useLocation();
  useEffect(()=>{
    if (shouldUseEffect.current){
      const pathname = location.pathname;
      switch (pathname) {
        case '/':
          setActiveButton('all')
          break;
        case '/tech':
          setActiveButton('tech')
          break; 
        case '/clothes':
          setActiveButton('clothes')
          break;
        default:
          setActiveButton('all')
          break;
      }
    }

  }, [location])
  const elementsAr = locations.map((obj, index)=>{
    return(
      <div className='navButtonWrapper' key={'headerNavButon'+index}>
        <button key={obj.name+'NavButon'} className={obj.name===activeButton ? 'active navButton' : 'navButton'} onClick={()=>handleClick(obj.pathname, obj.name)}>
          <span>{obj.name.toUpperCase()}</span>
        </button>
        <div className={obj.name===activeButton ? 'navButtonUnderline' : ''}></div>
      </div>

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
