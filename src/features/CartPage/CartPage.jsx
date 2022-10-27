import {Component} from 'react';
import CartPageProduct from './CartPageProduct';


import styles from './CartPage.scss';

export class CartPage extends Component{

  roundNumber = function (number){
    return Math.round((number + Number.EPSILON) * 100) / 100
   }
  countTax=(number)=>{
    return this.roundNumber(number/100*21)
  }
  render(){
    if(this.props.productsList.length===0){return null}
    const price = this.props.totalPrice.find(obj => this.props.currentCurrency === obj.currency.symbol)
    const quantity = this.props.productsList.reduce((prevVal, obj)=>prevVal+obj.amount, 0)

    return  (
      <div className='cartPageWrapper'>
        <div className='CPelementsWrapper'>
        <h1 className='CPtitle'>CART</h1>

        <div className='CPproductsWrapper'>
            { this.props.productsList.map((obj, index) => {
                    return <CartPageProduct data={obj} key={'CartPageProduct' + index} />
            })}
        </div>

        <div className='CPbottomElementsWrapper'>
            <div className='CBPtextWrapper'>
              <p className='CPBfirstText'>Tax 21%:</p>
              <p className='CPBsecondText'>{price.currency.symbol+this.countTax(price.amount)}</p>
            </div>
            <div className='CBPtextWrapper'>
              <p className='CPBfirstText'>Quantity:</p>
              <p className='CPBsecondText'>{quantity}</p>
            </div>
            <div className='CBPtextWrapper'>
              <p className='CPBfirstText'>Total:</p>
              <p className='CPBsecondText'>{price.currency.symbol+this.roundNumber(price.amount)}</p>
            </div>
            <div>
              <button className='CBorderButton'>ORDER</button>
            </div>
        </div>
        </div>
      </div>
    )
  }
}
