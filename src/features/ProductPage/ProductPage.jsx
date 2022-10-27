import React, { Component } from 'react';
import { useRef, useEffect, useState } from 'react';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { client } from '../../index'
import { makeProductQuery } from '../../api/gql';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';

import { Attributes } from './Attributes/Attributes';
import { SmallPictures } from './SmallPictures/SmallPictures';

import styles from './ProductPage.scss';
import { withRouter } from 'react-router-dom';

class ProductPageWithoutRouter extends Component {
  state = {
    activeImage: 0,
    data: null,
    selectedAttributes: {}
  }
  setActiveImage = (index)=> {
    this.setState({ activeImage: index })
  }
  setSelectedAttributes = (name, value)=>{
    this.setState(prevState=>({
      selectedAttributes: {...prevState.selectedAttributes, [name]: value}
    }))
  }
  getData = function(){
    const id = this.props.history.location.pathname
    const productQuery = makeProductQuery(id.replaceAll('/product/', ''))
    client
      .query({ query: productQuery })
      .then((result) => {
        this.setState({ data: result.data })
        console.log("result", result);
      })
  }
  componentDidMount() {
    this.getData()
  }
  

  handleAddToCartClick = function(inStock, product){
    if(!inStock){
      alert('There is no way you can add an absent in stock item to cart!')
    } 
    else {
      let cartKey = product.id+'_';
      const attributesAr = [];
      for (let key in Object.keys(this.state.selectedAttributes)){
        const attributesObj = product.attributes[key];
        const attribute = {
          id: attributesObj.id,
          items: attributesObj.items,
          name: attributesObj.name,
          selectedAttribute: this.state.selectedAttributes[key]
        };
        attributesAr.push(attribute)
        cartKey+='a'+key+'i'+this.state.selectedAttributes[key]+'_';
      }

      const Product ={
        id: product.id,
        cartKey: cartKey,
        brand: product.brand,
        name: product.name,
        amount: 1,
        attributes: attributesAr,
        prices: product.prices,
        gallery: product.gallery
      }
      this.props.updateProductsList(Product)
    }
  }


  render() {
    if (!this.state.data) { return null }
    console.log("this.state.data", this.state.data);
    const price = this.state.data.product.prices.filter((obj) => obj.currency.symbol === this.props.currentCurrency)[0]
    return (
      <div className='productPageWrapper'>
        <div className='productPageElementsWrapper'>
          <div className='smallPictures'>
            <SmallPictures data={this.state.data.product.gallery} setActiveImage={this.setActiveImage} />
          </div>
          <div className='MainPicture'>
            <img src={this.state.data.product.gallery[this.state.activeImage]} alt='Product' />
          </div>
          <div className='productDetails'>
            <div className='productName'>
              <h1><span className='productNameBrand'>{this.state.data.product.brand+` `}</span><span>{this.state.data.product.name}</span></h1>
            </div>
            <div className='productAttributes'>
              <Attributes data={this.state.data.product.attributes} setSelectedAttributes={this.setSelectedAttributes} state={this.state.selectedAttributes}/>
            </div>
            <div className='productPrice'>
              <p className='priceWord'>PRICE:</p>
              <p className='priceValue'>{price.currency.symbol}{price.amount}</p>
            </div>
            <div className='addToCartPPtButton'>
              <button onClick={()=>this.handleAddToCartClick(this.state.data.product.inStock, this.state.data.product)}>ADD TO CART</button>
            </div>
            <div className='productDesctiprion'>
              <div>{parse(this.state.data.product.description)}</div>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export const ProductPage = withRouter(ProductPageWithoutRouter)

// export function ProductPage() {
//   const [activeImage, setAciveImage] = useState(0);
//   // const shouldUseEffect=useRef(true);
//   const params = useParams()
//   const productId = params.id;
//   const productQuery = makeProductQuery(productId)
//   const { loading, error, data } = useQuery(productQuery)
//   const currentCurrency = useSelector(state => state.currency.currentCurrency)

//   if (loading) return 'Loading...';
//   if (error) return `Error! ${error.message}`;
//   const price = data.product.prices.filter((obj) => obj.currency.symbol === currentCurrency)[0]
//   console.log("data", data);

//   return (
//     <div className='productPageWrapper'>
//       <div className='productPageElementsWrapper'>
//         <div className='smallPictures'>
//           <SmallPictures data={data.product.gallery} setState={setAciveImage} />
//         </div>
//         <div className='MainPicture'>
//           <img src={data.product.gallery[activeImage]} alt='Product' />
//         </div>
//         <div className='productDetails'>
//           <div className='productName'>
//             <h1>{data.product.brand+' '+data.product.name}</h1>
//           </div>
//           <div className='productAttributes'>
//             <Attributes data={data.product.attributes}/>
//           </div>
//           <div className='productPrice'>
//             <p className='priceWord'>PRICE:</p>
//             <p className='priceValue'>{price.currency.symbol}{price.amount}</p>
//           </div>
//           <div className='addToCartPPtButton'>
//             <button>ADD TO CART</button>
//           </div>
//           <div className='productDesctiprion'>
//             <div>{parse(data.product.description)}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
