import   './CartMenuProduct.scss';
import { Component } from 'react';

export class CartMenuProduct extends Component {
  handleAmountChange=function(action, productItem){
    if(action==='+'){
      this.props.increaseAmount(productItem);
    }
    else if(action==='-'){
      this.props.decreaseAmount(productItem);
    }
  };
  render() {
    if (!this.props.data?.attributes){return null;}
    // console.log(this.props.data)
    const price = this.props.data?.prices?this.props.data?.prices.find(obj => this.props.currentCurrency === obj.currency.symbol):null;

    const attributesAr = this.props.data.attributes.map((obj1, index1) => {
      const  elementsAr = obj1.items.map((obj2, index2) => {
        const backgroundColor = obj1.name==='Color' ? obj2.value : '#ffffff';
        const selected = obj1.selectedAttribute===index2 ? 'selected ' : '';
        return (
          <div className={'CMPattributeItem '+selected+obj1.name} key={obj1.name+'.item.'+index2}>
            {/* <div className='CMPattributeDisplayValue'>{obj2.displayValue}</div> */}
            <div className='CMPattributeValue' title={obj2.displayValue}>{obj2.value}</div>
            <div className='CMPcolorAttribute' style={{ backgroundColor: backgroundColor }} title={obj2.displayValue}></div>
          </div>
        );
      });
      return (
        <div className={'CMPproductAttribute '+obj1.name} key={obj1.name+'attribute' + index1}>
          <p className='CMPattributeName'>{obj1.name + ':'}</p>
          <div className={'CMPattributeItemsWrapper '+obj1.name}>
            {elementsAr}
          </div>
        </div>
      );
    });


    return (
      <div className='cartMenuProductElementsWrapper'>
        <div className='cartMenuProductDetails'>
          <div className='CMPbrand'>
            <p>{this.props.data.brand}</p>
          </div>
          <div className='CMPname'>
            <p>{this.props.data.name}</p>
          </div>
          <div className='CMPprice'>
            <p>{price ? price.currency.symbol + price.amount : null}</p>
          </div>
          <div className='CMPattributes'>
            {attributesAr}
          </div>
        </div>

        <div className='CMPamountControl'>
          <button className='CMPamount plus' onClick={() => this.handleAmountChange('+', this.props.data)}><hr/><hr/></button>
          <div className='CMPamountValue'>{this.props.data.amount}</div>
          <button className='CMPamount minus' onClick={() => this.handleAmountChange('-', this.props.data)}><hr/></button>
        </div>

        <div className='CMPpicture'>
          <img src={this.props.data.gallery[0]} alt='Added to cart product' />
        </div>

      </div>
    );
  }
}
