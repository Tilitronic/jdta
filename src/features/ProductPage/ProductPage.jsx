import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { makeProductQuery } from '../../api/gql';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';

import { Attributes } from './Attributes/Attributes';
import { SmallPictures } from './SmallPictures/SmallPictures';

import styles from './ProductPage.scss';

export function ProductPage() {
  const [activeImage, setAciveImage] = useState(0);
  const location = useLocation()
  // const shouldUseEffect=useRef(true);
  const params = useParams()
  const productId = params.id;
  const productQuery = makeProductQuery(productId)
  const { loading, error, data } = useQuery(productQuery)
  const currentCurrency = useSelector(state => state.currency.currentCurrency)

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const price = data.product.prices.filter((obj) => obj.currency.symbol === currentCurrency)[0]
  console.log("data", data);

  return (
    <div className='productPageWrapper'>
      <div className='productPageElementsWrapper'>
        <div className='smallPictures'>
          <SmallPictures data={data.product.gallery} setState={setAciveImage} />
        </div>
        <div className='MainPicture'>
          <img src={data.product.gallery[activeImage]} alt='Product' />
        </div>
        <div className='productDetails'>
          <div className='productName'>
            <h1>{data.product.brand+' '+data.product.name}</h1>
          </div>
          <div className='productAttributes'>
            <Attributes data={data.product.attributes}/>
          </div>
          <div className='productPrice'>
            <p className='priceWord'>PRICE:</p>
            <p className='priceValue'>{price.currency.symbol}{price.amount}</p>
          </div>
          <div className='addToCartPPtButton'>
            <button>ADD TO CART</button>
          </div>
          <div className='productDesctiprion'>
            <div>{parse(data.product.description)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
