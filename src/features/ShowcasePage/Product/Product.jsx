import { Component } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ReactComponent as AddToCartIcon } from '../../../resources/icons/AddToCart.svg';

import styles from './Product.scss'
export class Product extends Component{
  state={
    addToCartClass: 'addToCart'
  }

  handleMouseOverlay = (move) => {
    if (move === 'over' && this.props.obj.inStock) {
      this.setState({addToCartClass : 'addToCart active'})
    }
    else if (move === 'out') {
      this.setState({addToCartClass : 'addToCart'})
  }}
  render(){
    const picture = this.props.obj.gallery[0];
    const price = this.props.obj.prices.filter((obj) => obj.currency.symbol === this.props.currentCurrency)[0]
    return(
      <div className='productIetemWrapper' key={this.props.obj.id}>
      <div className='productItetm' onMouseOver={() => this.handleMouseOverlay('over')} onMouseOut={() => this.handleMouseOverlay('out')}>
      
        <Link to={'/product'+'/'+this.props.obj.id}>
        <div className={!this.props.obj.inStock ? 'outOfStockProduct' : ''}>
          <div className={!this.props.obj.inStock ? 'outOfStockPicture' : ''}>
            <p style={{display: !this.props.obj.inStock ? 'absolute' : 'none'}} className='outOfStockText'>OUT OF STOCK</p>
          </div>
        </div>
        
        <div className='showcasePicture'>
          <img src={picture} alt={'Picture of ' + this.props.obj.name} />
        </div>
        </Link>
        <div className={this.state.addToCartClass}><AddToCartIcon /></div>
        <div className={!this.props.obj.inStock ? 'showcaseName outOfStock' : 'showcaseName'}>
          <p>{this.props.obj.name}</p>
        </div>
        <div className={!this.props.obj.inStock ? 'showcasePrice outOfStock' : 'showcasePrice'}>
          {price.currency.symbol + price.amount}
        </div>
      </div>
    </div>
    )
  }
}

// export function Product({ obj }) {
//     const currentCurrency = useSelector(state => state.currency.currentCurrency)
//     const picture = obj.gallery[0];
//     const price = obj.prices.filter((obj) => obj.currency.symbol === currentCurrency)[0]
//     const [addToCartClass, setAddToCartClass] = useState('addToCart')
//     const handleMouseOverlay = (move) => {
//       if (move === 'over' && obj.inStock) {
//         setAddToCartClass('addToCart active')
//       }
//       else if (move === 'out') {
//         setAddToCartClass('addToCart')
//       }
//     }
  
//     return (
//       <div className='productIetemWrapper' key={obj.id}>
//         <div className='productItetm' onMouseOver={() => handleMouseOverlay('over')} onMouseOut={() => handleMouseOverlay('out')}>
        
//           <Link to={'/product'+'/'+obj.id}>
//           <div className={!obj.inStock ? 'outOfStockProduct' : ''}>
//             <div className={!obj.inStock ? 'outOfStockPicture' : ''}>
//               <p style={{display: !obj.inStock ? 'absolute' : 'none'}} className='outOfStockText'>OUT OF STOCK</p>
//             </div>
//           </div>
          
//           <div className='showcasePicture'>
//             <img src={picture} alt={'Picture of ' + obj.name} />
//           </div>
//           </Link>
//           <div className={addToCartClass}><AddToCartIcon /></div>
//           <div className={!obj.inStock ? 'showcaseName outOfStock' : 'showcaseName'}>
//             <p>{obj.name}</p>
//           </div>
//           <div className={!obj.inStock ? 'showcasePrice outOfStock' : 'showcasePrice'}>
//             {price.currency.symbol + price.amount}
//           </div>
//         </div>
//       </div>
//     )
//   }