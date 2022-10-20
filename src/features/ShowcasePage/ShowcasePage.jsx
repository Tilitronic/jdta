import React from 'react';

import { useQuery } from '@apollo/client';
import { categories } from '../../api/gql';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';


import { ReactComponent as AddToCartIcon } from '../../resources/icons/AddToCart.svg';

import styles from './ShowcasePage.scss';

function Product({ obj }) {
  const navigate = useNavigate();
  const currentCurrency = useSelector(state => state.currency.currentCurrency)
  const picture = obj.gallery[0];
  const price = obj.prices.filter((obj) => obj.currency.symbol === currentCurrency)[0]
  const [addToCartClass, setAddToCartClass] = useState('addToCart')
  const handleMouseOverlay = (move) => {
    if (move === 'over' && obj.inStock) {
      setAddToCartClass('addToCart active')
    }
    else if (move === 'out') {
      setAddToCartClass('addToCart')
    }
  }



  return (
    <div className='productIetemWrapper' key={obj.id}>
      <div className='productItetm' onMouseOver={() => handleMouseOverlay('over')} onMouseOut={() => handleMouseOverlay('out')}>
      
        <Link to={'/product'+'/'+obj.id}>
        <div className={!obj.inStock ? 'outOfStockProduct' : ''}>
          <div className={!obj.inStock ? 'outOfStockPicture' : ''}>
            <p style={{display: !obj.inStock ? 'absolute' : 'none'}} className='outOfStockText'>OUT OF STOCK</p>
          </div>
        </div>
        
        <div className='showcasePicture'>
          <img src={picture} alt={'Picture of ' + obj.name} />
        </div>
        </Link>
        <div className={addToCartClass}><AddToCartIcon /></div>
        <div className={!obj.inStock ? 'showcaseName outOfStock' : 'showcaseName'}>
          <p>{obj.name}</p>
        </div>
        <div className={!obj.inStock ? 'showcasePrice outOfStock' : 'showcasePrice'}>
          {price.currency.symbol + price.amount}
        </div>
      </div>
    </div>
  )
}

function Products({ data }) {

  const elementsAr = data.map((obj) => {
    return (<Product obj={obj} />)
  })
  return elementsAr
}

export function ShowcasePage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const shouldUseEffect = useRef(true);
  const { loading, error, data } = useQuery(categories)
  const location = useLocation();
  useEffect(() => {
    if (shouldUseEffect.current) {
      const pathname = location.pathname;
      switch (pathname) {
        case '/':
          setActiveCategory('all')
          break;
        case '/tech':
          setActiveCategory('tech')
          break;
        case '/clothes':
          setActiveCategory('clothes')
          break;
        default:
          setActiveCategory('all')
          break;
      }
    }

  }, [location])
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  // const  categoriesAr = data.categories.map(el=>el.name)

  let dataToShow = data.categories.filter((obj) => obj.name === activeCategory)[0]
  console.log("dataToShow", dataToShow);


  return (
    <div className='showcaseWrapper'>
      <div className='sjowcaseElementsWrapper'>
        <div className='categoryName'>
          {dataToShow.name.slice(0, 1).toUpperCase() + dataToShow.name.slice(1)}
        </div>
        <div className='produtsWrapper'>
          <Products data={dataToShow.products} />
        </div>
      </div>
    </div>
  )
}
