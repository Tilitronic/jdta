import React, {Component} from 'react';

import { ReactComponent as Arow } from '../../resources/icons/arrow.svg'
import Cart from '../Cart';
import { Dropdown } from '../Dropdown';
import Currencies from './Currencies';

import   './CurrencySelectorAndCart.scss';

export class CurrencySelectorAndCart extends Component {
  
  state = {
    isShow: false,
  };
  dropdownRef = React.createRef();
  headRef = React.createRef();
  handleClickOutside = this.handleClickOutside.bind(this);

  handleCurrencyClick = ()=>{
    this.setState( {isShow: !this.state.isShow})
    this.setState({currentCurrency: this.props.currentCurrency})

  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (
        this.headRef && 
        !this.headRef.current.contains(event.target) && 
        !this.dropdownRef.current.contains(event.target) && 
        this.state.isShow
      ) {
      this.setState( {isShow: !this.state.isShow});
    }
  }

  render(){ 
    return(
    <div className='currencySelectorAndCart'>

    <Dropdown
      className='currencySelector'
      isShow={this.state.isShow}
      childrenClassName='dropdownCurrencies'
      head={
        <div className='currencyLogoAndArrow'>
          <div style={{ paddingRight: '5px' }} className='currentCurrency' onClick={this.handleCurrencyClick} ref={this.headRef}>
            {this.props.currentCurrency} <Arow className={this.state.isShow ? 'rotateArrow arrow' : 'arrow'} />
          </div>
          
        </div>
      }
    >
      <div ref={this.dropdownRef}>
        <Currencies handleCurrencyClick={this.handleCurrencyClick}/>
      </div>
    </Dropdown>
    <Cart />
  </div>
)}} 
