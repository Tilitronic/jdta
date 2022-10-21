import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ReactComponent as AddToCartIcon } from '../../../resources/icons/AddToCart.svg';

import styles from './Product.scss'

export function Product({ obj }) {
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