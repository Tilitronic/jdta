import { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as AddToCartIcon } from '../../../resources/icons/AddToCart.svg';

import   './Product.scss'
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

  handleAddToCartClick = function(inStock, product){
    if(!inStock){
      alert('There is no way you can add an absent in stock item to cart!')
    } 
    else {
      let cartKey = product.id+'_';
      const attributesAr = product.attributes.map((obj, index)=>{
        const newJSONObj=JSON.stringify(obj)
        const newObj=JSON.parse(newJSONObj)
        newObj.selectedAttribute = 0;
        cartKey+='a'+index+'i'+0+'_';
        return newObj})

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
  render(){
    const picture = this.props.obj.gallery[0];
    const price = this.props.obj.prices.filter((obj) => obj.currency.symbol === this.props.currentCurrency)[0]
    return(
      <div className='productItemWrapper' key={this.props.obj.id}>
        <div className='SCproductCard'>
      <div className='productItetm' onMouseOver={() => this.handleMouseOverlay('over')} onMouseOut={() => this.handleMouseOverlay('out')}>
        <Link to={'/product/'+this.props.obj.id}>
        <div className={!this.props.obj.inStock ? 'outOfStockProduct' : ''}>
          <div className={!this.props.obj.inStock ? 'outOfStockPicture' : ''}>
            <p style={{display: !this.props.obj.inStock ? 'absolute' : 'none'}} className='outOfStockText'>OUT OF STOCK</p>
          </div>
        </div>
        
        <div className='showcasePicture'>
          <img src={picture} alt={'Picture of ' + this.props.obj.name} />
        </div>
        </Link>
        <div className={this.state.addToCartClass} onClick={()=>this.handleAddToCartClick(this.props.obj.inStock, this.props.obj)}><AddToCartIcon /></div>
        <div className='SPpriceAndName'>
        <div className={!this.props.obj.inStock ? 'showcaseName outOfStock' : 'showcaseName'}>
          <p>{this.props.obj.name}</p>
        </div>
        <div className={!this.props.obj.inStock ? 'showcasePrice outOfStock' : 'showcasePrice'}>
          {price.currency.symbol + price.amount}
        </div>
        </div>
      </div>
      </div>
    </div>
    )
  }
}

