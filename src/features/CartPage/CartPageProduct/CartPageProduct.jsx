import styles from './CartPageProduct.scss';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {parse} from 'html-react-parser'
import {ReactComponent as ArrowT2} from '../../../resources/icons/arrowType2.svg'

export class CartPageProduct extends Component {
    state={
        selectedImage: 0
    }
    handleAmountChange=function(action, productItem){
        if(action==='+'){
            this.props.increaseAmount(productItem)
        }
        else if(action==='-'){
            this.props.decreaseAmount(productItem)
        }
    }
    handleImageControl=function(action){
        if(action==='next' && this.state.selectedImage+1<this.props.data.gallery.length-1){
            this.setState({selectedImage: this.state.selectedImage+1})
        }
        else if(action==='prev' && this.state.selectedImage-1>=0){
            this.setState({selectedImage: this.state.selectedImage-1})
        }
    }
    render() {
        if (!this.props.data?.attributes){return null} 
        console.log(this.props.data)
        const price = this.props.data?.prices?this.props.data?.prices.find(obj => this.props.currentCurrency === obj.currency.symbol):null

        const attributesAr = this.props.data.attributes.map((obj1, index1) => {
            const  elementsAr = obj1.items.map((obj2, index2)=>{
                const backgroundColor = obj1.name==='Color' ? obj2.value : '#ffffff'
                const selected = obj1.selectedAttribute===index2 ? `selected ` : ''
                return (
                  <div className={`CPPattributeItem `+selected+obj1.name} key={obj1.name+'.item.'+index2}>
                    {/* <div className='CPPattributeDisplayValue'>{obj2.displayValue}</div> */}
                    <div className='CPPattributeValue' title={obj2.displayValue}>{obj2.value}</div>
                    <div className='CPPcolorAttribute' style={{backgroundColor: backgroundColor}} title={obj2.displayValue}></div>
                  </div>
                )
              })
            return (
                <div className={`CPPproductAttribute `+obj1.name} key={obj1.name+'attribute' + index1}>
                    <p className='CPPattributeName'>{obj1.name.toUpperCase() + ':'}</p>
                    <div className={`CPPattributeItemsWrapper `+obj1.name}>
                        {elementsAr}
                    </div>
                </div>
            )
        })


        return (
            <>
            <hr className='CPPrule'/>
            <div className='cartPageProductElementsWrapper'>
                
                <div className='cartPageProductDetails'>
                    <div className='CPPbrand'>
                        <p>{this.props.data.brand}</p>
                    </div>
                    <div className='CPPname'>
                        <p>{this.props.data.name}</p>
                    </div>
                    <div className='CPPprice'>
                        <p>{price ? price.currency.symbol + price.amount : null}</p>
                    </div>
                    <div className='CPPattributes'>
                        {attributesAr}
                    </div>
                </div>

                <div className='CPPamountControl'>
                    <button className='CPPamount+' onClick={()=>this.handleAmountChange('+', this.props.data)}>+</button>
                    <div className='CPPamountValue'>{this.props.data.amount}</div>
                    <button className='CPPamount-' onClick={()=>this.handleAmountChange('-', this.props.data)}>-</button>
                </div>

                <div className='CPPpictureWrapper'>
                    <img className='CPPpicture' src={this.props.data.gallery[this.state.selectedImage]} alt='picture of added to cart product' />
                    <div 
                        className='CPPpictureControl'
                        style={{display: this.props.data.gallery.length>1 ? 'flex':'none'}}
                    >
                        <div className='CPPcontrolButton prev' onClick={()=>this.handleImageControl('prev')}><ArrowT2/></div>
                        <div className='CPPcontrolButton next' onClick={()=>this.handleImageControl('next')}><ArrowT2/></div>

                    </div>
                </div>

            </div>
            </>
        )
    }
}
